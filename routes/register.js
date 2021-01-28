const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();

router.get('/', Controller.registerPage);
router.post('/', Controller.registerPost);

module.exports = router;