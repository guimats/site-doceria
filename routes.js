const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const aboutController = require('./src/controllers/aboutController');

// Rotas da home
route.get('/', homeController.index);

// Rotas do sobre nós
route.get('/about-us', aboutController.index);

module.exports = route;
