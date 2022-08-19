const weightKg = 80;
const heightCm = 174;

function handleBmi(weight, height) {
    console.log(`weight: ${weight}, height: ${height}`);

    const heightMeter = height / 100;
    const heightSquare = height * 2;
    
    const bmi = weight / heightSquare;

    return bmi;
} 

function main () {
    const bmi = handleBmi(weightKg, heightCm);
    console.log(`BMI: ${bmi.toFixed(2)}`)
}
main();