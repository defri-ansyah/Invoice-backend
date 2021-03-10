'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.invoice_details.belongsTo(models.invoices, {
        foreignKey: 'invoice_id'
      })
      models.invoice_details.hasOne(models.items, {
        foreignKey: 'id',
        sourceKey: 'item_id'
      })
    }
  };
  invoice_details.init({
    invoice_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'invoice_details',
  });
  return invoice_details;
};