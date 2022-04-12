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
  //* 1 -  Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  
  const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
  function formatedBookNames() {
    return books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);
}
  console.log(formatedBookNames());


  //* 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

  function nameAndAge() {
    // escreva seu código aqui
    // return books.map((livro) => `Author: ${livro.author.name}`);
    return books.map((livro) => ({
        author: livro.author.name,
        age: livro.releaseYear - livro.author.birthYear,
    }
    ))
    .sort((obj1, obj2) => obj1.age - obj2.age); // pode ser qualquer nome no lugar de obj, serve apenas para dizer qual a sequência entre os dois elementos.
  }
console.log(nameAndAge());

//* 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction() {
    // escreva seu código aqui
    return books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia');
  };

  console.log(fantasyOrScienceFiction());

  //* 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

  function oldBooksOrdered() {
    // escreva seu código aqui
    return books.filter((livro) => ((2022 - livro.releaseYear) >= 60)).sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear);
  }

  console.log(oldBooksOrdered());

  //* 5- Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

  function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui
    const fantCient = books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia');
    return fantCient.map((livro) => `${livro.author.name}`).sort();     
  }

  console.log(fantasyOrScienceFictionAuthors());

  //* 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

  function oldBooks() {
    // escreva seu código aqui
    const plusSixtie = books.filter((livro) => ((2022 - livro.releaseYear) >= 60));
    return plusSixtie.map((livro) => `${livro.name}`);
  }
  console.log(oldBooks());

  //* 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

  function authorWith3DotsOnName() {
    return books.find((book) => (
      book.author.name.split(' ')
        .filter((word) => word.endsWith('.')).length === 3
    )).name;
  }
  console.log(authorWith3DotsOnName());
