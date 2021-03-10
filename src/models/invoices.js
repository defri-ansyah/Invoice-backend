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
      models.invoices.hasMany(models.invoice_details, {
        foreignKey: 'invoice_id'
      })
      models.invoices.hasOne(models.users, {
        foreignKey: 'id',
        sourceKey: 'customer_id'
      })
    }
  };
  invoices.init({
    invoice_code: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    sub_total: DataTypes.FLOAT,
    total_amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'invoices',
  });
  return invoices;
};