const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

const registerRoutes = require('./register');
const loginRoutes = require('./login');
const productRoutes = require('./products');
const orderDetails = require('./orderDetails');
const logoutRoutes = require('./logout');
const updateRoutes = require('./update');
const customerDetailRoutes = require('./customerDetails');

router.get('/', Controller.homePage);

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/products', productRoutes);
router.use('/orderdetails', orderDetails);
router.use('/logout', logoutRoutes);
router.use('/update', updateRoutes);
router.use('/customerdetails', customerDetailRoutes);

module.exports = router;