function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// exercicio1 - 
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');//variável recebe os elementos com id "days"

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();


//exercicio 2- 
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');


//exercicio 3- 
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');//receber o botão holiday (pelo seu id).
  let getHolidays = document.querySelectorAll('.holiday') //receber os dias que contém a classe holiday.
  let backgroundColor = 'rgb(238,238,238)';//variável da cor de fundo inicial
  let setNewColor = 'white';// variável da nova cor.

  getHolidayButton.addEventListener('click', function() {//eventListener por click do mouse, que chama a função anônima
    for (let index = 0; index < getHolidays.length; index += 1) {//baseado nos dias com classe holiday
      if (getHolidays[index].style.backgroundColor === setNewColor) {//se a for do index === a nova cor...
        getHolidays[index].style.backgroundColor = backgroundColor;/// mudar para a cor antiga
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;// muda pra cor nova.
      }
    }
  })
};

displayHolidays();

//exercicio 4 - 
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .


function createFridayButton(buttonName) {//função para criar o botão, seu nome vem quando chamar a função (linha 112)
  let buttonContainer = document.querySelector('.buttons-container');//variável para chamar de pai na linha 109 e fazer o append
  let newButton = document.createElement('button');//criando o botão
  let newButtonID = 'btn-friday';//criando o ID do botão

  newButton.innerHTML = buttonName;//texto do novo botão
  newButton.id = newButtonID;//adiciona o ID (btn-friday)ao botão
  buttonContainer.appendChild(newButton);//acidiona o novo botão ao pai que tem a classe (buttonContainer)
};

createFridayButton('sexta-feira');// chama a função e dá o nome ao botão.


//exercicio 5 - 
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.


function displayFridays(fridaysArray) {//função que adiciona o event click
  let getFridayButton = document.querySelector('#btn-friday');//variável q chama o item com id "btn-friday";
  let fridays = document.getElementsByClassName('friday');// variável que chama o elemento com classe "friday" (as sextas)
  let newFridayText = 'SEXTOU o/';// variável que traz a string a ser adicionada

  getFridayButton.addEventListener('click', function() {//eventListener p click do mouse e chama a função anônima
  for (let index = 0; index < fridays.length; index += 1) {// for para passar por todas as sextas do mês
    if (fridays[index].innerHTML !== newFridayText) {//se o texto for diferente da string a ser adicionada
        fridays[index].innerHTML = newFridayText;// adiciona a strg a ser adicionada
    } else {
        fridays[index].innerHTML = fridaysArray[index];//quando clikar novamente, voltar o texto original (linha 136)
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];//variável que informa as sextas-feiras
displayFridays(dezFridays);//chama a função

//! exercicio 6 - 
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function dayMouseOver() {// função 1 - quando o mouse está em cima do target
  let days = document.querySelector('#days');//variável recebe os elementos com id "days"

  days.addEventListener('mouseover', function(event) {//event com função "mouseover + função que altera tamanho/peso
    event.target.style.fontSize = '30px';//event altera o font size de onde o mouse passar por cima
    event.target.style.fontWeight = '600';//event altera o "peso" da fonte que o mouse passar por cima
  })
};

function dayMouseOut() {//função 2- quando o mouse sai do target
  let days = document.querySelector('#days');//variável recebe os elementos com id days

  days.addEventListener('mouseout', function(event) {//event com a função mouseout + função que altera o tamanho/peso
    event.target.style.fontWeight = '200';//evento que altera o peso ao retirar o mouse
    event.target.style.fontSize = '20px';//evento que altera o tamanho da fonte ao retirar o mouse
  })
};

dayMouseOver();//chama a função 1
dayMouseOut();// chama a função 2

//! exercicio 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function newTaskSpan(task) {//função adicionando uma task

  let tasksContainer = document.querySelector('.my-tasks');//variável recebe a classe que será o pai da nova criada
  let taskName = document.createElement('span');//variável que cria a tag do elemento

  taskName.innerHTML = task;//aqui recebe nome que será impresso, via função linha 176
  tasksContainer.appendChild(taskName);//adiciona o elemento criado "span" ao pai (taskConteiner)
};

newTaskSpan('Projeto');//Chama a função e adiciona o nome da task


//!exercicio 8
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function newTaskDiv(color) {//função que adiciona uma legenda com cor para a tarefa criada no exercício anterior.

  let tasksContainer = document.querySelector('.my-tasks');//com a classe task 
  let newTask = document.createElement('div');//criar dinamicamente um elemento de tag <div>

  newTask.className = 'task';//da <div> criada.
  newTask.style.backgroundColor = color;//O parâmetro cor deverá ser utilizado como cor de fundo 
  tasksContainer.appendChild(newTask);//deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
};

newTaskDiv('green');//Esta função deverá receber como parâmetro uma string ("cor")

//!exercicio 9
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

//!exercicio 10
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .


function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

//!Bonus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();