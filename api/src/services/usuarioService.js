const usuarioRepository = require('../repositories/usuarioRepository');
const insere = async function (usuario) {
    const usuarioCriado = await usuarioRepository.insere(usuario);
    return usuarioCriado;
}
const encontrarTodos = async function () {
    const usuarios = await usuarioRepository.encontrarTodos();
    return usuarios;
}

const encontrarPorId = async function (id) {
    const usuario = await usuarioRepository.encontrarPorId(id);
    return usuario;
}

const atualizar = async function (usuario, id) {
    await usuarioRepository.atualizar(usuario, id);
    return await usuarioRepository.encontrarPorId(id);
}

const deletar = async function (id) {
    await usuarioRepository.deletar(id);
    return await usuarioRepository.encontrarPorId(id);
}

module.exports = {
    insere,
    encontrarTodos,
    encontrarPorId,
    atualizar,
    deletar,
}
