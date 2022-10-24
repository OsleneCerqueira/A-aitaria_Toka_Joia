const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produto.controller');
const validaProduto = require('../middlewares/validacoes/validaProduto');
const verifyJWT = require('../middlewares/autorizador');

router.post('/', validaProduto.validaPost(), produtoController.inserir)
router.get('/', verifyJWT, produtoController.encontrarTodos)
router.get('/id/:id', verifyJWT, produtoController.encontrarPorId)
router.get('/categoria/:categoria', verifyJWT, produtoController.encontrarPorCategoria)
router.delete('/id/:id', verifyJWT, produtoController.deletar)
router.put('/id/:id', verifyJWT, validaProduto.validaPut(), produtoController.atualizar)

module.exports = router