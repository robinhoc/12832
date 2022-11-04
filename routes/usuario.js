const express = require('express')
var router = express.Router()


var controller = require('../controllers/usuario')

router.post('/', controller.criar)
router.post('/login', controller.loginMySql)

module.exports = router