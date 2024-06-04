-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
create database demonslayerDB;

use demonslayerDB;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table pontuacao(
	idPontuacao int primary key auto_increment,
	pontuacao int,
	fkUsuario int,
	foreign key (fkUsuario) references usuario(idUsuario)
);
