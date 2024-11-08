'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logo.init({
    name: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    commonName: DataTypes.TEXT,
    hint: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Logo',
  });
  return Logo;
};