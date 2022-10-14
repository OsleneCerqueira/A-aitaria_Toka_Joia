const usuarioService = require('../services/usuarioService');

const insere = async function (req, res) {
    const usuario = await usuarioService.insere(req.body)
    res.send(usuario)

}
const encontrarTodos = async function (req, res) {
    const usuarios = await usuarioService.encontrarTodos();
    res.send(usuarios)
}

const encontrarPorId = async function (req, res) {
    const usuario = await usuarioService.encontrarPorId(req.params.id);
    res.send(usuario);
}
const encontrarPorCargo = async function (req, res) {
    const usuario = await usuarioService.encontrarPorCargo(req.params.cargo);
    res.send(usuario);
}

const atualizar = async function (req, res) {
    const usuario = await usuarioService.atualizar(req.body, req.params.id);
    res.send(usuario);
}

const deletar = async function (req, res) {
    const usuario = await usuarioService.deletar(req.params.id);
    res.send(usuario);
}

module.exports = {
    insere,
    encontrarTodos,
    encontrarPorId,
    encontrarPorCargo,
    atualizar,
    deletar,
}