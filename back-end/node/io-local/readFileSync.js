//! método disponibilizado pelo módulo  fs para leitura SÍNCRONA de arquivos (fs.readFileSync)

// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }

//! Lendo arquivos com métodos assíncronos

const fs = require('fs').promises;

async function main() {
    try {
        const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
    }
}

main()

//! Escrevendo dados com arquivos

