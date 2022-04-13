const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    return arrays.reduce((acumulador, corrente) => acumulador.concat(corrente), []); // concatena os itens retirando os sinais de []
  }
  console.log(flatten());