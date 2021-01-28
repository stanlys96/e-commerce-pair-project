const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();

const mid = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
}

router.get('/', mid, Controller.orderDetailsPage);

module.exports = router;