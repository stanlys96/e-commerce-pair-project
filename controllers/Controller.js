const { Customer, Order, Product } = require('../models/index');

class Controller {
  // Home page
  static homePage(req, res) {
    res.render('home');
  }

  // Register page
  static registerPage(req, res) {
    let error;
    res.render('register', { error });
  }

  static registerPost(req, res) {
    let { full_name, email, address, phone_number, username, password } = req.body;
    let newCustomer = {
      full_name,
      email,
      address,
      phone_number,
      username,
      password
    }

    Customer
      .create(newCustomer)
      .then(() => {
        res.redirect('/products');
      })
      .catch(err => {
        let messages = [];
        if (err.errors.length > 0) {
          err.errors.forEach(element => {
            messages.push(element.message);
          })
        }
        res.render('register', { error: messages });
      })
  }

  static loginPage(req, res) {
    let salah;
    res.render('login', { salah });
  }

  static loginPost(req, res) {
    let { username, password } = req.body;
    Customer
      .findOne({
        where: {
          username
        }
      })
      .then((customer) => {
        if (customer.username === username && customer.password === password) {
          req.session.userId = customer.id;

          Customer
            .update({
              isLoggedIn: true
            }, {
              where: {
                username
              }
            })

          res.redirect('/products');
        } else {
          let salah = 'Username/password salah';
          res.render('login', { salah });
        }
      })
      .catch(err => {
        let salah = 'Username/password salah';
        res.render('login', { salah });
      })
  }

  static logout(req, res) {
    Customer
      .findOne({
        where: {
          isLoggedIn: true
        }
      })
      .then((customer) => {
<<<<<<< HEAD
        Customer
          .update({
            isLoggedIn: false
          }, {
            where: {
              id: customer.id
            }
          })
          .then(() => {
            if (req.session.userId) {
              req.session.userId = undefined;
            }
            res.redirect('/')
          })
          .catch((err) => {
            res.send(err);
          })
=======
        if (!customer) {
          res.redirect('/');
        } else {
          Customer
            .update({
              isLoggedIn: false
            }, {
              where: {
                id: customer.id
              }
            })
            .then(() => {
              if (req.session.userId) {
                req.session.userId = undefined;
              }
              res.redirect('/')
            })
            .catch((err) => {
              res.send(err);
            })
        }
>>>>>>> stanlykwok
      })
      .catch(err => {
        res.send(err);
      })
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