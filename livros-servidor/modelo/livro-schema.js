const banco = require('./conexao');

const livroSchema = new banco.Schema({
  _id: {
    type: banco.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  titulo: {
    type: String,
    required: true
  },
  codEditora: {
    type: Number,
    required: true
  },
  resumo: {
    type: String,
    required: true
  },
  autores: {
    type: [String],
    required: true
  }
});

const Livro = banco.model('Livro', livroSchema, 'livros');

module.exports = Livro;