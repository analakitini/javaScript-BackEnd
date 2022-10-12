// parâmetros de função, serve para função receber informações que são necesserias para ela executar corretamente
             //2      //2 
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log (soma(2, 2))
console.log (soma(245, 20))
console.log (soma(-500, 60))

function multiplica(numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplica(soma(4, 5), soma(3,3)))
console.log(multiplica(2, 5))
console.log(multiplica(3, 15))
console.log(multiplica(25, 5))

// BOA PRÁTICA, passar poucos argumentos para função, se ela estiver grande provavelmento você consegue passar ela em várias funções menores, ficará mais fácil de entender e dar manutencção no código

// outros exemplos 

// 1) Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.

function cumprimentar() {
    console.log('oi gente!')
   }
   
   cumprimentar()

   // 2) Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada.

   function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Ana')
   cumprimentaPessoa('Laura')
   cumprimentaPessoa('Clara')

   // 3) Função com retorno, sem parâmetro: É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas.

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
