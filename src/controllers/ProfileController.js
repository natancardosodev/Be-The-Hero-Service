const connection = require('../database/connection');

const tableName = 'incidents';

module.exports = {
    /**
     * Get Ong Incidents 
     * @param {*} request 
     * @param {*} response 
     */
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection(tableName)
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}
