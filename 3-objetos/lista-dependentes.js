const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12312312323",
    email:"andre@email.com",
    fones: ["11965181459", "11971826573"],
    dependetes: [{
        nome:"Sara Rodrigues",
        parentesco:"filha",
        dataNasc:"20/03/1995"
    }]

}

cliente.dependetes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependetes.filter(dependete => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova[0])