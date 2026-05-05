const JsonRepository = require('../repositories/json.repository');
const UserService = require('../services/user.service');
const UserController = require('../controllers/user.controllers');
const UserCreater = require('../repositories/user.creater');

module.exports = (container) => {
  container.bind('UserCreater', () => {
    return new UserCreater();
  });

  container.bind('UserRepository', (container) => {
    const userCreater = container.resolve('UserCreater');
    return new JsonRepository(userCreater);
  });

  container.bind('UserService', (container) => {
    const repo = container.resolve('JsonRepository');
    return new UserService(repo);
  });

  container.bind('UserController', (container) => {
    const service = container.resolve('UserService');
    return new UserController(service);
  });
};