var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM pontuacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO pontuacao (pontuacao) VALUES ('${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pontuar(pontuacao) {
    var instrucao = `
        INSERT INTO pontuacao (pontuacao) VALUES ('${pontuacao}');
    `;
    console.log("Executando a intrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar,
    pontuar
};