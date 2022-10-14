const usuarioService = require('../services/usuarioService');

const insere = async function (req, res, next) {
    try {
        const usuario = await usuarioService.insere(req.body)
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

const atualizar = async function (req, res) {
    try {
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
    insere,
    encontrarTodos,
    encontrarPorId,
    encontrarPorCargo,
    atualizar,
    deletar,
}