const operations = require('./operation');
const readline = require('readline-sync');

console.log('Calculadora simples');
const num1 = readline.questionInt('Digite o primeiro número: ');
const op = readline.question('Digite o operador escolhido entre: (+, -, *, /)');
const num2 = readline.questionInt('Digite o segundo número: ');

switch (op) {
    case "+":
        operations.sum(num1, num2)
        break;
    case "-":
        operations.sub(num1, num2)
        break;
    case "*":
        operations.mul(num1, num2)
        break;
    case "/":
        operations.div(num1, num2)
        break;
    default:
        console.log('Opa, operação desconhecida ou não implementada.')
}