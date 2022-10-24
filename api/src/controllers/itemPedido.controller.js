const ItemPedidoService = require('../services/itemPedido.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const inserir = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const itemPedido = await ItemPedidoService.inserir(req.body)
        if (itemPedido && itemPedido.message) {
            throw itemPedido;
        }
        res.send(itemPedido)
    } catch (error) {
        next(error)
    }
}


const encontrarTodos = async function (req, res, next) {
    try {
        const itensPedidos = await ItemPedidoService.encontrarTodos();
        res.send(itensPedidos)
    } catch (error) {
        next(error)
    }

}

const encontrarPorId = async function (req, res, next) {
    try {
        const itemPedido = await ItemPedidoService.encontrarPorId(req.params.id);
        res.send(itemPedido);
    } catch (error) {
        next(error)
    }

}


const atualizar = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const itemPedido = await ItemPedidoService.atualizar(req.body, req.params.id);
        if (itemPedido && itemPedido.message) {
            throw itemPedido;
        }
        res.send(itemPedido);
    } catch (error) {
        next(error)
    }

}

const deletar = async function (req, res, next) {
    try {
        const itemPedido = await ItemPedidoService.deletar(req.params.id);
        res.send(itemPedido);
    } catch (error) {
        next(error)
    }

}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarPorId,
    atualizar,
    deletar,
}