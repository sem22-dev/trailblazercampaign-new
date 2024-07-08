import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const limit = req.query.limit ? parseInt(req.query.limit) : 20;

    try {
        const [results] = await connection.query(`SELECT address, name, type, symbol FROM collections ORDER BY name LIMIT ${limit}`);

        if (results.length === 0) {
            return res.json({ message: 'No records found in the collections table.' });
        }

        const enhancedResults = [];

        for (const item of results) {
            const apiUrl = `https://blockscoutapi.hekla.taiko.xyz/api?module=token&action=getToken&contractaddress=${item.address}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status === "1" && data.result && data.result.totalSupply) {
                const holdersApiUrl = `https://blockscoutapi.hekla.taiko.xyz/api?module=token&action=getTokenHolders&contractaddress=${item.address}&page=1&offset=10000`;
                const holdersResponse = await fetch(holdersApiUrl);
                const holdersData = await holdersResponse.json();

                // Find the holder with the maximum value
                let maxHolder = null;
                if (holdersData.status === "1" && holdersData.result && holdersData.result.length > 0) {
                    maxHolder = holdersData.result.reduce((max, holder) => {
                        return (parseInt(holder.value) > parseInt(max.value)) ? holder : max;
                    });
                }
// here  this endpoint is to fetch the top contract using the local db
                const enhancedItem = {
                    address: item.address,
                    name: item.name,
                    type: item.type,
                    symbol: item.symbol,
                    additionalInfo: data,
                    tokenHolder: maxHolder
                };
                enhancedResults.push(enhancedItem);
            }
        }
// sort to descending order and list out contract and top holders details
        enhancedResults.sort((a, b) => {
            const totalSupplyA = parseInt(a.additionalInfo.result.totalSupply);
            const totalSupplyB = parseInt(b.additionalInfo.result.totalSupply);
            return totalSupplyB - totalSupplyA;
        });

        res.json(enhancedResults);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};