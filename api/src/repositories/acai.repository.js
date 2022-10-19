const { Acai } = require('../models/index');

const insere = async function (acai) {
    const acaiCriado = await Acai.create(acai);
    return acaiCriado;
}
const encontrarTodos = async function () {
    const acais = await Acai.findAll();
    return acais;
}

const encontrarPorId = async function (id) {
    const acai = await Acai.findByPk(id);
    return acai;
}


const atualizar = async function (acai, id) {
    await Acai.update(acai, { where: { id: id } });
    return acai;
}
const deletar = async function (id) {
    return await Acai.destroy({ where: { id: id } });
}

module.exports = {
    insere,
    encontrarTodos,
    encontrarPorId,
    atualizar,
    deletar,
}