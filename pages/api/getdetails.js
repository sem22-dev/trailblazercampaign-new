import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const limit = req.query.limit ? parseInt(req.query.limit) : 20;

    try {
        const [results] = await connection.query(`SELECT * FROM taikocampaign ORDER BY totalmint DESC LIMIT ${limit}`);

        const response = results.length > 0
            ? results.map((row, index) => ({
                rank: index + 1,
                wallet: row.address,
                username: row.username, //username 
                rankScore: index + 1,
                nfts: row.totalmint,
                labels: row.categories,
                activity: `https://mintpad-trailblazers.vercel.app/activity-example.svg`,
                avatar: `https://res.cloudinary.com/twdin/image/upload/v1719839745/avatar-example_mc0r1g.png`,
                opensea: row.opensea,
                twitter: row.twitter,
                blockscan: row.Blockscan,
            }))
            : { message: 'No records found in the taikocampaign table.' };

        res.json(response);
    } catch (error) {
        console.error('Error fetching data from taikocampaign table:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
