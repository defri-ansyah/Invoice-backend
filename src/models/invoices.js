'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  invoices.init({
    invoice_code: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'invoices',
  });
  return invoices;
};