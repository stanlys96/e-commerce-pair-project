const { Product } = require(`../models`)

class ProductController {
    static productPage (req, res) {
        Product
        .findAll()
        .then((data) => {
            res.render('products', {products: data})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static productsById (req, res) {
        Product
            .findByPk(req.params.id)
            .then((data) => {
                res.render('products', { products: [data]})
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = ProductController