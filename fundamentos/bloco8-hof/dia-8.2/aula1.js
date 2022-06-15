
//* Exercício 1 - Saber de acordo com o grade se o estudando está aprovado ou não.
const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];

  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }

  verifyGrades();

  console.log(students);

//  Agora o mesmo exercício usando o forEach:

const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
    students.forEach((student, index) => {
        if (student.grade >= 60) {
            students[index].approved = 'Aprovado';
        } else {
            students[index].approved = 'Recuperação';
        }
    });
}

verifyGrades();

console.log(students);

//* outro exercício: encontrar o primeiro número que seja divisível por 5 em uma lista de números.

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 5 === 0) {
        firstMultipleOf5 = numbers[index];
        break;
    }
}

console.log(firstMultipleOf5);
// 50

//* Resolvendo com o array Find: 

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50

//* Estrutura de HOF em arrays: 

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

// Outro exemplo usando forEach

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

//* Usando o forEach pra fazer uma tabuada do 2: 

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// Outro exercicio

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

emailListInData.forEach(showEmailList);

//* utilizando o FIND: Retorna o primeiro elemento encontrado, somente o primeiro

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

//* exemplo; encontrar o primeiro número que é divisivel por 3 e 5.

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
 return numbers.find((number) => number % 3 === 0 && number % 5 ===0);
}

console.log(findDivisibleBy3And5())


// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());

// Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:


const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((musica) => musica.id === id);
  }
  
  console.log(findMusic('31031685'));

  //* 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

  const hasName = (arr, name) => {
    //Adicione seu código aqui
    return arr.some((currentName) => currentName === name);
  }
  
  console.log(hasName(names, 'Ana'));


// encontrar uma pessoa pelo ano de nascimento dela: 

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947());


const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people, ) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]


