const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();
const registerRoutes = require('./register');
const loginRoutes = require('./login');
const productRoutes = require('./products');
const shoppingCartRoutes = require('./shoppingCart');
const orderDetails = require('./orderDetails');

router.get('/', Controller.homePage);

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/products', productRoutes);
router.use('/shoppingcart', shoppingCartRoutes);
router.use('/orderdetails', orderDetails);

module.exports = router;