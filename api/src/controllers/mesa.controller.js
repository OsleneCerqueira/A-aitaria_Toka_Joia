const MesaService = require('../services/mesa.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const inserir = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const mesas = await MesaService.inserir(req.body)
        if (mesas && mesas.message) {
            throw mesas;
        }
        res.send(mesas)
    } catch (error) {
        next(error)
    }
}


const encontrarTodos = async function (req, res, next) {
    try {
        const mesass = await MesaService.encontrarTodos();
        res.send(mesass)
    } catch (error) {
        next(error)
    }

}

const encontrarPorId = async function (req, res, next) {
    try {
        const mesas = await MesaService.encontrarPorId(req.params.id);
        res.send(mesas);
    } catch (error) {
        next(error)
    }

}
const encontrarPorStatus = async function (req, res, next) {
    try {
        const mesas = await MesaService.encontrarPorStatus(req.params.status);
        res.send(mesas);
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
        const mesas = await MesaService.atualizar(req.body, req.params.id);
        if (mesas && mesas.message) {
            throw mesas;
        }
        res.send(mesas);
    } catch (error) {
        next(error)
    }

}

const deletar = async function (req, res, next) {
    try {
        const mesas = await MesaService.deletar(req.params.id);
        res.send(mesas);
    } catch (error) {
        next(error)
    }

}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarPorId,
    encontrarPorStatus,
    atualizar,
    deletar,
}