const { Customer, Order, Product } = require('../models/index');

class Controller {
  // Home page
  static homePage(req, res) {
    res.render('home');
  }

  // Register page
  static registerPage(req, res) {
    res.render('register');
  }

  static registerPost(req, res) {

  }

  static loginPage(req, res) {
    res.render('login');
  }

  static productPage(req, res) {
    res.render('products');
  }

  static shoppingCartPage(req, res) {
    res.render('shoppingCart');
  }

  static orderDetailsPage(req, res) {
    res.render('orderDetails');
  }
}

module.exports = Controller;