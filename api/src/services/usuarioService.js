const usuarioRepository = require('../repositories/usuarioRepository');
const insereUsuario = async function (usuario) {
    const usuarioCriado = await usuarioRepository.insereUsuario(usuario);
    return usuarioCriado;
}

module.exports = {
    insereUsuario
}
