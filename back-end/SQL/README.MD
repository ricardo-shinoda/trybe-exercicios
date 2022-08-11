## Como logar
### No terminal: <mark>mysql -u ricardo -p</mark>
### Senha: <mark>lakers3136</mark>

---
## Checar o estado
### <mark>sudo systemctl status mysql</mark>

---
## Se estiver parado:
### <mark>systemctl start mysql</mark>
---
## Para parar o serviço:
### <mark>systemctl stop mysql</mark>
---
## Para sair:
<mark>crtl+C</mark>

---
## Para não iniciar automaticamente:
<mark>sudo systemctl disable mysql</mark>

---
## Quando for usar ao iniciar o pc:
<mark>sudo systemctl start mysql</mark>

---
## Para ativar novamente:
<mark>sudo systemctl enable mysql</mark>

---
## Comandos mais comuns:
<mark></mark>

---
---
---
## Comandos após a instalação com Docker:
### Primeiro é sempre subir o container:
<mark>docker container start trybe_mysql</mark>

---
### Executar o container:
<marK>docker exec -it trybe_mysql bash</mark>

---
### Rodar os comandos normais do MySQL
<mark>mysql -u root -p</mark>

---
### Para sair:
<mark>exit</mark><br>
<mark>exit</mark>

---
# Comandos:
## DDL - Data Definition Language:
- **CREATE**: Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers;
- **ALTER**: Para alterar a estrutura de qualquer objeto;
DROP: Permite deletar objetos;
- **TRUNCATE**: Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados.
## DML - Data Manipulation Language:
- **SELECT**: Usado para buscar dados em um banco de dados;
- **INSERT**: Insere dados em uma tabela;
- **UPDATE**: Altera dados dentro de uma tabela;
- **DELETE**: Exclui dados de uma tabela.
## DCL - Data Control Language:
- **GRANT**: Concede acesso a um usuário;
- **REVOKE**: Remove acessos concedidos através do comando GRANT.
## TCL - Transactional Control Language:
- **COMMIT**: Muda suas alterações de temporárias para permanentes no seu banco de dados;
- **ROLLBACK**: Desfaz todo o impacto realizado por um comando;
- **SAVEPOINT**: Define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query;
- **TRANSACTION**: Comandos que definem onde, como e em que escopo suas transações são executadas.

---

## Como criar um banco de dados:
**CREATE DATABASE nome-do-banco**;

---
## Como concatenar colunas:
- SELECT CONCAT(first_name, ' ', last_name) AS 'nome_completo' FROM sakila.actor;

---
## Como eliminar da busca valores duplicados:
- SELECT DISTINCT first_name FROM sakila.actor;
### No exemplo abaixo buscará apenas os nomes e sobrenomes repetidos, desde que estejam juntos.
- SELECT DISTINCT first_name, last_name FROM sakila.actor; 


---

## Como criar um banco de dados e uma tabela:
  <mark>CREATE DATABASE Escola;</mark><br>
<mark>CREATE TABLE IF NOT EXISTS Escola.Estudantes (</mark><br>
<mark>nome VARCHAR(7) CHARACTER SET utf8,</mark><br>
<mark>idade INT</mark><br>
<mark>);</mark><br>
<mark>INSERT INTO Escola.Estudantes VALUES</mark><br>
<mark>    ('Rafael', 25),</mark><br>
<mark>    ('Amanda', 30),</mark><br>
<mark>    ('Roberto', 45),</mark><br>
<mark>    ('Carol', 19),</mark><br>
<mark>    ('Amanda', 25);</mark><br>

---

## Como contar a quantidade de valores:
### Quantidade de nomes em uma tabela:
<mark>SELECT COUNT(first_name) FROM sakila.actor</mark>

### Quantidade de nomes não repetidos:
<mark>SELECT COUNT(DISTINCT first_name) FROM sakila.actor</mark>

---

### Quantidade de um determinado item no banco:
<mark>SELECT COUNT(city) FROM sakila.address</mark>
<mark>WHERE city = 'Toronto'</mark>

---
### Como limitar a quantidade de itens consultados:
<mark>SELECT * FROM sakila.rentals LIMIT 10</mark>

---
### Como pular determinado número de linhas:
<mark>SELECT * FROM sakila.rentals LIMIT 10 OFFSET 3</mark>

---

### Como ordenar a busca por uma determinada coluna:
<mark>SELECT * FROM sakila.address</mark>
<mark>ORDER BY nome-da-coluna ASC</mark>
<mark>ORDER BY nome-da-coluna DESC</mark>
#### Ordenando mais de uma coluna:
<mark>ORDER BY coluna1, coluna2</mark>
<mark>ORDER BY coluna1 DESC, coluna2</mark>

---
## Usando o WHERE, AND, OU, IS:
SELECT * FROM sakila.actor
WHERE last_name = 'DAVIS';

SELECT * FROM sakila.film
WHERE length < 50
ORDER BY length;

SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost > 12.99;

SELECT * FROM sakila.film
WHERE rating = 'G'
OR rating = 'PG';

SELECT * FROM sakila.rental
WHERE return_date is NULL;



----------------------------------------------------------------

## Ordem dos operadores:
() > *|/ > -|+ > NOT > AND > OR

----------------------------------------------------------------

SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

---

## Como fazer busca com que palavras:
### Todos os filmes que não começam com a palavra academy
SELECT * FROM sakila.film
WHERE title NOT LIKE 'academy%';

### Todos os filmes que terminam com a palavra DOM;
SELECT * FROM sakila.film
WHERE title LIKE '%don';

### Encontrar qualquer resultado que contenha a palavra DOM;
SELECT * FROM sakila.film
WHERE title LIKE '%dom%';

### Encontrar qualquer resultado que inicia com a p e finaliza com r:
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

### Encontrar qualquer resultado em que o segundo caractere da frase é C:
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

### Encontrar qualquer resultado em que o titulo possui exatamente 8 caracteres:
SELECT * FROM sakila.film
WHERE title LIKE '________';

### Similar ao de cima, mas que inicia com a letra E:
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';

---------------------------
## Utilizando o IN:
SELECT * from sakila.actor
WHERE first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER');

---
## Utilizando o BETWEEN:
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

----------------------
## Buscando por data:
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

### Usando LIKE para valores aproximados:
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

### Utilizando DATA com BETWEEN:
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

## Buscando apenas uma parte da data:
-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo

## Cast transformando uma string em datetime:
SELECT DISTINCT student_name, grade, dat0e_analysis FROM statistic
WHERE date_analysis
  between
    CAST('2022-08-06 00:00:00'AS datetime)
  AND
    CAST('2022-08-07 23:59:59' AS datetime)
  AND
    project_name = 'docker-to-do-list'
  ORDER BY grade DESC;

  
  ----------------------------------------------------------------
  ## Deletando banco de dados no Workbench:
  Selecionado banco, clicar com o botão direito do mouse e escolher DROP SCHEMA > DROP NOW

  ## Criar o mesmo banco novamente:
  Salvar o arquivo
https://assets.app.betrybe.com/back-end/sakila-1ae15ae82697888c35bf1f1c8acbf755.sql

---
## Como inserir novos dados (linhas) na tabela:
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');

## Como inserir múltiplas linhas ao mesmo tempo:
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');

---
## Para ignorar erros no momento da inserção de dados:
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;

## Inserir dados de outra tabela:
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;

## Criando tabelas temporárias:
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.staff;

  ---

## Atualizando dados:
UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

### Alterando mais de uma coluna ao mesmo tempo:
UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;

---

## Atualizando em massa:
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

## Atualizando de forma sequencial:
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC ]]
[LIMIT quantidade_resultados];

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

---

## Safe updates para evitar que aconteçam erros ao atualizar dados:
### Sempre em uma nova janela antes de rodar UPDATE/DELETE
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;

## Desabilitando:
SET SQL_SAFE_UPDATES = 0;

---

## Excluindo dados de uma tabela:
DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

## Em caso se restrição por foreign key**
Deletar primeiro a dependência na tabela que recebe o item;
Depois deletar na tabela original

---

## Restrições de DELETE:
-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;

---

## Para deletar tudo de uma vez:
TRUNCATE banco_de_dados.tabela;

---

## Manipulação de Strings:
-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou uma string', 6);

-- Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
SELECT CHAR_LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);