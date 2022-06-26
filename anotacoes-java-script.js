//Vemos um dos métodos de string nativos do JavaScript em ação, o toLowerCase() que converte todos os 
//caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// Outro exemplo: qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome.
//A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

// Você pode conferir a lista completa de métodos de string do MDN (são vários), com a descrição de cada um, e praticar com os exemplos.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos