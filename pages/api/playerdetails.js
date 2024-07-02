import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { address, house, housetype, housename } = req.body;

    if (!address || !house || !housetype || !housename) {
        return res.status(400).json({ error: 'address, house, housetype, and housename are required' });
    }

    const checkQuery = 'SELECT totalmint FROM taikocampaign WHERE address = ?';

    try {
        const [results] = await connection.query(checkQuery, [address]);

        if (results.length > 0) {
            const currentTotalMint = parseInt(results[0].totalmint, 10) || 0;
            const newTotalMint = currentTotalMint + 1;

            const updateQuery = 'UPDATE taikocampaign SET house = ?, housetype = ?, housename = ?, totalmint = ? WHERE address = ?';
            await connection.query(updateQuery, [house, housetype, housename, newTotalMint, address]);
            res.status(200).json({ message: 'Player details updated successfully' });
        } else {
            const insertQuery = 'INSERT INTO taikocampaign (address, house, housetype, housename, totalmint) VALUES (?, ?, ?, ?, 1)';
            await connection.query(insertQuery, [address, house, housetype, housename]);
            res.status(200).json({ message: 'Player details saved successfully' });
        }
    } catch (err) {
        console.error('Error saving player details: ' + err.stack);
        res.status(500).json({ error: 'Internal server error' });
    }
};
