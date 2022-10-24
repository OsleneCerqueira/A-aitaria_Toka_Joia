const { Pedido } = require('../models/index');

const inserir = async function (pedido) {
    const pedidoCriado = await Pedido.create(pedido);

    return pedidoCriado;
}
const encontrarTodos = async function () {
    const pedidos = await Pedido.findAll();
    return pedidos;
}

const encontrarPorId = async function (id) {
    const pedido = await Pedido.findByPk(id);
    return pedido;
}
const encontrarUmPorWhere = async function (where) {
    const mesa = await Pedido.findOne({
        where: where
    });
    return mesa;
}

const atualizar = async function (pedido, id) {
    await Pedido.update(pedido, { where: { id: id } });
    return pedido;
}
const deletar = async function (id) {
    return await Pedido.destroy({ where: { id: id } });
}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarUmPorWhere,
    encontrarPorId,
    atualizar,
    deletar,
}