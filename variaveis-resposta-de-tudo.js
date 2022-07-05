// AULA 02 CAP-07
var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

// RESPOSTA CORRETA (acertei)

// 3.14 42 29 e 3.14 29 3.14.
// Alternativa correta! Muito bem! Variáveis declaradas com var ou let podem ser reatribuídas. Porém, uma variável declarada com let só pode ser usada no mesmo escopo em que está definida. No caso da declaração const, significa que a variável sempre terá uma referência ao mesmo objeto ou valor primitivo, porque essa referência não pode ser alterada.
// A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.

// AULA 02 CAP-08

// Ao declararmos uma variável como const ela deve obrigatoriamente receber um valor: const taxaComissao = 0.25;

// Ao declararmos let, ao contrário, podemos apenas declarar a variável, sem atribuir nenhum valor. Além disso, o valor inicial pode ser modificado depois:

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100