const readline = require('readline-sync')

const peso = readline.questionFloat(`What's your weight? `);
const alt = readline.questionInt(`What's your height? `);

// const weightKg = 79;
// const heightCm = 174;

function handleBmi(peso, alt) {
    console.log(`weight: ${peso}, height: ${alt}`);

    const heightMeter = alt / 100;
    const heightSquare = alt * 2;
    
    const bmi = peso / heightSquare;

    return bmi;
} 

function main () {
    const bmi = handleBmi(peso, alt);
    console.log(`BMI: ${bmi.toFixed(2)}`)
}
main();