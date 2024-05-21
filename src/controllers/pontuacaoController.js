var pontuacaoModel = require("../models/pontuacaoModel");

function listar(req, res) {
    pontuacaoModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    pontuacaoModel.cadastrar(nome).then(function(resposta){
        res.status(200).send("pontuacao criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


function pontuar(req, res){
    var pontuacao = req.body.pontuacao;

    if(pontuacao == undefined){
        res.status(400).send("Sua pontuacao está undefined!");

    pontuacaoModel.pontuar(pontuacao).then(function(resposta){
        res.status(200).send("pontuação feita com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

}
module.exports = {
    listar,
    cadastrar,
    pontuar
}   