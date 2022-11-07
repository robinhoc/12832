var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ProdutoSchema = Schema({
    codigo: { type: String, require: true, unique: true},
    nome: { type: String, require: true},
    descricao: { type: String},
    valor: { type: Number, default: 0},
    dataCriacao: { type: Date, default: Date.now()}
});

module.exports = mongoose.model('Produto', ProdutoSchema);