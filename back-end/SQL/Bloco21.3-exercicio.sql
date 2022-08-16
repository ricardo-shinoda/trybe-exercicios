-- Active: 1660327180226@@127.0.0.1@3306@normalization
-- Exerício 3: 🚀 Monte uma query que:
-- Crie um banco de dados chamado normalization;

CREATE DATABASE IF NOT EXISTS normalization;

-- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
-- Popule todas as tabelas com os dados fornecidos nos exercícios.
CREATE TABLE funcionarios(
    funcionario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    contato VARCHAR(100),
    telefone VARCHAR(100),
    data_cadastro VARCHAR(100)
) engine=InnoDB;

    INSERT INTO funcionarios (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
    INSERT INTO funcionarios (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
    INSERT INTO funcionarios (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
    INSERT INTO funcionarios (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');


    CREATE TABLE IF NOT EXISTS setor(
        setor_id INT primary key,
        nome VARCHAR(100) NOT NULL
    ) engine=InnoDB;

        INSERT INTO setor(setor_id, nome) VALUES(1, 'Administração');
    INSERT INTO setor(setor_id, nome) VALUES (2, 'Vendas');
    INSERT INTO setor(setor_id, nome) VALUES(3, 'Operacional');
    INSERT INTO setor(setor_id, nome) VALUES(4, 'Estratégico');
    INSERT INTO setor(setor_id, nome) VALUES(5, 'Marketing');

    CREATE TABLE funcionario_setor(
        funcionario_id INT NOT NULL,
        setor_id INT NOT NULL,
        foreign key (funcionario_id) references funcionarios (funcionario_id),
        foreign key (setor_id) references setor (setor_id)
    ) engine=InnoDB;

    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 1);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 2);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(13, 3);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 4);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 2);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(15, 5);

-- Comece criando o banco de dados Albuns. Você pode usar o comando DROP SCHEMA IF EXISTS para derrubar o banco de dados de mesmo nome construido previamente, seguido do comando CREATE e USE para recria-lo e garantir que os comandos posteriores sejam aplicados ao banco de dados correto.

    DROP SCHEMA IF EXISTS Albuns;
    CREATE SCHEMA Albuns;
    USE Albuns;


-- Crie a tabela de artistas.
    CREATE TABLE artista(
	    artista_id INT PRIMARY KEY AUTO_INCREMENT,
	    nome VARCHAR(50) NOT NULL
    );

-- Crie a tabela de estilos musicais.
    CREATE TABLE estilo_musical(
	    estilo_id INT PRIMARY KEY AUTO_INCREMENT,
	    nome VARCHAR(50) NOT NULL
    );

-- Crie a tabela de albuns levando em consideração que as colunas de estilo e artista são chaves estrangeiras referenciando as tabelas criadas anteriormente.

    CREATE TABLE album(
	    album_id INT PRIMARY KEY AUTO_INCREMENT,
	    titulo VARCHAR(50) NOT NULL,
	    preço INT NOT NULL,
        estilo_id INT NOT NULL,
        artista_id INT NOT NULL,
	    FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id),
        FOREIGN KEY (artista_id) REFERENCES artista (artista_id)
    );

-- Crie a tabela de canções levando em consideração que a coluna de album deve ser uma chave estrangeira referenciando a tabela correspondente.

    CREATE TABLE cancao(
	    cancao_id INT PRIMARY KEY AUTO_INCREMENT,
	    nome VARCHAR(50) NOT NULL,
        album_id INT NOT NULL,
	    FOREIGN KEY (album_id) REFERENCES album (album_id)
    );


