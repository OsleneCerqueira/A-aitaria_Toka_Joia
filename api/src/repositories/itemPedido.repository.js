const { ItemPedido } = require('../models/index');

const inserir = async function (itemPedido) {
    const itemPedidoCriado = await ItemPedido.create(itemPedido);

    return itemPedidoCriado;
}
const encontrarTodos = async function () {
    const itensPedido = await ItemPedido.findAll();
    return itensPedido;
}

const encontrarPorId = async function (id) {
    const itemPedido = await ItemPedido.findByPk(id);
    return itemPedido;
}


const atualizar = async function (itemPedido, id) {
    await ItemPedido.update(itemPedido, { where: { id: id } });
    return itemPedido;
}
const deletar = async function (id) {
    return await ItemPedido.destroy({ where: { id: id } });
}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarPorId,
    atualizar,
    deletar,
}