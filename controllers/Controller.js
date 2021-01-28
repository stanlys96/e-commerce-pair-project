class Controller {
  static homePage(req, res) {
    res.render('login');
  }

  static registerPage(req, res) {
    res.render('register');
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