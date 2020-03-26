const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');

const routes = express.Router();

const endpointOngs = '/ongs';
const endpointIncidents = '/incidents';

routes.get(endpointOngs, OngController.index);
routes.post(endpointOngs, OngController.create);

routes.get(endpointIncidents, IncidentsController.index);
routes.post(endpointIncidents, IncidentsController.create);
routes.delete(endpointIncidents + '/:id', IncidentsController.delete);

module.exports = routes;