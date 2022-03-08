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


const nome = "king";

switch (nome.toLocaleLowerCase()) {
    case "bishop":
        console.log("diogonal");
        break;

    case "knight":
        console.log("L shape");
        break;

    case "pawn":
        console.log("vertically");
        break;
    
    case "rook":
        console.log("horizontally/vertically");
        break;

    case "queen":
        console.log("diagonally, horizontally or vertically");
        break;

    case "king":
        console.log("one square, any direction");
        break;


    default:
        console.log("Invalid name")
}

