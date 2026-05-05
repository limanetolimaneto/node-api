const express = require('express');
const router = express.Router();
const container = require("../containers/container");

const userController = container.resolve('UserController');


// USER ENDPONTS ================================================

    router.get('/', (req, res) => userController.index(req, res));

    router.post('/', (req, res) => userController.store(req, res));

    router.put('/:id', (req,res) => userController.update(req, res));

    router.delete('/:id', (req,res) => userController.delete(req, res));

// ==============================================================

module.exports = router;

