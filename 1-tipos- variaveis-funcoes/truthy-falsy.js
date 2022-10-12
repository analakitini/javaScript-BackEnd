// boolean
const usuarioLogado = true
const contaPaga = false 

// truthy ou falsy (não são examente booleans mas podem se comportar como se fossem)

// 0 => false 
// 1 => true

// console.log(0 == false)
// console.log("" == false)
// console.log(1 == true)

// undefined

// null (é um tipo de dado que ele representa vazio ou nada)

// let minhaVar; // quando iniciamos uma variável com let e deixamos ela sem valor nenhum ela ganha automaticamente pelo JS o valor de "undefined" ou seja ela não foi definida mas pode ser utilizada 
// let varNull = null; // ja atribuimos um o "null", null é um tipo de dado

// console.log(minhaVar)
// console.log(varNull)

let numero = 3;
let texto = "Alura";

console.log(typeof numero)
console.log(typeof texto)
// typeof é uma palavra-chave para perguntarmos ao JS qual o tipo de dado que está sendo guardado nesta variável

let minhaVar;
let varNull = null;

console.log(typeof minhaVar)
console.log(typeof varNull)
// o varNull veio como um "obeject", quando null foi criado no JS ele foi criado como um objeto, ele deveria ter sido criado como null, mas esse é um dos bugs do JS que não pretende ser concertados porque se consertar esses bugs irá quebrar muitos códigos ja existentes.