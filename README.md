# Projeto Backend da Semana OmniStack 11

## Environment no Insomnia
```json
{
  "base_url": "http://localhost:3333"
}
```
## Tipos de Parâmetros
* Query: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação) - request.query;
* Route Params: Parâmetros utilizados para identificar recursos (/:id) - request.params;
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos - request.body;

## Knex - Query Builder
```
npx knex init
```