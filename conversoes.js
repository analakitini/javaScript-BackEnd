// tipo de dado
// booleanos 

// CONVERSÃO IMPLÍCITA (permite que a gente converta um tipo de dado em outro) 
// const numero = 456;
// const numeroString = "456";
// "=" irá atribuir um valor para variável, "==" irá comparar só o que está dentro da variável, "===" irá comparar o valor da variável e o tipo da variável
// console.log (numero == numeroString) // retorna true
// console.log (numero === numeroString) // retorna false
// console.log(numero + numeroString) // aqui ele irá concatenar e não irá somar os dois valores.

// CONVERSÃO EXPLÍCITA

// Number (transforma uma string em um número)

// String (transformar number em uma string)

// EXEMPLO 1

// const numero = 456;
// const numeroString = "456";

// console.log(numero + Number(numeroString))
 
// EXEMPLO 2

// const numero = 456;
// const numeroString = Number("456");

// console.log(numero + Number(numeroString))

// EXEMPLO 3 (dará erro NaN)

// const numero = 456;
// const numeroString = Number("456a");

// console.log(numero + Number(numeroString))

// STRING exemplos

// EXEMPLO 1

// let telefone = 12341234;
// console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// EXEMPLO 2

// Outra opção para transformarmos um valor em String é usar o toString():

// let telefone = 12341234;
// console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

// EXEMPLO 3

// let usuarioConectado = false;
// console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
// usuarioConectado = true;
// console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// NUMBER exemplos

// EXEMPLO 1

// Vamos fazer alguns exemplos de conversão de textos e booleanos através de Number():

// Vamos calcular a área de um retângulo
// let largura = "10";
// let altura = "5";
// console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

// EXEMPLO 2

// Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:

// let largura = "10";
// let altura = "5";
// console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

// EXEMPLO 3

// let meuNome = "leonardo";
// console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
// console.log( + meuNome); // a conversão também retornará NaN

// EXEMPLO 4

// let usuarioConectado = false;
// console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
// usuarioConectado = true;
// console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

// Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita.
// Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.