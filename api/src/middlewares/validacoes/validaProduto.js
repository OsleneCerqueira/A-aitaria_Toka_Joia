const { body } = require('express-validator');

const validaPost = () => {
    return [
        body('nome').isLength({ min: 3 }).withMessage("Campo nome precisa ter pelo menos 3 caracteres").bail().isString().withMessage("Nome é inválido"),
        body('descricao').isLength({ min: !0 }).withMessage("Campo Descriçao é obrigatório ").bail().isString().withMessage("Descriçao inválida"),
        body('tamanho').isLength({ min: !0 }).withMessage("Campo Tamanho é obrigatório ").bail().isInt().withMessage("Tamanho inválido"),
        body('preco').isFloat().withMessage("Preço inválido"),
        body('categoria').isLength({ min: !0 }).withMessage("Campo Categoria é obrigatório ").bail().isString().withMessage("Categoria inválida"),]
}
const validaPut = () => {
    return [
        body('preco').isFloat().withMessage("Preço inválido")
    ]
}


module.exports = { validaPost, validaPut } 