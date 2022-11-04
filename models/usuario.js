var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UsuarioSchema = Schema({
    codigo: { type: String, require: true, unique: true },
    login: { type: String, require: true },
    senha: { type: String },
    email: { type: String },
    dataCriacao: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)