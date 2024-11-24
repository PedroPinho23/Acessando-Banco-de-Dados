const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const livroRouter = require('./routes/livros');
app.use('/livros', livroRouter);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor de livros!');
});

app.get('/users', (req, res) => {
  res.send('Página de usuários');
});

const port = 3030;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
