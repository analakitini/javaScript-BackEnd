// const numero; // errado
// const numero = 0; // certo (atribuimos um valor a const)

// erro: SyntaxError: Missing initializer in const declaration

// console.log(numero // errado
// console.log(numero) // certo (fechamos os parênteses)

// erro: SyntaxError: missing ) after argument list

const minhaVar = "oi"; // declaramos a variável
console.log(minhaVar); // certo

// erro: ReferenceError: minhaVar is not defined 
// console.log(minhaVar); // errado (temos que declarar a variável)

// ALGUNS TIPOS DE ERROS 

// RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

// SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

// IMPORTANTE 

// Além do tipo de erro, o terminal também vai dar outras informações, como o nome do arquivo e linha onde foi detectado o erro. Muitas vezes isso já basta para identificar e corrigir, mas existem também casos onde o erro não é detectado pelo JavaScript na linha onde o código é declarado, por exemplo, mas onde ele é executado. Por isso é importante praticar sempre a leitura dos erros e da stacktrace e nunca pular esta etapa.