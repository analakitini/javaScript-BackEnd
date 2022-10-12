// primeira maneira que pode ser feito:

const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
   }

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)

// segunda maneira que pode ser feito: com o

// const arrayNums = [1, 2, 3, 4]

// function multiplicaPorDez(num) {
//     return num * 10
//    }
  
// const arraySomada = arrayNums.map(num => num * 10)

// console.log(arraySomada)   

// Ambos os casos de uso são válidos; as funções externas permitem reaproveitamento de código, mas há vários momentos em que isso não será necessário.

