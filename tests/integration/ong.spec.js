const request = require('supertest');
const app = require('../../src/app');
const connectionDBtests = require('../../src/utils/connectionDBtests');

describe('ONG', () => {
    connectionDBtests();

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APED",
                email: "contato@aped.com.br",
                whatsapp: "8300000000",
                city: "João Pessoa",
                uf: "PB"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});