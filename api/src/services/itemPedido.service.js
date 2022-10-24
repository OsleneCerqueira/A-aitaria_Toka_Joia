const ItemPedidoRepository = require('../repositories/itemPedido.repository');
const createError = require('http-errors');



const inserir = async function (itempedido) {
    await ItemPedidoRepository.inserir(itempedido);
    return { sucess: 'Item de Pedido adicionado com sucesso' };
}


const encontrarTodos = async function () {
    const itensPedidos = await ItemPedidoRepository.encontrarTodos();
    return itensPedidos;
}

const encontrarPorId = async function (id) {
    const itemPedido = await ItemPedidoRepository.encontrarPorId(id);

    if (!itemPedido) {
        return createError(404, `item de Pedido com id: ${id} não encontrado`);
    }
    return itemPedido;
}


const atualizar = async function (itempedido, id) {
    const existeItemPedido = await ItemPedidoRepository.encontrarPorId(id);

    if (!existeItemPedido) {
        return createError(404, `item de Pedido com id: ${id} não encontrado`);
    }

    await ItemPedidoRepository.atualizar(itempedido, id);

    return { sucess: `item de Pedido com id: ${id} foi atualizado com sucesso` };
}

const deletar = async function (id) {
    const itempedido = await ItemPedidoRepository.encontrarPorId(id);

    if (!itempedido) {
        return createError(404, `item de Pedido com id: ${id} não encontrado`);
    }
    await ItemPedidoRepository.deletar(id);
    return { sucess: ` Item de Pedido com id: ${id} foi deletado com sucesso` };
}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarPorId,
    atualizar,
    deletar,
}
