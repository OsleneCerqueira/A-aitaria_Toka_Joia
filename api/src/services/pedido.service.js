const PedidoRepository = require('../repositories/pedido.repository');
const createError = require('http-errors');



const inserir = async function (pedido) {
    await PedidoRepository.inserir(pedido);
    return { sucess: 'Pedido criado com sucesso' };
}


const encontrarTodos = async function () {
    const pedidos = await PedidoRepository.encontrarTodos();
    return pedidos;
}

const encontrarPorId = async function (id) {
    const pedido = await PedidoRepository.encontrarPorId(id);

    if (!pedido) {
        return createError(404, `Pedido de id: ${id} não encontrado`);
    }
    return pedido;
}


const encontrarPorStatus = async function (status) {
    const pedido = await PedidoRepository.encontrarUmPorWhere({ statusPedido: status })

    if (!pedido) {
        return createError(404, `Pedido de status: ${status} não encontrado`);
    }
    return pedido;
}
const encontrarPorPagamento = async function (pagamento) {
    const pedido = await PedidoRepository.encontrarUmPorWhere({ pagamento: pagamento })

    if (!pedido) {
        return createError(404, `Pedido de Pagamento: ${pagamento} não encontrado`);
    }
    return pedido;
}

const atualizar = async function (pedido, id) {
    const existePedido = await PedidoRepository.encontrarPorId(id);

    if (!existePedido) {
        return createError(404, `Pedido de id: ${id} não encontrado`);
    }

    await PedidoRepository.atualizar(pedido, id);

    return { sucess: `Pedido de id: ${id} foi atualizado com sucesso` };
}

const deletar = async function (id) {
    const pedido = await PedidoRepository.encontrarPorId(id);

    if (!pedido) {
        return createError(404, `Pedido de id: ${id} não encontrado`);
    }
    await PedidoRepository.deletar(id);
    return { sucess: `P edido de id: ${id} foi deletado com sucesso` };
}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarPorId,
    encontrarPorStatus,
    encontrarPorPagamento,
    atualizar,
    deletar,
}
