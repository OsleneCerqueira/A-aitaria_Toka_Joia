'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Usuario, { foreignKey: 'idUsuario' })
      Pedido.belongsTo(models.Mesa, { foreignKey: 'idMesa' })
    }
  }
  Pedido.init({
    statusPedido: DataTypes.STRING,
    pagamento: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: 'pedidos',

  });
  return Pedido;
};