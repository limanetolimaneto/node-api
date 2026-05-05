const JsonRepository = require('../repositories/json.repository');
const ClientRepository = require('../repositories/client.repository');
const ClientService = require('../services/client.service');
const ClientController = require('../controllers/client.controller');

module.exports = (container) => {
  container.bind('JsonRepository', () => {
    return new JsonRepository();
  });

  container.bind('ClientRepository', (container) => {
    const jsonRepository = container.resolve('JsonRepository');
    return new ClientRepository(jsonRepository);
  });

  container.bind('ClientService', (container) => {
    const clientRepository = container.resolve('ClientRepository');
    return new ClientService(clientRepository);
  });

  container.bind('ClientController', (container) => {
    const clientService = container.resolve('ClientService');
    return new ClientController(clientService);
  });

};