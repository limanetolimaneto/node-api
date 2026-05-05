const JsonRepository = require('../repositories/json.repository');
const ClientService = require('../services/client.service');
const ClientController = require('../controllers/client.controller');

module.exports = (container) => {
  container.bind('JsonRepository', () => {
    return new JsonRepository();
  });

  container.bind('ClientService', (container) => {
    const repo = container.resolve('JsonRepository');
    return new ClientService(repo);
  });

  container.bind('ClientController', (container) => {
    const service = container.resolve('ClientService');
    return new ClientController(service);
  });
};