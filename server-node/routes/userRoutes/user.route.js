const express = require('express');

const route = express.Router();
const controller = require('../../controller/userController/user.controller');

route.get('/', controller.getuser);
route.post('/adduser', controller.adduser);
route.post('/deleteuser', controller.deleteuser);
route.get('/getuserById', controller.getuserById);

module.exports = route;
