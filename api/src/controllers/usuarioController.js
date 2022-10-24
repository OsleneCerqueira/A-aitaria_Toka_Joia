const usuarioService = require('../services/usuarioService');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const inserir = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const usuario = await usuarioService.inserir(req.body)
        if (usuario && usuario.message) {
            throw usuario;
        }
        res.send(usuario)
    } catch (error) {
        next(error)
    }
}

const login = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const usuario = await usuarioService.login(req.body)
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
        const usuarios = await usuarioService.encontrarTodos();
        res.send(usuarios)
    } catch (error) {
        next(error)
    }

}

const encontrarPorId = async function (req, res, next) {
    try {
        const usuario = await usuarioService.encontrarPorId(req.params.id);
        res.send(usuario);
    } catch (error) {
        next(error)
    }

}
const encontrarPorCargo = async function (req, res, next) {
    try {
        const usuario = await usuarioService.encontrarPorCargo(req.params.cargo);
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
        const usuario = await usuarioService.atualizar(req.body, req.params.id);
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
        const usuario = await usuarioService.deletar(req.params.id);
        res.send(usuario);
    } catch (error) {
        next(error)
    }

}

module.exports = {
    inserir,
    login,
    encontrarTodos,
    encontrarPorId,
    encontrarPorCargo,
    atualizar,
    deletar,
}