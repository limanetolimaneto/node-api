const express = require('express');
const router = express.Router();
const container = require("../containers/container");

const clientController = container.resolve("ClientController");


// USER ENDPONTS ================================================

    router.get('/', (req, res) => clientController.index(req, res));

    router.post('/', (req, res) => clientController.store(req, res));

    router.put('/:id', (req,res) => clientController.update(req, res));

    router.delete('/:id', (req,res) => clientController.delete(req, res));

// ==============================================================

module.exports = router;
