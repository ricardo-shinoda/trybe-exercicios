const readline = require('readline-sync')

const peso = readline.questionFloat(`What's your weight in kg? `);
const alt = readline.questionInt(`What's your height in centimeter? `);

function handleBmi(peso, alt) {
    console.log(`weight: ${peso}, height: ${alt}`);

    // const heightMeter = alt / 100;
    const heightSquare = alt * 2;

    const bmi = peso / heightSquare;

    return bmi;
}


function main() {
    const bmi = handleBmi(peso, alt);
    console.log(`BMI: ${bmi.toFixed(2)}`)

    if (bmi < 0.185) {
        console.log('Abaixo do peso(magreza)')
        return;
    }
    if (bmi >= 0.185 && bmi <= 0.249) {
        console.log('Peso normal')
        return;
    }
    if (bmi >= 0.25 && bmi <= 0.299) {
        console.log('Acima do peso(sobrepeso)')
        return;
    }
    if (bmi >= 0.30 && bmi <= 0.349) {
        console.log('Obesidade grau I')
        return;
    }
    if (bmi >= 0.35 && bmi <= 0.399) {
        console.log('Obesidade grau II')
        return;
    }
        console.log('Obesidade graus III e IV')
}

main();