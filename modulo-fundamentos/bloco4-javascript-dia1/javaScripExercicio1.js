// Exercicio1:Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados

// const a = 2;
// const b = 4;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);



// EXERCICIO2: Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const num1 = 6;
// const num2 = 4;

// if (num1 > num2) {
//     console.log(num1)
// }

// else {
//     console.log(num2);
// }

// EXERCICIO3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const num1 = 12;
// const num2 = 15;
// const num3 = 6;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1);
// }

// else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
// }

// else if (num3 > num1 && num3 > num2) {
//     console.log(num3);
// }


// EXERCICIO4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const num1 = -3;

// if (num1 >= 0) {
//     console.log("Valor positivo")
// }

// else {
//     console.log("Valor negativo")
// }



//EXERCICIO 5 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const angulo1 = 70;
// const angulo2 = 80;
// const angulo3 = 30;

// if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
//     console.log("Angulo inválido")
// }

// else if (angulo1 + angulo2 + angulo3 == 180) {
//     console.log("true");
// }

// else if (angulo1 + angulo2 + angulo3 !== 180) {
//     console.log("false");
// }


// EXERCICIO 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)


// const nome = "king";

// switch (nome.toLocaleLowerCase()) {
//     case "bishop":
//         console.log("diogonal");
//         break;

//     case "knight":
//         console.log("L shape");
//         break;

//     case "pawn":
//         console.log("vertically");
//         break;
    
//     case "rook":
//         console.log("horizontally/vertically");
//         break;

//     case "queen":
//         console.log("diagonally, horizontally or vertically");
//         break;

//     case "king":
//         console.log("one square, any direction");
//         break;


//     default:
//         console.log("Invalid name")
// }


// Exercicio7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


// const nota = 14;
// const percent = (nota / 100) * 100;

// if (nota < 0 || nota > 100) {
//     console.log("Error")
// }

// else if (percent >= 90) {
//     console.log("nota A");
// }

// else if (percent >= 80) {
//     console.log("nota B");
// }

// else if (percent >= 70) {
//     console.log("nota C");
// }

// else if (percent >= 60) {
//     console.log("nota D");
// }
// else if (percent >= 50) {
//     console.log("nota E");
// }
// else if (percent < 50) {
//     console.log("nota F");
// }

// Exercicio 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const num1 = 1;
const num2 = 1;
const num3 = 6;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 %2 === 0 ) {
    console.log(true);
}

else {
    console.log(false);
}





