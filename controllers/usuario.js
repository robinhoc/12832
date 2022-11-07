var Usuarios = require('../models/usuario')
var UsuariosM = require('../models/usuariomysql')

var jwt = require('jsonwebtoken')

exports.criar = async (req, res) => {
    // #swagger.tags = ['Usuários']   
    // #swagger.description = 'Incluir usuário'

    try {

        var usuario = {
            codigo: req.body.codigo,
            login: req.body.login,
            senha: req.body.senha,
            email: req.body.email
        }

        await Usuarios.create(usuario)
        res.status(201).send('Registro incluído com sucesso!')

    } catch (error) {

        console.log('Erro ao incluir ' + error)
        res.status(500).send('Ocorreu um erro ao tentar incluir!')
    }

}

exports.login = async (req, res) => {
    // #swagger.tags = ['Usuários']   
    // #swagger.description = 'Fazer login do usuário'   

    try {

        //console.log(req.body)
        // Validar usuário
        // Gerar o jwt

        var credenciais = {
            login: req.body.login,
            senha: req.body.senha
        }

        var usuario = await Usuarios.findOne({ login: credenciais.login, senha: credenciais.senha })

        if (usuario) {
            var token = jwt.sign({ id: usuario.email }, '12832', { expiresIn: '1m' })
            res.status(200).send(token)
        }
        else {
            res.status(200).send('Usuário e ou senha inválido!!!')
        }

    } catch (error) {
        await res.status(500).send('Erro')
    }
}

exports.loginMySql = async (req, res) => {
    // #swagger.tags = ['Usuários']   
    // #swagger.description = 'Fazer login do usuário'   

    UsuariosM.validarUsuario(req, res);
}