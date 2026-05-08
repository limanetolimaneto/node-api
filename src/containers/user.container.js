const Repository = require('../repositories/mysql/mysql.repository');
const UserRepository = require('../repositories/mysql/user.repository');
const UserService = require('../services/user.service');
const UserController = require('../controllers/user.controllers');

module.exports = (container) => {
  container.bind('Repository', () => {
    return new Repository();
  });

  container.bind('UserRepository', (container) => {
    const repository = container.resolve('Repository');
    return new UserRepository(repository);
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