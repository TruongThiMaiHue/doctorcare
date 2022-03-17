'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
      }
    }
    User.init({
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        image: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        roleId: DataTypes.STRING,
        positionId: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'User',
    });
    return User;
};