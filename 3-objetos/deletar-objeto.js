const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

// delete objPersonagem.aliado

// console.log(objPersonagem.aliado) //undefined

// Também é possível utilizar a notação de colchetes:Também é possível utilizar a notação de colchetes:

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
console.log(objPersonagem) // { nome: 'Gandalf', classe: 'mago', nivel: '20' }