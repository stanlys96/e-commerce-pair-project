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

    applyTitle() {
      let title;
      if (this.gender === 'male') {
        title = 'Mr. ';
      } else if (this.gender === 'female') {
        title = 'Mrs. ';
      }

      return `${title}${this.full_name}`;
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
    isLoggedIn: DataTypes.BOOLEAN,
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Gender tidak boleh kosong'
        }
      }
    },
    unique_code: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Customer',
  });

  Customer.beforeCreate((user, options) => {
    let randomNumber = Math.ceil(Math.random() * 1000);
    let newCode = `${user.full_name} ${randomNumber}`;
    newCode = newCode.split(' ').join('_');
    user.unique_code = newCode;
    user.isLoggedIn = false;
  })

  return Customer;
};