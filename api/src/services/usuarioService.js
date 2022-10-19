const usuarioRepository = require('../repositories/usuarioRepository');
require('dotenv').config();
const bcrypt = require('bcrypt');
const createError = require('http-errors');
const { sign } = require('jsonwebtoken');



const insere = async function (usuario) {
    const existeUsuario = await usuarioRepository.encontrarUmPorWhere({ email: usuario.email });
    if (existeUsuario) {
        return createError(409, `Usuário de email: ${usuario.email} já existe`);
    }
    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)

    await usuarioRepository.insere(usuario);
    return { sucess: 'Usuário criado com sucesso' };
}

const login = async function (usuario) {
    const usuarioLogin = await usuarioRepository.encontrarUmPorWhere({
        email: usuario.email
    });

    if (!usuarioLogin) {
        return createError(401, 'Usuário inválido');
    }

    const comparacaoSenha = await bcrypt.compare(usuario.senha, usuarioLogin.senha);

    if (!comparacaoSenha) {
        return createError(401, 'Usuário inválido');
    }

    const token = sign({
        id: usuarioLogin.id
    }, process.env.SECRET, {});
    delete usuarioLogin.senha

    return {
        auth: true,
        usuario: usuarioLogin,
        token: token,
    }
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
    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)

    await usuarioRepository.atualizar(usuario, id);

    return { sucess: `Usuário de id: ${id} foi atualizado com sucesso` };
}

const deletar = async function (id) {
    const usuario = await usuarioRepository.encontrarPorId(id);

    if (!usuario) {
        return createError(404, `Usuário de id: ${id} não encontrado`);
    }
    await usuarioRepository.deletar(id);
    return { sucess: `Usuário de id: ${id} foi deletado com sucesso` };
}

module.exports = {
    insere,
    login,
    encontrarTodos,
    encontrarPorId,
    encontrarPorCargo,
    atualizar,
    deletar,
}
