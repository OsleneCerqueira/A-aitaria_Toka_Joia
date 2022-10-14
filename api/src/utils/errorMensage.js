const verificaCampoVazio = (objeto) => {
    for (const key in objeto) {
        if (!objeto[key]) {
            throw new Error(`Campo '${key.toLocaleUpperCase()}' está vazio`)
        }
    }
}

module.exports = verificaCampoVazio