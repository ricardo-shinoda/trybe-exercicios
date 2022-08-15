-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;

CREATE DATABASE IF NOT EXISTS albuns;

-- Como criar uma tabela:
-- Cria uma tabela
     CREATE TABLE cidades(
       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       cidade VARCHAR(100) NOT NULL,
       estado VARCHAR(10) NOT NULL,
       populacao INTEGER
    );

    -- Insere os dados na tabela
    INSERT INTO cidades(cidade, estado, populacao)
	VALUES('Rio Claro','SP',185421),
		  ('Rio Claro','RJ',17216);




-- PRIMEIRA FORMA NORMAL
-- Colunas devem possuir apenas um valor;
-- valores em uma coluna devem ser do mesmo tipo de dados;
-- cada coluna deve possuir um nome único
-- a ordem  dos dados registrados em uma tabela não deve afetar a integridade dos dados

-- SEGUNDA FORMA NORMAL
-- Não possuir dependências parciais

-- TERCEIRA FORMA NORMAL
-- a tabela deve estar na 1 e na 2 formas normais;
-- a tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente em PK(primary keys)