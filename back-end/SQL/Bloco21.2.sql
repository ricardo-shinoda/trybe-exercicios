-- INNER JOIN - Onde há valores em comum nas duas tabelas:
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

-- A palavra AS pode ser omitida:
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

-- Outro exemplo:
SELECT * FROM sakila.customer;
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY first_name DESC
LIMIT 100;

-- LEFT JOIN - Se junta à tabela da esquerda. JOIN TO THE LEFT
-- mantém como tabela principal a da esquerda (FROM), e traz a coluna que eu quiser da tabela da direita (LEFT JOIN), se atender a condição
SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY first_name DESC
LIMIT 100;

-- RIGTH JOIN - se junta à tabela da direita. JOIN TO THE RIGHT
-- mantém como tabela principal a da direita (RIGHT JOIN), e traz a coluna que eu quiser da tabela da esquerda (FROM), se atender a condição
SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY first_name DESC
LIMIT 100;

-- SELF JOIN - Busca informações apenas na própria tabela.
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
	hr.employees AS Employee
INNER JOIN
	hr.employees AS Manager ON Employee.manager_id = Manager.employee_id;