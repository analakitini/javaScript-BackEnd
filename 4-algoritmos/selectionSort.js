const livros = require('./listaLivros');
const menorValor = require('./menorValor');

         //1
for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log('Livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor])

    livros[atual] = livroMenorPreco
    console.log('posição atual', atual)
    livros[menor] = livroAtual 
}

console.log(livros)