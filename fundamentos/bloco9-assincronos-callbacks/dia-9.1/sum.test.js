// // const sum = (a, b) => a + b;

// // test('sums two values', () => {
// //   expect(sum(2, 3)).toEqual(5);
// // });


// // testando Falso positivo
// test('Não deveria passar!', () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//     }, 500);
//   });

//   // agora como deveria acontecer

// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       try {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     }, 500);
//   });

//   // outro exemplo

//   const asyncSum = (a, b, callback) => {
//     setTimeout(() => {
//       const result = a + b;
//       callback(result);
//     }, 500);
//   };
  
//   test('Testando asyncSum, soma 5 mais 10', (done) => {
//     asyncSum(5, 10, (result) => {
//       try {
//         expect(result).toBe(15);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });