const express = require('express');
const router = express.Router();
const MesaController = require('../controllers/mesa.controller');
const verifyJWT = require('../middlewares/autorizador');

router.post('/', MesaController.inserir)
router.get('/', verifyJWT, MesaController.encontrarTodos)
router.get('/id/:id', verifyJWT, MesaController.encontrarPorId)
router.get('/status/:status', verifyJWT, MesaController.encontrarPorStatus)
router.delete('/id/:id', verifyJWT, MesaController.deletar)
router.put('/id/:id', verifyJWT, MesaController.atualizar)

module.exports = router