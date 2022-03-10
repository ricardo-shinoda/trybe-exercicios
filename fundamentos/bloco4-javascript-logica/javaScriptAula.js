//PRIMEIRO EXERCICIO

const myName = "Ricardo";
const birthCity = "Bauru";
// birthCity = "São Paulo";
let birthYear = 1980;
birthYear = 2010;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//SEGUNDO EXERCICIO

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';


typeof patientId

//TERCEIRO EXERCICIO

const base = 5;
let height = 8;
const area = base * height;
const perimeter = area * 2;

console.log(base);
console.log(height);
console.log(area);
console.log(perimeter);

//if/else

const nota = 70;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovado(a)");
}

else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lidata de espera");
}

//  else if (nota < 60) {
//      console.log("Você foi reprovado(a)");
//  }

else {
  console.log("Você está reprovado(a)");
}

//OPERADORES LÓGICOS AND, OR, NOT

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

//outro no caso de and as duas constantes devem ser verdadeiras

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

outro

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//Outro exercicio

const currentHour = 11;
let message = null;

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
}

else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
}

else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
}

else if (currentHour > 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
}

else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

//OPERADOR LÓGICO OR

const bebidaPrincipal = 'cafézinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

//Tabela de resultados OR 

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let weekDay = "domingo";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}

else if (weekDay === "sábado" || weekDay === "domingo") {
  console.log("FINALMENTE, descanso merecido UwU")
}

OPERADOR LÓGICO NOT

console.log((2 + 2) === 4);

console.log(!(2 + 2) === 4);

console.log(!42);

console.log(!null); // true

console.log(!undefined); // true



SWIT CASE

let estado = "aprovado";

switch (estado) {
  case "aprovado":
    console.log("aprovada");
    break;

  case "lista":
    console.log("lista");
    break;

  case "reprovada":
    console.log("reprovada");
    break;

  default:
    console.log("Não se aplica")


}


EXERCICIO ARRAYS AND FOR

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);


//SEARCHING FOR CERTAIN ITEM ON ARRAY:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorroE

// ADD ANOTHER ELEMENT TO THE ARRAY: 
// TO ADD IN THE END USE = push
// TO ADD IN THE BEGINNING USE = unshift

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// PARA REMOVER UM ELEMENTO DO ARRAY:\
// PARA REMOVER O ÚLTIMO ITEM USAR = .POP()
// PARA REMOVER O PRIMEIRO ITEM USAR = .SHFT()

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

// PARA SABER QUAL A POSIÇÀO DE UM DETERMINADO ELEMENTO:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1


//EXERCICIO1 - o valor de serviços do array

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices);

//EXERCICIO2 - valor do portifólio no array menu

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portifólio");

console.log(indexOfPortfolio);

//EXERCICIO 3 - Adicione o valor "contato" no final do array

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("Contato");

console.log(menu);

//FOR

var numero = 5;
for (var contador = 1; contador <= 9; contador += 1) {
  console.log(numero * contador);
}

// exemplo

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}


//Exercicios

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}


// FOR/OFF
// não altera o valor dentro do array, apenas para impressão


let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5



let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"



let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

//exercicio
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (numero of names) {
  console.log(numero);
}


//exercicio - Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (let index = 0; index < fruits.length; index++) {
  soma += fruits[index];

}

if (soma > 15) {
  console.log(soma);
}

else {
  console.log("valor menor que 16");
}

//exercicios -  1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let soma = 0;

for (let index = 0; index <= 50; index++) {
  soma = soma + index;
}

console.log("A soma de 1 a 50 é: " + soma);

//exercicio2 -  Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let count = 0;

for (let index = 2; index <= 150; index++) {
  if (index % 3 === 0);
    count += 1;
}

if (count === 50) {
  console.log("mensagem secreta");
}

console.log(count);

//exericio3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let player1 = "tesoura";
let player2 = "papel";

if (player1 == "pedra" && player2 == "tesoura") {
  console.log("player 1 won")
}

else if (player1 == "pedra" && player2 == "papel") {
  console.log("Player 2 won");
}

else if (player1 == "pedra" && player2 == "pedra") {
  console.log("A ties");
}

else if (player1 == "papel" && player2 == "tesoura") {
  console.log("player 2 won")
}

else if (player1 == "papel" && player2 == "papel") {
  console.log("A tie");
}

else if (player1 == "papel" && player2 == "pedra") {
  console.log("Player 1 won");
}

else if (player1 == "tesoura" && player2 == "tesoura") {
  console.log("a ties")
}

else if (player1 == "tesoura" && player2 == "papel") {
  console.log("player 1 won");
}

else if (player1 == "tesoura" && player2 == "pedra") {
  console.log("Player 2 won");
}







//exericio4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".



let idade = -3;

if (idade >= 18) {
  console.log("A pessoa é maior de idade");
}

else if (idade < 18) {
  console.log("A pessoa é menor de idade");
}

else if (idade < 0) {
  console.log("idade errada");
}


//exercicio5 -  Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let manu = 30;
let ana = 4;
let ronald = 3;

if (manu < ana && manu < ronald) {
  console.log("Manu é a mais nova");
}

else if (ana < manu && ana < ronald) {
  console.log("ana é a mais nova");
}

else if (ronald < ana && ronald < manu) {
  console.log("ronald é o mais novo");
}

else if (ana == manu && ana < ronald) {
  console.log("Ana e manu são as mais novas");
}

else if (ana == ronald && ana < manu){
  console.log("Ana e Ronald são mais novos que manu");
}

else if (ronald == manu && ronald < ana) {
  console.log("Ronald e Manu são os mais novos");
}
