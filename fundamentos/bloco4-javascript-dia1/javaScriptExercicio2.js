//exercicio1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//exercicio2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index +=1) {
    result += numbers[index];
}

console.log(result);

//exercicio3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);


//exercicio4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index +=1) {
    result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
    console.log("valor maior que 20");
}

else {
    console.log("valor menor ou igual a 20");
}

//exercicio5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let largest = numbers[0];
//for (inicialização, verificação, atualização)
for (let index = 0; index < numbers.length; index += 1) {
    if (largest < numbers[index]) {
        largest = numbers[index];
    }
}

console.log(largest);

// exercicio 5 - em menos linhas

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let largest = Math.max.apply(0, numbers);
console.log(largest);



//exercicio6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result += 1;
    }
}

if (result === 0) {
    console.log("nenhum valor ímpar encontrado");
}
else {
    console.log(result);
}


// exercicio7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minor = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if (minor > numbers[index]) {
        minor = numbers[index];
    }
}

console.log(minor);

//exercicio8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for(let index = 1; index <= 25; index++) {
    numbers.push(index);
}

console.log(numbers);

//exercicio9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [];

for(let index = 1; index <= 25; index++) {
    numbers.push(index);
}

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index] / 2);
}


//imprimindo um array em ordem crescente - para fazer de forma descrescente, basta alterar o sinal se < para > no if

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);








