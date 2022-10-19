require('dotenv').config();
const express = require('express');
const handle404Error = require('./middlewares/handle404Error');
const handleError = require('./middlewares/handleError');


const usuarios = require('./routes/usuarioRoute');
const produtos = require('./routes/produto.route')

const app = express();
app.use(express.json());

app.use('/usuarios', usuarios);
app.use('/produtos', produtos);
app.use(handle404Error);
app.use(handleError);

app.listen(process.env.PORT, () => { console.log(`rodando na porta ${process.env.PORT}`) })