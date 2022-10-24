const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/pedido.controller');
const verifyJWT = require('../middlewares/autorizador');

router.post('/', PedidoController.inserir)
router.get('/', verifyJWT, PedidoController.encontrarTodos)
router.get('/id/:id', verifyJWT, PedidoController.encontrarPorId)
router.get('/status/:statusPedido', verifyJWT, PedidoController.encontrarPorStatus)
router.get('/pagamento/:pagamento', verifyJWT, PedidoController.encontrarPorPagamento)
router.delete('/id/:id', verifyJWT, PedidoController.deletar)
router.put('/id/:id', verifyJWT, PedidoController.atualizar)

module.exports = router