# Be The Hero - Service
<img style="float: left; position: relative; top: 0; margin-right: 15px" src="src/assets/logo.png">
O Be The Hero, do inglês, 'Seja o Herói, foi a aplicação desenvolvida na Semana OmniStack 11 da Rocktseat. Essa aplicação tem como objetivo conectar pessoas que querem ajudar uma organização não governavental (ONG). Através da aplicação serão listados casos que precisam de ajuda. Esse é o projeto back-end feito com Node.JS.

## Instalação
```cmd
-- Instalar pacotes npm
npm install
-- gerar todas as migrations
npm run update-db
```

## Execução
```cmd
npm run start
```
> Caso seja necessário excluir a base de dados, execute: `npm run rm-db`. Depois gere novamente as migrations.

## Testes unitários e de integração com Jest
```cmd
npm run test
```

## Ferramentas utilizadas
* **Node.JS** - Uma plataforma escrita em cima do motor V8 do Google Chrome. Sendo assim, é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução.
* **Express** - É um framework para Node.js que contém um conjunto de recursos para desenvolver aplicações web, como um sistema de Views intuitivo (MVC) e um robusto sistema de roteamento.
* **Nodemon** - É um utilitário que irá monitorar todas as alterações nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessário.
* **CORS** - (Cross-Origin Resource Sharing) é uma especificação do W3C que, quando implementado pelo navegador, permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
* **SQLite** - É uma base de dados independente que opera sem a necessidade de um servidor. Suporta estes tipos de dados: Blob, Integer, Null, Text e Real
* **Knex** - É um construtor de consultas SQL (Query Builder), usado principalmente para aplicativos Node.js, com criação de esquema de modelo integrada e migrações de tabelas:
```js
npx knex init // cria arquivo knexfile.js
// Adicione os diretorios a configuração
npx knex migrate:make create_ongs 
// Configure a migration
npx knex migrate:latest // gera todas as migrations
```

## Tipos de Parâmetros
* **Query:** Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação) - request.query;
* **Route Params:** Parâmetros utilizados para identificar recursos (/:id) - request.params;
* **Request Body:** Corpo da requisição, utilizado para criar ou alterar recursos - request.body;

## Environment no Insomnia
Endpoint: `{{ base_url  }}{{ endpoint  }}`
```json
{
  "base_url": "http://localhost:3333",
  "endpoint": "/ongs"
}
```

## Endpoints
### ONGS
* **GET:** http://localhost:3333/ongs
* **POST:** http://localhost:3333/ongs
```json
{
	"name": "APESOC",
	"email": "contato@apesoc.com.br",
	"whatsapp": "83000000",
	"city": "João Pessoa",
	"uf": "PB"
}
```

### INCIDENTS (Casos)
* **GET:** http://localhost:3333/incidents?page=2

Header Response: 'X-Total-Count': Total de incidents

* **POST:** http://localhost:3333/incidents

Header Request: 'Authorization': '410ace8b' (ong_id)
```json
{
	"title": "Caso Joao",
	"description": "Detalhes do caso",
	"value": 80
}
```
* **DELETE:** http://localhost:3333/incidents/2

Header Request: 'Authorization': '410ace8b' (ong_id)

### PROFILE (Get Ong Incidents)
* **GET:** http://localhost:3333/profile

Header Request: 'Authorization': '410ace8b' (ong_id)

### SESSION
* **POST:** http://localhost:3333/session
```json
{
	"id": "410ace8b"
}
```