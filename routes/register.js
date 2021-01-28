const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();

router.get('/', Controller.registerPage);

module.exports = router;