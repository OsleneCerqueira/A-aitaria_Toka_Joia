const { Mesa } = require('../models/index');

const inserir = async function (mesa) {
    const mesaCriado = await Mesa.create(mesa);

    return mesaCriado;
}
const encontrarTodos = async function () {
    const mesas = await Mesa.findAll();
    return mesas;
}

const encontrarPorId = async function (id) {
    const mesa = await Mesa.findByPk(id);
    return mesa;
}

const encontrarUmPorWhere = async function (where) {
    const mesa = await Mesa.findOne({
        where: where
    });
    return mesa;
}


const atualizar = async function (mesa, id) {
    await Mesa.update(mesa, { where: { id: id } });
    return mesa;
}
const deletar = async function (id) {
    return await Mesa.destroy({ where: { id: id } });
}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarUmPorWhere,
    encontrarPorId,
    atualizar,
    deletar,
}