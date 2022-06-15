const sum = (value1, value2) => value1 + value2;
console.log(sum(3, 4));

//*exercicio 2

const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23

//*exercicio 3
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));

  //exemplo 4

//   const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

  // exemplo 5 usando TRY e CATCH
//   const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

//*exemplo 6 - objetos
//   const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
  
//   customer1.lastName = 'Faria'; //* Para adicionar um campo no objeto
//   console.log(customer1);
  
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva'; //* outra maneira de adicionar um campo no objeto
//   console.log(customer2);


  //*exemplo 7
//   const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

  //* exercicio 

//   const times = { 
//       time1: 'Raptors',
//       time2: 'Bulls',
//       time3: 'Knicks',
//   }

//   let newKey; 'time4';
//   const time4 = 'Lakers';
//   times[newKey] = time4;

//   console.log(times);

  //Exemplo 8
//   const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     author: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
//   // para imprimir os campos (keys do objeto)
//   for (const property in coolestTvShow) {
//     console.log(property);
//   }

  // outra maneira é:

  const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  // for (const property in coolestTvShow) {
  //   console.log(property);
  // }
  
  console.log(Object.keys(coolestTvShow));
  
  // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]
  