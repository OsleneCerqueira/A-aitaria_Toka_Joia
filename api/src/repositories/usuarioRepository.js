const { Usuario } = require('../models/index');

const insere = async function (usuario) {
    const usuarioCriado = await Usuario.create(usuario);
    return usuarioCriado;
}
const encontrarTodos = async function () {
    const usuarios = await Usuario.findAll();
    return usuarios;
}

const encontrarPorId = async function (id) {
    const usuario = await Usuario.findByPk(id);
    return usuario;
}


const encontrarUmPorWhere = async function (where) {
    const usuario = await Usuario.findOne({
        where: where
    });
    return usuario;
}
const atualizar = async function (usuario, id) {
    await Usuario.update(usuario, { where: { id: id } });
    return usuario;
}
const deletar = async function (id) {
    return await Usuario.destroy({ where: { id: id } });
}

module.exports = {
    insere,
    encontrarTodos,
    encontrarPorId,
    encontrarUmPorWhere,
    atualizar,
    deletar,
}