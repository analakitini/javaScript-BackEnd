// exemplo 1:

// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// console.log(arrayVazia[0])
// console.log(arrayVazia[1])
// console.log(arrayVazia[2])

// terminal:
// 3
// undefined
// undefined
// undefined

// exemplo 2:

const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)

// terminal:
// 3
// [ <3 empty items>, 50 ]
// 4

// O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50).
// Chamamos este tipo de estrutura de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.

