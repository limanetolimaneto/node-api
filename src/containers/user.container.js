const JsonRepository = require('../repositories/json.repository');
const UserRepository = require('../repositories/user.repository');
const UserService = require('../services/user.service');
const UserController = require('../controllers/user.controllers');

module.exports = (container) => {
  container.bind('JsonRepository', () => {
    return new JsonRepository();
  });

  container.bind('UserRepository', (container) => {
    const jsonRepository = container.resolve('JsonRepository');
    return new UserRepository(jsonRepository);
  });

  container.bind('UserService', (container) => {
    const userRepository = container.resolve('UserRepository');
    return new UserService(userRepository);
  });

  container.bind('UserController', (container) => {
    const userService = container.resolve('UserService');
    return new UserController(userService);
  });
};