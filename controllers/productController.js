const { Product, Order } = require(`../models`)

class ProductController {
    static productPage (req, res) {
        Product
        .findAll({
            order: [[`id`, `ASC`]],
            // include: { model: OrderDetail }
        })
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
            include: [Order]
        }
        let tmp;
        Product
            .findByPk(req.body.id, {options})
            .then((data) => {
                return Product.decrement('stock', { where: {id : data.id }})
            })
            .then((data) => {
                tmp = data
                return Order.findOne({where: {id: req.session.userId}})
            })
            then((orderData) => {
                orderData.Product.push(tmp)
                return Order.increment('quantity', { where: {id: orderData.id}})
            })
            .then(() => {
                res.redirect(`/products`)
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = ProductController