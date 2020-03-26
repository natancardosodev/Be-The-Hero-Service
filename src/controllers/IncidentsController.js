const connection = require('../database/connection');

const tableName = 'incidents';

module.exports = {
    async index(request, response) {
        const incidents = await connection(tableName).select('*');

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection(tableName).insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection(tableName)
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        await connection(tableName).where('id', id).delete();

        return response.status(204).send();
    }
    
}