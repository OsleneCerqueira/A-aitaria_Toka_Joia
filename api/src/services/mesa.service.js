const MesaRepository = require('../repositories/mesa.repositoty');
const createError = require('http-errors');



const inserir = async function (mesa) {
    await MesaRepository.inserir(mesa);
    return { sucess: 'Mesa criado com sucesso' };
}


const encontrarTodos = async function () {
    const mesas = await MesaRepository.encontrarTodos();
    return mesas;
}

const encontrarPorId = async function (id) {
    const mesa = await MesaRepository.encontrarPorId(id);

    if (!mesa) {
        return createError(404, `Mesa de id: ${id} não encontrado`);
    }
    return mesa;
}


const encontrarPorStatus = async function (status) {
    const mesa = await MesaRepository.encontrarUmPorWhere({ status: status })

    if (!mesa) {
        return createError(404, `mesa de Status: ${status} não encontrado`);
    }
    return mesa;
}

const atualizar = async function (mesa, id) {
    const existeMesa = await MesaRepository.encontrarPorId(id);

    if (!existeMesa) {
        return createError(404, `Mesa de id: ${id} não encontrado`);
    }

    await MesaRepository.atualizar(mesa, id);

    return { sucess: `Mesa de id: ${id} foi atualizado com sucesso` };
}

const deletar = async function (id) {
    const mesa = await MesaRepository.encontrarPorId(id);

    if (!mesa) {
        return createError(404, `Mesa de id: ${id} não encontrado`);
    }
    await MesaRepository.deletar(id);
    return { sucess: `Mesa de id: ${id} foi deletado com sucesso` };
}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarPorId,
    encontrarPorStatus,
    atualizar,
    deletar,
}
