const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.post('/', usuarioController.insere)
router.get('/', usuarioController.encontrarTodos)
router.get('/id/:id', usuarioController.encontrarPorId)
router.get('/cargo/:cargo', usuarioController.encontrarPorCargo)
router.delete('/:id', usuarioController.deletar)
router.put('/:id', usuarioController.atualizar)

module.exports = router