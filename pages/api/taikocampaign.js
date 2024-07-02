import connection from '../../lib/db';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { address, ...updateFields } = req.body;

    if (!address) {
        return res.status(400).json({ error: 'address is required' });
    }

    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No fields to update' });
    }

    const checkQuery = 'SELECT * FROM taikocampaign WHERE address = ?';

    try {
        const [results] = await connection.query(checkQuery, [address]);

        if (results.length === 0) {
            return res.status(404).json({ error: 'User with the given address does not exist' });
        } else {
            const existingCategories = results[0].categories;
            const fields = [];
            const values = [];

            Object.keys(updateFields).forEach(key => {
                fields.push(`${key} = ?`);
                values.push(updateFields[key]);
            });

            if (!updateFields.hasOwnProperty('categories')) {
                fields.push('categories = ?');
                values.push(existingCategories);
            }

            values.push(address);

            const updateQuery = `UPDATE taikocampaign SET ${fields.join(', ')} WHERE address = ?`;
            await connection.query(updateQuery, values);
            res.status(200).json({ message: 'taikocampaign details updated successfully' });
        }
    } catch (err) {
        console.error('Error updating taikocampaign details: ' + err.stack);
        res.status(500).json({ error: 'Internal server error' });
    }
};
