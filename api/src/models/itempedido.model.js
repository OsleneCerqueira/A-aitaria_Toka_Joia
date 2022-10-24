'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ItemPedido.belongsTo(models.Produto, { foreignKey: 'idProduto' })
      ItemPedido.belongsTo(models.Pedido, { foreignKey: 'idPedido' })
    }
  }
  ItemPedido.init({
    qtdProduto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemPedido',
    tableName: 'itemPedidos',
  });
  return ItemPedido;
};