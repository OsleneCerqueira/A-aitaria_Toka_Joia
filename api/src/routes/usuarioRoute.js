const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const validaUsuario = require('../middlewares/validaUsuario');

router.post('/', validaUsuario.validaPost(), usuarioController.insere)
router.get('/', usuarioController.encontrarTodos)
router.get('/id/:id', usuarioController.encontrarPorId)
router.get('/cargo/:cargo', usuarioController.encontrarPorCargo)
router.delete('/id/:id', usuarioController.deletar)
router.put('/id/:id', validaUsuario.validaPut(), usuarioController.atualizar)

module.exports = router