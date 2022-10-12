const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12312312323",
    email:"andre@email.com",
    fones: ["11965181459", "11971826573"]
}

cliente.dependetes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependetes.nome = "Sara Rodrigues"

console.log(cliente)