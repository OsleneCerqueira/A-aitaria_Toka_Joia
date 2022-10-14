require('dotenv').config();
const express = require('express');


const usuarios = require('./routes/usuarioRoute')

const app = express();
app.use(express.json());

app.use('/usuarios', usuarios)

app.listen(process.env.PORT, () => { console.log(`rodando na porta ${process.env.PORT}`) })