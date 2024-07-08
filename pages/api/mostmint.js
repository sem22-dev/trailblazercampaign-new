import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const limit = req.query.limit ? parseInt(req.query.limit) : 20;

    try {
        const [results] = await connection.query(`
            SELECT * FROM taikocampaign
            ORDER BY CAST(totalmint AS UNSIGNED) DESC
            LIMIT ${limit}
        `);

        const response = results.length > 0
            ? results.map((row, index) => ({
                rank: index + 1,
                username: row.username || "Anonymous", // Handle null or empty usernames
                rankScore: row.totalmint,
                nfts: row.totalmint,
                profile: row.profilepic && row.profilepic.length ? row.profilepic.toString('base64') : null, // Handle Buffer profile pic
            }))
            : { message: 'No records found in the taikocampaign table.' };

        res.json(response);
    } catch (error) {
        console.error('Error fetching data from taikocampaign table:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
