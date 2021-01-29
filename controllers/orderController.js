const { Product } = require(`./models`)

class OrderController {

    static addOrder(res, req) {
        let tmp;

        Order
            .findOne()
            .then((data) => {
                tmp = data
                return Product.findAll()
            })
            .then((productData) => {

            })
    }
}

module.exports = OrderController