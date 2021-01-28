const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();

router.get('/', Controller.loginPage);
router.post('/', Controller.loginPost);

module.exports = router;