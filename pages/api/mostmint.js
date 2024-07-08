import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const limit = req.query.limit ? parseInt(req.query.limit) : 20;

    try {
        const [results] = await connection.query(`
            SELECT * FROM taikocampaign
            ORDER BY totalmint DESC
            LIMIT ${limit}
        `);

        const response = results.length > 0
            ? results.map((row, index) => ({
                rank: index + 1,
                username: row.username,
                rankScore: index + 1,
                nfts: row.totalmint,
                profile: row.profilepic,
            }))
            : { message: 'No records found in the taikocampaign table.' };

        res.json(response);
    } catch (error) {
        console.error('Error fetching data from taikocampaign table:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
