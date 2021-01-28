const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();

router.get('/:id', Controller.logout);

module.exports = router;