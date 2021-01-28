const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();

router.get('/', Controller.productPage);

module.exports = router;