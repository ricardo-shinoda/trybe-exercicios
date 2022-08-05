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