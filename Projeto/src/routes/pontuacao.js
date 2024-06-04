var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/pontuar", function (req,res) {
    //função a ser chamada quando acessar /pontuacao/pontuar
    pontuacaoController.pontuar(req,res);
})

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /pontuacao/cadastrar
    pontuacaoController.cadastrar(req, res);
});

router.post("/listar", function (req, res) {
    // função a ser chamada quando acessar /pontuacao/listar
    pontuacaoController.listar(req, res);
});

module.exports = router;