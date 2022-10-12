let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)


// Para chamar um método não pode esquecer os parênteses (), exemplo:  toUpperCase, errado / toUpperCase(), certo.

// Você pode conferir a lista completa de métodos de string na documentação do MDN.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#methods

// Selecione a alternativa que representa a diferença entre o método map() e forEach():

//  O retorno do método.
// Alternativa correta! Certo! Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.
