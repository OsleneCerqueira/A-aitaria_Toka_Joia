const usuarioService = require('../services/usuarioService');

const insereUsuario = async function (req, res) {
    const usuario = await usuarioService.insereUsuario(req.body)
    res.send(usuario)
}

module.exports = {
    insereUsuario
}