const banco = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

banco.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = banco;