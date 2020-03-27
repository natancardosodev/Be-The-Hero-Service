const connection = require('../database/connection');

const tableName = 'ongs';

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection(tableName)
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({
                error: 'No ONG found with this ID'
            });
        }

        return response.json(ong);
    }
}
