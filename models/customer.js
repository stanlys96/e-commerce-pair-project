'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Order, { foreignKey: 'CustomerId' });
    }
  };
  Customer.init({
    full_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Full name tidak boleh kosong'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Email tidak boleh kosong'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Address tidak boleh kosong'
        }
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Phone number tidak boleh kosong'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password tidak boleh kosong'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Username tidak boleh kosong'
        }
      }
    },
    isLoggedIn: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Customer',
  });

  Customer.beforeCreate((user, options) => {
    user.isLoggedIn = false;
  })

  return Customer;
};