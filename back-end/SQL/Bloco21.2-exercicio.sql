-- Active: 1660327180226@@127.0.0.1@3306@pixar
-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT m.title, b.domestic_sales, b.international_sales
FROM movies AS m
INNER JOIN box_office AS b
ON b.movie_id = m.id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT  m.title, (international_sales + domestic_sales) AS Sales
FROM movies AS m
INNER JOIN box_office AS b
ON b.movie_id = m.id
WHERE international_sales > domestic_sales;


-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT m.title, b.rating
FROM movies AS m
INNER JOIN box_office AS b
ON b.movie_id = m.id
ORDER BY b.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM theater AS t
LEFT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
LEFT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM theater AS t
RIGHT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT m.title, m.director, m.year, m.length_minutes, b.rating, b.domestic_sales, b.international_sales
FROM movies AS m
INNER JOIN box_office AS b
ON m.id = b.movie_id
WHERE m.theater_id IS NOT NULL
AND b.rating > 8;