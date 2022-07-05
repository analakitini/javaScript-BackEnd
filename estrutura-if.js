// A principal estrutura condicional é if, que podemos traduzir literalmente como “se”:

// if (condicao) {
//     // código a ser executado
//    }

// exemplo 1

// const num = 10;

// if (num === null) {
//  console.log('número não fornecido');
// }

// exemplo 2

// const num = 10;

// if (num !== null) {
//  console.log(`o número é ${num}`);
// }

// exemplo 3

// if (num) {
//     console.log(`o número é ${num}`);
//    }

// exemplo 4 

// const num = null;

// if (num === null) {
//  console.log('número não fornecido');
// }

// Múltiplas condiçoes

// É possível usar os operadores AND (&&) ou OR (||) para executar o código no if caso uma das condições for verdadeira, ou as duas:

// exemplo 1

// const num = 11;

// if (num > 10 || !num) {
//  console.log('número não válido');
// }

// exemplo 2

// const num = 11;

// if (num > 10 && num < 20) {
//  console.log('número válido');
// }

// if…else

// exemplo 1

// function verificaNumero(numero) {

//  if (numero > 10) {
//    return 'número maior que 10';
//  } else {
//    return 'número não é maior que 10';
//  }
//  }

// console.log(verificaNumero(9)) //número não é maior que 10

// else if

// const num = 15;

// if (num >= 0 && num <= 10) {
//   console.log('número entre zero e dez');
// } else if (num > 10 && num <= 20) {
//   console.log('número entre dez e vinte');
// } else if (num > 20 && num <= 30) {
//   console.log('número entre vinte e trinta');
// } else {
//   console.log('outro número');
// }




