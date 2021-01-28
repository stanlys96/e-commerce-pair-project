const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

const registerRoutes = require('./register');
const loginRoutes = require('./login');
const productRoutes = require('./products');
const shoppingCartRoutes = require('./shoppingCart');
const orderDetails = require('./orderDetails');
const logoutRoutes = require('./logout');

router.get('/', Controller.homePage);

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/products', productRoutes);
router.use('/shoppingcart', shoppingCartRoutes);
router.use('/orderdetails', orderDetails);
router.use('/logout', logoutRoutes);

module.exports = router;