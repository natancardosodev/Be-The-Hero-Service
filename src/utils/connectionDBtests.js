const connection = require('../database/connection');

module.exports = function ConnectionDBtests() {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
}