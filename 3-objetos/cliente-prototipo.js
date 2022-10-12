function cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
        this.depositar = function(valor){
            this.saldo += valor
        }
}
const andre = new cliente("Andre", "12345676576", "andre@email.com", 100)

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
   }
   const ju = new clientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200)

clientePoupanca.prototype.depositarPoup = function(valor){
 this.saldoPoup += valor
}

console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof clientePoupanca)
console.log(Function.prototype.isPrototypeOf(cliente))
console.log(cliente.constructor === Function)