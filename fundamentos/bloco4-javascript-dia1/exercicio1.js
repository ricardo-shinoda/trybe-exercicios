// PRIMEIRO EXERCICIO

// const myName = "Ricardo";
// const birthCity = "Bauru";
// // birthCity = "São Paulo";
// let birthYear = 1980;
// birthYear = 2010;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// SEGUNDO EXERCICIO

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';


// typeof patientId

// TERCEIRO EXERCICIO

// const base = 5;
// let height = 8;
// const area = base * height;
// const perimeter = area * 2;

// console.log(base);
// console.log(height);
// console.log(area);
// console.log(perimeter);

// if/else

//  const nota = 70;

//  if (nota >= 80) {
//      console.log("Parabéns, você foi aprovado(a)");
//  }

//  else if (nota < 80 && nota >= 60) {
//      console.log("Você está na nossa lidata de espera");
//  }

// //  else if (nota < 60) {
// //      console.log("Você foi reprovado(a)");
// //  }

// else {
//     console.log("Você está reprovado(a)");
// }

//OPERADORES LÓGICOS AND, OR, NOT

// const comida = 'pão na chapa';
// const bebida = 'cafézinho';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// outro no caso de and as duas constantes devem ser verdadeiras

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// outro

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// Outro exercicio

// const currentHour = 11;
// let message = null;

// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir";
// }

// else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D";
// }

// else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?";
// }

// else if (currentHour > 11 && currentHour < 14) {
//     message = "Hora do almoço!!!";
// }

// else if (currentHour >= 4 && currentHour < 11) {
//     message = "Hmmm, cheiro de café recém passado";
// }

// console.log(message);

// OPERADOR LÓGICO OR

// const bebidaPrincipal =  'cafézinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// Tabela de resultados OR 

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// let weekDay = "domingo";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// }

// else if (weekDay === "sábado" || weekDay === "domingo") {
//     console.log("FINALMENTE, descanso merecido UwU")
// }

// OPERADOR LÓGICO NOT

// console.log((2 + 2) === 4); 

// console.log(!(2 + 2) === 4);

// console.log(!42);

// console.log(!null); // true

// console.log(!undefined); // true



//SWIT CASE

let estado = "aprovado";

switch (estado) {
    case "aprovado":
        console.log("aprovada");
        break;

    case "lista":
        console.log("lista");
        break;

    case "reprovada":
        console.log("reprovada");
        break;

    default:
        console.log("Não se aplica")

        
}