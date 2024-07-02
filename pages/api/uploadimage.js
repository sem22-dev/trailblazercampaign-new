import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, base64Image } = req.body;

    if (!name || !base64Image) {
        return res.status(400).json({ error: 'Name and base64Image are required' });
    }

    const query = `UPDATE users SET profile_picture = ? WHERE name = ?`;

    try {
        const [results] = await connection.query(query, [base64Image, name]);
        res.status(200).json({ message: 'Profile picture updated successfully' });
    } catch (err) {
        console.error('Error updating profile picture: ' + err.stack);
        res.status(500).json({ error: 'Internal server error' });
    }
};
