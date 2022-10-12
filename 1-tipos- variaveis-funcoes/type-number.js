// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operecaoMatematica = primeiroNumero - segundoNumero;

console.log(operecaoMatematica)

// ponto flutuante 

const numeroPontoFlutuante = 3.3;
const PontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante; 

console.log(novaOperacao)

// NaN -> Not a Number (não é número)

const alura = "Alura";
console.log(alura * primeiroNumero)

// Infinity  
// Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”.

var a = 10
var b = 0
console.log(a/b) 

// Ordenação de números no JavaScript
// https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona

var lista = [10,1, 5, 9, 8, 12, 15];
lista.sort((a, b) => a - b);

// Formatando números no JavaScript
// https://www.alura.com.br/artigos/formatando-numeros-no-javascript

