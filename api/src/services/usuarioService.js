const usuarioRepository = require('../repositories/usuarioRepository');
require('dotenv').config();
const bcrypt = require('bcrypt');
const createError = require('http-errors');



const insere = async function (usuario) {
    const existeUsuario = await usuarioRepository.encontrarUmPorWhere({ email: usuario.email });

    if (existeUsuario) {
        return createError(409, `Usuário de email: ${usuario.email} já existe`);
    }

    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)
    await usuarioRepository.insere(usuario);
    return { message: 'Usuário criado com sucesso' };
}
const encontrarTodos = async function () {
    const usuarios = await usuarioRepository.encontrarTodos();
    return usuarios;
}

const encontrarPorId = async function (id) {
    const usuario = await usuarioRepository.encontrarPorId(id);

    if (!usuario) {
        return createError(404, `Usuário de id: ${id} não encontrado`);
    }
    return usuario;
}

const encontrarPorCargo = async function (cargo) {
    const usuario = await usuarioRepository.encontrarUmPorWhere({ cargo: cargo })

    if (!usuario) {
        return createError(404, `Usuário de cargo: ${cargo} não encontrado`);
    }
    return usuario;
}




const atualizar = async function (usuario, id) {
    const existeUsuario = await usuarioRepository.encontrarPorId(id);

    if (!existeUsuario) {
        return createError(404, `Usuário de id: ${id} não encontrado`);
    }

    await usuarioRepository.atualizar(usuario, id);

    return { message: `Usuário de id: ${id} foi atualizado com sucesso` };
}

const deletar = async function (id) {
    const usuario = await usuarioRepository.encontrarPorId(id);

    if (!usuario) {
        return createError(404, `Usuário de id: ${id} não encontrado`);
    }
    await usuarioRepository.deletar(id);
    return { message: `Usuário de id: ${id} foi deletado com sucesso` };
}

module.exports = {
    insere,
    encontrarTodos,
    encontrarPorId,
    encontrarPorCargo,
    atualizar,
    deletar,
}
