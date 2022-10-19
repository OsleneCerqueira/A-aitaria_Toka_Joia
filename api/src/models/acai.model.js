'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Acai.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tamanho: DataTypes.INTEGER,
    preco: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Acai',
    tableName: 'acais',
  });
  return Acai;
};