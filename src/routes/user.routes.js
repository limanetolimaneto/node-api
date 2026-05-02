const express = require('express');
const router = express.Router();

//  “Controller, você não cria o service — eu vou te entregar um pronto.”
const connectClass = require('../controllers/json.repository');
const connect = new connectClass();

const userServiceClass = require('../services/user.service')
const userService = new userServiceClass(connect);

const userControllerClass = require('../controllers/user.controllers');
const userController = new userControllerClass(userService);

router.get('/', (req, res) => userController.index(req, res));

module.exports = router;

