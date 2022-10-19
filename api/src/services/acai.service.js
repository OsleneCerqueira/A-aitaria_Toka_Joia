const AcaiRepository = require('../repositories/acai.repository');
const createError = require('http-errors');



const insere = async function (acai) {

    await AcaiRepository.insere(acai);
    return { sucess: 'Açai criado com sucesso' };
}


const encontrarTodos = async function () {
    const acais = await AcaiRepository.encontrarTodos();
    return acais;
}

const encontrarPorId = async function (id) {
    const acai = await AcaiRepository.encontrarPorId(id);

    if (!acai) {
        return createError(404, `Açai de id: ${id} não encontrado`);
    }
    return acai;
}




const atualizar = async function (acai, id) {
    const existeacai = await AcaiRepository.encontrarPorId(id);

    if (!existeacai) {
        return createError(404, `Açai de id: ${id} não encontrado`);
    }

    await AcaiRepository.atualizar(acai, id);

    return { sucess: `Açai de id: ${id} foi atualizado com sucesso` };
}

const deletar = async function (id) {
    const usuario = await usuarioRepository.encontrarPorId(id);

    if (!usuario) {
        return createError(404, `Açai de id: ${id} não encontrado`);
    }
    await usuarioRepository.deletar(id);
    return { sucess: `Açai de id: ${id} foi deletado com sucesso` };
}

module.exports = {
    insere,
    encontrarTodos,
    encontrarPorId,
    atualizar,
    deletar,
}
