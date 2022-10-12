const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12312312323",
    email:"andre@email.com",
    fones: ["11965181459", "11971826573"],
    dependetes: [
        {
            nome:"Sara Rodrigues",
            parentesco:"filha",
            dataNasc:"20/03/1995" },
        {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }    
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}
        `);
    }
}

// console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)