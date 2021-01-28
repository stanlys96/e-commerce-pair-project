class Controller {
  static homePage(req, res) {
    res.render('login');
  }

  static registerPage(req, res) {
    res.send('Register Page');
  }

  static loginPage(req, res) {
    res.send('Login Page');
  }

  static productPage(req, res) {
    res.send('Product Page');
  }

  static shoppingCartPage(req, res) {
    res.send('Shopping Cart Page');
  }

  static orderDetailsPage(req, res) {
    res.send('Order Details Page');
  }
}

module.exports = Controller;