class Controller {
  static homePage(req, res) {
    res.send('Home Page');
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

  static customerCartPage(req, res) {
    res.send('Cart Page');
  }

  static orderDetailsPage(req, res) {
    res.send('Order Details Page');
  }
}

module.exports = Controller;