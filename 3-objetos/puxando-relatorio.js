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

let relatorio="";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente [info] === "function")
    {
        continue
    }else{
        relatorio += ` 
        ${info} ==> ${cliente [info]}
        `
    }
}

console.log(relatorio)