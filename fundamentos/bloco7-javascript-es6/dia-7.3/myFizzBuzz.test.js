// myFizzBuzz.test.js
const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () => {
  it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz'); //* chamada de um número divisível p/ 3, 5
    expect(myFizzBuzz(3)).toBe('fizz'); //* chamadad e um número divisível por 3
    expect(myFizzBuzz(5)).toBe('buzz'); //* chamadad e um número divisível por 5
    expect(myFizzBuzz(1)).toBe(1); //* chamada de um número ñ divisível  p/ 3, 5
    expect(myFizzBuzz('2')).toBe(false); //* chamada de um número ñ é número
  })
});