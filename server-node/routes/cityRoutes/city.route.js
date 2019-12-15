const express = require('express');

const route = express.Router();
const controller = require('../../controller/cityController/city.controller');

route.get('/', controller.getcity);
route.get('/cityById', controller.getcityById);

module.exports = route;