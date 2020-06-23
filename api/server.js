const express = require("express");

// const db = require("../data/dbConfig.js");
// const accountRouter= require('../accounts/account-router');

const carsRouter = require('../cars/cars-router');
const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);

module.exports = server;