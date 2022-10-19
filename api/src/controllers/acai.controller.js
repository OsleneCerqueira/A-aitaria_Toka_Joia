const acaiService = require('../services/acai.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const insere = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const usuario = await acaiService.insere(req.body)
        if (usuario && usuario.message) {
            throw usuario;
        }
        res.send(usuario)
    } catch (error) {
        next(error)
    }
}


const encontrarTodos = async function (req, res, next) {
    try {
        const usuarios = await acaiService.encontrarTodos();
        res.send(usuarios)
    } catch (error) {
        next(error)
    }

}

const encontrarPorId = async function (req, res, next) {
    try {
        const usuario = await acaiService.encontrarPorId(req.params.id);
        res.send(usuario);
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
        const usuario = await acaiService.atualizar(req.body, req.params.id);
        if (usuario && usuario.message) {
            throw usuario;
        }
        res.send(usuario);
    } catch (error) {
        next(error)
    }

}

const deletar = async function (req, res, next) {
    try {
        const usuario = await acaiService.deletar(req.params.id);
        res.send(usuario);
    } catch (error) {
        next(error)
    }

}

module.exports = {
    insere,
    encontrarTodos,
    encontrarPorId,
    atualizar,
    deletar,
}