const express = require("express");
const router = express.Router();

const JsonRepositoryClass = require("../repositories/json.repository");
const JsonRepository = new JsonRepositoryClass();

const FakerServiceClass = require("../services/faker.service");
const FakerService = new FakerServiceClass(JsonRepository);

const FakerControllerClass = require("../controllers/faker.controller");
const FakeController = new FakerControllerClass(FakerService);

router.get("/user",( req, res ) => {FakeController.fakeUser( req, res )});

module.exports = router;


