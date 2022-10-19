const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const validaUsuario = require('../middlewares/validacoes/validaUsuario');
const verifyJWT = require('../middlewares/autorizador');

router.post('/', validaUsuario.validaPost(), usuarioController.insere)
router.post('/login', validaUsuario.login(), usuarioController.login)
router.get('/', verifyJWT, usuarioController.encontrarTodos)
router.get('/id/:id', verifyJWT, usuarioController.encontrarPorId)
router.get('/cargo/:cargo', verifyJWT, usuarioController.encontrarPorCargo)
router.delete('/id/:id', verifyJWT, usuarioController.deletar)
router.put('/id/:id', verifyJWT, validaUsuario.validaPut(), usuarioController.atualizar)

module.exports = router