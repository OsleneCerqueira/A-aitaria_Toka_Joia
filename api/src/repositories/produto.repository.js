const { Produto } = require('../models/index');

const insere = async function (produto) {
    const produtoCriado = await Produto.create(produto);
    return produtoCriado;
}
const encontrarTodos = async function () {
    const produtos = await Produto.findAll();
    return produtos;
}

const encontrarPorId = async function (id) {
    const produto = await Produto.findByPk(id);
    return produto;
}

const encontrarUmPorWhere = async function (where) {
    const produto = await Produto.findOne({
        where: where
    });
    return produto;
}


const atualizar = async function (produto, id) {
    await Produto.update(produto, { where: { id: id } });
    return produto;
}
const deletar = async function (id) {
    return await Produto.destroy({ where: { id: id } });
}

module.exports = {
    insere,
    encontrarTodos,
    encontrarUmPorWhere,
    encontrarPorId,
    atualizar,
    deletar,
}