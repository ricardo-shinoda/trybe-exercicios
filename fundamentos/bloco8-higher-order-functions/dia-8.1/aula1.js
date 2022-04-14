//! FIRST CLASS FUNCTIONS

const sum = (number1, number2) => {
    return number1 + number2;
  };

  console.log(sum(2, 3));

  //* outro exemplo de HOF passando funções como argumento para outras funções:

  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

  //* exemplo de hof retornando uma função de outra função:

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

// exemplo de HOF

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);