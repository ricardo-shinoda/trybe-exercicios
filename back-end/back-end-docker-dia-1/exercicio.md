1 - 🚀 No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.
R: Basta fazer a busca no site do Docker hub.

2 - 🚀 Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso.
R: Buscar pelo campo para fazer o download da imagem

3 - 🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.
R: Procurar pelo item stable-slim e copiar o comando para rodar no terminal

4 - 🚀 Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.
R: <mark>docker container run -it debian:stable-slim</mark>
<mark>docker ps -l</mark>

5 - 🚀 No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.
R: No terminal rodar: <mark>cat /etc/*-release</mark>

6 - 🚀 Encerre o terminal.
R: No terminal rodar: <mark>exit</mark>

7 - 🚀 Verifique na sua lista de containers qual container se refere ao exercício que acabou de praticar.
R: No terminal rodar: 
<mark>docker ps -l</mark>
<mark>docker container ls -l</mark>

8- 🚀 Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.
R: No terminal rodar:
<mark>docker container ls -a</mark> para listar todos os containers e buscar o ID
<mark>docker start numero-do-container-id</mark> para iniciar o container desejadores
<mark>container ls -a</mark> para validar se o container subiu


9 - 🚀 Retome o container que foi criado anteriormente neste exercício.
R: No terminal rodar: <mark>docker attach container-id</mark>

10 - 🚀 Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.
R: No terminal rodar: <mark>cat /etc/debian_version</mark>

11 - 🚀 Encerre o terminal.
R: No terminal rodar: <mark>exit</mark>

12 - 🚀 Remova somente o container criado para esse exercício.
R: No terminal rodar: <mark>docker container rm container-id/nome</mark>

13 - [BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.
R: No terminal rodar: <mark>docker run -it --rm andrius/ascii-patrol</mark>

14 - [BÔNUS] **Encerre o container utilizando os botões [ctrl] + [c].
R: No terminal rodar: <mark>ctrl + c</mark>