const ProdutoRepository = require('../repositories/produto.repository');
const createError = require('http-errors');



const inserir = async function (produto) {

    await ProdutoRepository.inserir(produto);
    return { sucess: 'Produto criado com sucesso' };
}


const encontrarTodos = async function () {
    const produtos = await ProdutoRepository.encontrarTodos();
    return produtos;
}

const encontrarPorId = async function (id) {
    const produto = await ProdutoRepository.encontrarPorId(id);

    if (!produto) {
        return createError(404, `Produto de id: ${id} não encontrado`);
    }
    return produto;
}


const encontrarPorCategoria = async function (categoria) {
    const Produto = await ProdutoRepository.encontrarUmPorWhere({ categoria: categoria })

    if (!Produto) {
        return createError(404, `Produto de categoria: ${categoria} não encontrado`);
    }
    return Produto;
}

const atualizar = async function (produto, id) {
    const existeproduto = await ProdutoRepository.encontrarPorId(id);

    if (!existeproduto) {
        return createError(404, `Produto de id: ${id} não encontrado`);
    }

    await ProdutoRepository.atualizar(produto, id);

    return { sucess: `Produto de id: ${id} foi atualizado com sucesso` };
}

const deletar = async function (id) {
    const usuario = await usuarioRepository.encontrarPorId(id);

    if (!usuario) {
        return createError(404, `Produto de id: ${id} não encontrado`);
    }
    await usuarioRepository.deletar(id);
    return { sucess: `Produto de id: ${id} foi deletado com sucesso` };
}

module.exports = {
    inserir,
    encontrarTodos,
    encontrarPorId,
    encontrarPorCategoria,
    atualizar,
    deletar,
}
