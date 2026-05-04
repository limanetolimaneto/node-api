const express = require('express');
const router = express.Router();

//  “Controller, você não cria o service — eu vou te entregar um pronto.”
const connectClass = require('../repositories/json.repository');
const connect = new connectClass();

const userServiceClass = require('../services/user.service')
const userService = new userServiceClass(connect);

const userControllerClass = require('../controllers/user.controllers');
const userController = new userControllerClass(userService);

// USER ENDPONTS ================================================

    router.get('/', (req, res) => userController.index(req, res));

    router.post('/', (req, res) => userController.store(req, res));

    router.put('/:id', (req,res) => userController.update(req, res));

    router.delete('/:id', (req,res) => userController.delete(req, res));

// ==============================================================

module.exports = router;

