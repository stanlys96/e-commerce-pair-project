'use strict';
const fs = require(`fs`)

module.exports = {
  up: (queryInterface, Sequelize) => {
    let products = JSON.parse(fs.readFileSync('data/products.json', 'utf8'))

    products = products.map(product => {
      product.createdAt = new Date ()
      product.updatedAt = new Date ()
      return product
    })

     return queryInterface.bulkInsert('Products', products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
