//! Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson
// const fs = require('fs').promises;

// async function readFile() {
//     const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//     console.log(fileContent);
// }
// // A função main é apenas para termos um ponto de entrada centralizado para o nosso script
// async function main() {
//     await readFile();
// }

// main();

//! Converta o conteúdo do arquivo de JSON para um array utilizando JSON.parse.
// const fs = require('fs').promises;

// async function readFile() {
//     const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//     const simpsons = JSON.parse(fileContent); //! AQUI
//     console.log(fileContent);
// }
// // A função main é apenas para termos um ponto de entrada centralizado para o nosso script
// async function main() {
//     await readFile();
// }

// main();

//! Mapeie cada objeto do array para uma string no formato correto.
// const fs = require('fs').promises;

// async function readFile() {
//     const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//     const simpsons = JSON.parse(fileContent);
//     console.log(fileContent);
//     const strings = simpsons.map(({ id, name }) => `${id} = ${name}`); //! AQUI
// }
// // A função main é apenas para termos um ponto de entrada centralizado para o nosso script
// async function main() {
//     await readFile();
// }

// main();

//! Exiba as strings na tela.

// const fs = require('fs').promises;

// async function readFile() {
//     const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//     const simpsons = JSON.parse(fileContent);
//     console.log(fileContent);
//     const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
//     strings.forEach((string) => console.log(string)); //! AQUI
// }
// // A função main é apenas para termos um ponto de entrada centralizado para o nosso script
// async function main() {
//     await readFile();
// }

// main();

//! Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado"

// const fs = require('fs').promises;
// async function getSimpsonById(id) {
//     const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//     const simpsons = JSON.parse(fileContent);
//     const findId = simpsons.find((simpson) => Number(simpson.id) === id);
//     if (!findId) {
//         throw new Error('Id não encontrado');
//     }
//     return findId;
// }

// async function main() {
//     const simpson = await getSimpsonById(3);
//     console.log(simpson);
// }

// main();

//! Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
//! Não esquecer de importar o writeFile (npm install writeFile ou npm install writeFile-async)
// const fs = require('fs').promises;

// async function filterSimpsons() {
//     const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//     const simpsons = JSON.parse(fileContent);
//     const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

//     await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
//     console.log(simpsons);
// }

// async function main() {
//     filterSimpsons();
// }

// main();

//! Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// const fs = require('fs').promises;

// async function createNewFile() {
//     const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//     const simpsons = JSON.parse(fileContent);
//     const familyIds = [1, 2, 3, 4];
//     const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));

//     await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// }

// function main() {
//     createNewFile();
// }
// main();

//! Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

// const fs = require('fs').promises;

// async function addToFile() {
//     const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
//     const simpsonsFamily = JSON.parse(fileContent);
//     simpsonsFamily.push({id: '8', name: 'Nelson Muntz' });

//     await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// }

// function main() {
//     addToFile()
// }

// main();

//! Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const fs = require('fs').promises;

async function changeInputs() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent);
    const simpson = simpsonsFamily.filter((simpson) => simpson.id !== '8');
    const simpsonsWithMaggie = simpson.concat([{ id: '15', name: 'Maggie Simpson' }]);
    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));

}

function main() {
    changeInputs()
}

main();