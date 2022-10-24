const PedidoService = require('../services/pedido.service');

const inserir = async function (req, res, next) {
    try {
        const pedido = await PedidoService.inserir(req.body)
        if (pedido && pedido.message) {
            throw pedido;
        }
        res.send(pedido)
    } catch (error) {
        next(error)
    }
}


const encontrarTodos = async function (req, res, next) {
    try {
        const pedidos = await PedidoService.encontrarTodos();
        res.send(pedidos)
    } catch (error) {
        next(error)
    }

}

const encontrarPorId = async function (req, res, next) {
    try {
        const pedido = await PedidoService.encontrarPorId(req.params.id);
        res.send(pedido);
    } catch (error) {
        next(error)
    }

}
const encontrarPorStatus = async function (req, res, next) {
    try {
        const pedido = await PedidoService.encontrarPorStatus(req.params.statusPedido);
        res.send(pedido);
    } catch (error) {
        next(error)
    }
}

const encontrarPorPagamento = async function (req, res, next) {
    try {
        const pedido = await PedidoService.encontrarPorPagamento(req.params.pagamento);
        res.send(pedido);
    } catch (error) {
        next(error)
    }
}





const atualizar = async function (req, res, next) {
    try {
        const pedido = await PedidoService.atualizar(req.body, req.params.id);
        if (pedido && pedido.message) {
            throw pedido;
        }
        res.send(pedido);
    } catch (error) {
        next(error)
    }

}

const deletar = async function (req, res, next) {
    try {
        const pedido = await PedidoService.deletar(req.params.id);
        res.send(pedido);
    } catch (error) {
        next(error)
    }

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