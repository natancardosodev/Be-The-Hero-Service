const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentsController = require('./controllers/IncidentsController');
const Validators = require('./validators');

const routes = express.Router();

const endpointSession = '/session';
const endpointOngs = '/ongs';
const endpointProfile = '/profile';
const endpointIncidents = '/incidents';

routes.post(endpointSession, SessionController.create);

routes.get(endpointOngs, OngController.index);
routes.post(endpointOngs, Validators.OngPost, OngController.create);

routes.get(endpointProfile, Validators.ProfileGet, ProfileController.index);

routes.get(endpointIncidents, Validators.IncidentsGet, IncidentsController.index);
routes.post(endpointIncidents, IncidentsController.create);
routes.delete(endpointIncidents + '/:id', Validators.IncidentsDelete, IncidentsController.delete);

module.exports = routes;