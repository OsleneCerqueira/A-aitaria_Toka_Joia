const express = require('express');
const router = express.Router();
const acaiController = require('../controllers/acai.controller');
const validaAcai = require('../middlewares/validacoes/validaAcai');
const verifyJWT = require('../middlewares/autorizador');

router.post('/', validaAcai.validaPostAcai(), acaiController.insere)
router.get('/', verifyJWT, acaiController.encontrarTodos)
router.get('/id/:id', verifyJWT, acaiController.encontrarPorId)
router.delete('/id/:id', verifyJWT, acaiController.deletar)
router.put('/id/:id', verifyJWT, validaAcai.validaPutAcai(), acaiController.atualizar)

module.exports = router