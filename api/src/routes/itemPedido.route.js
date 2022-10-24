const express = require('express');
const router = express.Router();
const ItemPedidoController = require('../controllers/itemPedido.controller');
const verifyJWT = require('../middlewares/autorizador');

router.post('/', ItemPedidoController.inserir)
router.get('/', verifyJWT, ItemPedidoController.encontrarTodos)
router.get('/id/:id', verifyJWT, ItemPedidoController.encontrarPorId)
router.delete('/id/:id', verifyJWT, ItemPedidoController.deletar)
router.put('/id/:id', verifyJWT, ItemPedidoController.atualizar)

module.exports = router