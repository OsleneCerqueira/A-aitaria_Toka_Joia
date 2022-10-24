const produtoService = require('../services/produto.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const inserir = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const produtos = await produtoService.inserir(req.body)
        if (produtos && produtos.message) {
            throw produtos;
        }
        res.send(produtos)
    } catch (error) {
        next(error)
    }
}


const encontrarTodos = async function (req, res, next) {
    try {
        const produtos = await produtoService.encontrarTodos();
        res.send(produtos)
    } catch (error) {
        next(error)
    }

}

const encontrarPorId = async function (req, res, next) {
    try {
        const produtos = await produtoService.encontrarPorId(req.params.id);
        res.send(produtos);
    } catch (error) {
        next(error)
    }

}
const encontrarPorCategoria = async function (req, res, next) {
    try {
        const produtos = await produtoService.encontrarPorCategoria(req.params.categoria);
        res.send(produtos);
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
        const produtos = await produtoService.atualizar(req.body, req.params.id);
        if (produtos && produtos.message) {
            throw produtos;
        }
        res.send(produtos);
    } catch (error) {
        next(error)
    }

}

const deletar = async function (req, res, next) {
    try {
        const produtos = await produtoService.deletar(req.params.id);
        res.send(produtos);
    } catch (error) {
        next(error)
    }

}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarPorId,
    encontrarPorCategoria,
    atualizar,
    deletar,
}