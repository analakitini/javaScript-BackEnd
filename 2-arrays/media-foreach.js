// Segunda maneira de fazer 

// const  notas = [10, 6.5, 8, 7.5]

// let somaDasNotas = 0

// notas.forEach(nota => {
//     somaDasNotas += nota
// })

// let media = somaDasNotas/notas.length

// console.log(media)

// Segunda maneira de fazer

const  notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach(function(nota){
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)

// callback -> função que chama de volta uma outra função, (chamamos essa outra função dentro do parametro)

// Na aula vimos como podemos usar o forEach para acessar o valor de todos os elementos em um array.

// Selecione o único parâmetro obrigatório que temos que fornecer para esse método:

// Uma função que recebe um elemento.
// Alternativa correta! Certo! Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.