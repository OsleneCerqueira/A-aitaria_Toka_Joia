const { body } = require('express-validator');

const validaPost = () => {
    return [
        body('nome').isLength({ min: 3 }).withMessage("Campo nome precisa ter pelo menos 3 caracteres").bail().isString().withMessage("Nome é inválido"),
        body('email').isEmail().withMessage("O e-mail precisa ser válido"),
        body('cargo').isLength({ min: !0 }).withMessage("Campo cargo é obrigatório ").bail().isString().withMessage("Cargo inválido"),
        body('senha').isLength({ min: 6 }).withMessage("Campo senha precisa ter pelo menos 6 caracteres")]
}
const validaPut = () => {
    return [
        body('cargo').isLength({ min: !0 }).withMessage("Campo cargo é obrigatório ").bail().isString().withMessage("Cargo inválido"),
        body('senha').isLength({ min: 6 }).withMessage("Campo senha precisa ter pelo menos 6 caracteres")
    ]
}
const login = () => {
    return [
        body('email').isEmail().withMessage("Email inválido"),
        body('senha').isLength({ min: 6 }).withMessage("Senha inválida")
    ]
}


module.exports = { validaPost, validaPut, login } 