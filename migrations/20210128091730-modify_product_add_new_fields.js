'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
        'Products', 
        'stock', 
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Products',
      'stock'
    )
  }
};
