const { Usuario } = require('../models/index');


const insereUsuario = async function (usuario) {
    const usuarioCriado = await Usuario.create(usuario);
    return usuarioCriado;

}
module.exports = {
    insereUsuario
}