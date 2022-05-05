//! SPREAD

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['goiaba', 'banana', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pimenta', 'sal', 'cominho'];

// const fruitSalad = (fruit, additional) => {
//     const fruitComple = [...specialFruit, ...additionalItens];
// };

const fruitComple = [...specialFruit, ...additionalItens];

// console.log(fruitSalad(specialFruit, additionalItens));

console.log(fruitComple);


//* outra maneira:
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'pêra'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

const fruitSalad = (fruit, additional) => {
    // Esreva sua função aqui
    const fruitSaladaWithAdditional = [...fruit, ...additional];
    return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));


//! REST
//* utilização do ... antes do parâmetro dentro da função (...args)

function quantosParams(...args) { // aqui usa-se o rest
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

//* Como somar números de um array usando o rest:
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 188)); // 88

//! OBJECT DESTRUCTURING

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

//* outro exemplo

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

//* Outro exemplo

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// outra maneira do mesmo resultado

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};
const name = student.a;
console.log(name); // Maria

//* outra maneira de usar, usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, 

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


//* 1 - Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator . 


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const combined = { ...user, ...jobInfos };
console.log(combined);

//* 2 - imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template

const { name, age, nationality } = user;
const { profession, squad, squadInitials } = jobInfos;
const frase = `Hi, my name is ${name}, I'm ${age} years old and I'm Brazilian. I work as a ${profession} and my squad is ${squad}`;
console.log(frase);

//! ARRAY DESTRUCTURING
// Declarando todas as variáveis contendo os nomes do países usando apenas uma linha

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

//* 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao] = saudacoes;// variável que recebe o conteúdo de saudacoes
console.log(saudacao);

//* 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const itens = ['arroz', 'gato', 'água'];
const [comida, animal, bebida] = itens;
console.log(animal);
console.log(bebida);
console.log(comida);

// outra maneira:
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

//* 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares 

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[, , , ...numerosPares] = numerosPares; //número de vírgula é a qtd de index que ele vai esconder

console.log(numerosPares); // [6, 8, 10, 12];

//! DEFAULT DESTRUCTURING

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian


//* outro exemplo desestruturando um array: 

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

//* exercicio da aula Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilia

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`; // nomear a nationality aqui ele utilizada caso não haja no objeto, o objeto sobrepoe aqui.

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person, person.nationality));

//! Object Property Shorthand

const newUser = (id, name, email) => {
    return {
        id: id,
        name: name,
        email: email,
    };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// com a aplicação SHORT HAND

const newUser = (id, name, email) => {
    return {
        id,// não precisa reescrever se for igual a chave
        name,// não precisa reescrever se for igual a chave 
        email,// não precisa reescrever se for igual a chave
    };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//* praticando altere a função getPosition utilizando a property shorthand

//ANTES:
const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude
});

console.log(getPosition(-19.8157, -43.9542));

// COMO FICOU
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude
});

console.log(getPosition(-19.8157, -43.9542));

//! Default Parameters

const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// Uma solução seria:
const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting(); // Welcome usuário!

  // O melhor seria:

  const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`); //user recebe usuário, acredito que pode ser sobrescrito também.

greeting(); // Welcome usuário!

// para praticar escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
    return number * value;
  };
  
  console.log(multiply(8));