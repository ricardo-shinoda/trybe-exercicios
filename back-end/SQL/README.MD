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

### Exercicio:
Usando a tabela film:
Selecione todos os dados da tabela. Pronto, fez isso?
Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

### Solution:
SELECT title, release_year, rental_duration, replacement_cost FROM sakila.film <BR>
ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 20;

<mark></mark>
