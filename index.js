const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
 */
app.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Natan Cardoso'
    })
});

app.listen(3333);