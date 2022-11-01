//aqui é onde cria as rodas e direciona para os locais corretos das chamadas
const express = require('express')

var router = express.Router();

var controller = require('../controllers/produto')

router.get('/', controller.listar)
router.get('/:id', controller.listarporid)
router.post('/', controller.gravar)
router.put('/', controller.atualizar)
router.delete('/:codigo', controller.excluir)

module.exports = router;