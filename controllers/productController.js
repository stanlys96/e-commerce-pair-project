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

    static buyProduct (req, res) {
        const options = {
            include: [OrderDetail]
        }
        let tmp;
        Product
            .decrement('stock', { where: { id: id }})
            .then((data) => {
                Product.update(data)
            .then
            })
    
    }
}

module.exports = ProductController