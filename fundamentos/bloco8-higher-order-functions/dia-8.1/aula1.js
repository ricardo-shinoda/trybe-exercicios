//* FUNÇÕES DE PRIMEIRA CLASSE:

function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable);
  //  [Function: sum]


  //! quando usamos arro function usamos o conceito de uma função dentro de uma variável: 
  const sum = (number1, number2) => {
    return number1 + number2;
  };


  //! exemplo passando funções como argumento de outras funções:
  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);


  //! Retornar função de outra função:

  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));

  //! HIGHER ORDER FUNCTIONS

  const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);



// Estrurutando uma HOF - imrprimindo números até o 5

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.group); // 5 Representa até qual número testar





  // outro exercicio- ver qual número de 0 a 9 são pares/ímpares

  const repeat = (number, action) => { // number e action são callbacks
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(9, isEven); // Testa quais números serão pares;
  repeat(9, isOdd); // Testa quais números serão ímpares;




  // number generator

  const numberGenerator = () => {
    return Math.random() * 100; // * 100 pq math traz números de 0 a 1
  }
  
  console.log(numberGenerator());


  

  // exercicio Higher Order Function:

  const sum = (num1, num2) => num1 + num2;
  const sub = (num1, num2) => num1 - num2;
  const mult = (num1, num2) => num1 * num2;
  const div = (num1, num2) => num1 / num2;

  const calculator = (func) => func(10, 5);
  console.log(calculator(sum));
  console.log(calculator(sub));
  console.log(calculator(mult));
  console.log(calculator(div));



    // exercício aula 8.1

    const wakeUp = () => 'Acordando!!';
    const cafe = () => 'Bora tomar café!!';
    const dormir = () => 'Partiu dormir!!';
    
    const doingThings = (callback) => {
      const result = callback();
      console.log(result);
    };
  
  
    doingThings(wakeUp);
    doingThings(cafe);
    doingThings(dormir);