'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Photo);
      this.hasMany(models.Comment);
      this.hasMany(models.SocialMedia);
    }
  }
  User.init({
    full_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Full Name Cannot be Empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Valid Email is Required'
        },
        notEmpty: {
          args: true,
          msg: 'Email Cannot be Empty'
        }
      },
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username Cannot be Empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Passowrd Cannot be Empty'
        }
      }
    },
    profile_image_url: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Profile Image URL Cannot be Empty'
        },
        isUrl: {
          args: true,
          msg: 'Valid URL is Required'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Age Cannot be Empty'
        },
        isNumeric: {
          args: true,
          msg: 'Age Must be a Number'
        }
      }
    },
    phone_number: {
      type: DataTypes.BIGINT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Phone Number Cannot be Empty'
        },
        isNumeric: {
          args: true,
          msg: 'Phone Number Must be a Number'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};