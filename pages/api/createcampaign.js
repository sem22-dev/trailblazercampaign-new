import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { symbol, name, feeRecipient } = req.body;

    if (!symbol || !name || !feeRecipient) {
        return res.status(400).json({ error: 'symbol, name, and feeRecipient are required' });
    }

    const checkQuery = 'SELECT * FROM taikocampaigncollection WHERE symbol = ?';

    try {
        const [results] = await connection.query(checkQuery, [symbol]);

        if (results.length > 0) {
            res.status(409).json({ error: 'Campaign already exists' });
        } else {
            const insertQuery = 'INSERT INTO taikocampaigncollection (symbol, name, feeRecipient) VALUES (?, ?, ?)';
            await connection.query(insertQuery, [symbol, name, feeRecipient]);
            res.status(200).json({ message: 'Campaign collection created successfully' });
        }
    } catch (err) {
        console.error('Error creating campaign collection: ' + err.stack);
        res.status(500).json({ error: 'Internal server error' });
    }
};
