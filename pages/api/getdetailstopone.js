import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const [results] = await connection.query('SELECT * FROM taikocampaign');
        let highestMintRecord = null;
        results.forEach((row) => {
            if (!highestMintRecord || parseInt(row.totalmint) > parseInt(highestMintRecord.totalmint)) {
                highestMintRecord = row;
            }
        });

        const response = highestMintRecord
            ? { data: highestMintRecord }
            : { message: 'No records found in the taikocampaign table.' };

        res.json(response);
    } catch (error) {
        console.error('Error fetching data from taikocampaign table:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
