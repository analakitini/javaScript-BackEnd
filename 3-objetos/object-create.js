// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20"
//    }
   
//    const objPersonagem2 = objPersonagem
//    objPersonagem2.nome = "Gandalf, o Cinzento"
   
//    console.log(objPersonagem.nome) //Gandalf, o Cinzento
//    console.log(objPersonagem2.nome) //Gandalf, o Cinzento

// Como podemos contornar esse comportamento quando criamos objetos?
// Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento