const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//* Porque além dos estilos de li ela também tem um estilo extra na class "tech", de -20px no eixo y.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function handleChangeTech(event) { //cria a função, nomeia e dá um nome para o parametro
    const techElement = document.querySelector('.tech');//cria variável, e recebe o elemento que contém a "tech" atual
    techElement.classList.remove('tech');// remove o elemento "tech", pois deve haver apenas um elemento tech.
    event.target.classList.add('tech');// adiciona o elemento "tech"
    input.value = '';
  }
  
  firstLi.addEventListener('click', handleChangeTech);//chama a primeira li, se "clicked" executa a função;
  secondLi.addEventListener('click', handleChangeTech);//chama a segunda li, se "clicked" executa a função;
  thirdLi.addEventListener('click', handleChangeTech);//chama a terceira li, se "clicked" executa a terceira
  

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('input', function(event) {//variável que recebe "input" (acao de digitar) e nomeia a funcao:
    const techElement = document.querySelector('.tech');//cria variável que chama onde está a classe tech
    techElement.innerText = event.target.value;// variável criada anteriormente (techElement) recebe o valor digitado
  });

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', function() {
    window.location.replace('https://github.com/ricardo-shinoda');
  });

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'yellow';
  });
  
  myWebpage.addEventListener('mouseout', function(event) {
    event.target.style.color = 'unset';
  });

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.