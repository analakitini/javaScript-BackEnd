// 1- EXEMPLO COM SPLICE, remove um elemento específico

var notas = [10,7,8,5,10];
notas.splice(3,1);
console.log(notas);

// Aqui queremos remover o elemento 3 do array, então sabemos que ele está no índice 2
//Pois os elementos do array começam a contar pelo índice 0, então bastou utilizar o splice com o segundo parâmetro como 1 para remover um elemento

let media = (notas [0] + notas [1] + notas [2] + notas [3])/notas.length
console.log(`A média é ${media}`)

// 2- exemplo com SPLICE e INDEXOF
// Agora vamos a um exemplo que precisamos remover um elemento sem saber o índice do mesmo

var arr2 = ["Matheus", "João", "Pedro", "Ricardo"];

var indice = arr2.indexOf("Pedro");

arr2.splice(indice, 1);

console.log(arr2); // ["Matheus", "João", "Ricardo"]


// https://www.horadecodar.com.br/2020/09/20/como-remover-um-elemento-especifico-de-um-array-em-javascript/