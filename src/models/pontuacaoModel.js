var database = require("../database/config");

function listar() {
    var instrucao = `
    Select  idUsuario ,idPontuacao, nome, fkUsuario, pontuacao From usuario
    JOIN pontuacao on fkUsuario = idUsuario;
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

function pontuar(pontuacao, idUsuario) {
    var instrucao = `
       insert into pontuacao (pontuacao ,  fkUsuario) values ('${pontuacao}' ,'${idUsuario}');
    `;
    console.log("Executando a intrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar,
    pontuar
};