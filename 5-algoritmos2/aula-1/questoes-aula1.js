// QUESTÃO 1

//  Analisando a forma como a função juntaListas() faz a junção dos arrays em um só,
// é possível concluir que a comparação e ordenação feita pela função só funciona corretamente
// quando recebe dois arrays já ordenados.

// RESOLUÇÃO

// Alternativa correta! Ambas as listas são percorridas em paralelo e comparadas a partir do índice 0
//  do array. Confira o trecho abaixo, onde o laço while percorre ambas as listas e incrementa as variáveis
//  posicaoAtualLista1 e posicaoAtualLista2, avançando para os próximos índices:


while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista2[posicaoAtualLista2];
 
    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }
 
    atual++;
  }

  // QUESTÃO 2

  // Os valores guardados nas variáveis posicaoAtualLista1, posicaoAtualLista2, produtoAtualLista1 e
  // produtoAtualLista2 são, respectivamente: valor numérico referente ao índice atual da primeira lista 
  // (recebida pela função via parâmetro); valor numérico referente ao índice atual da segunda lista 
  // (recebida pela função via parâmetro); um objeto com as propriedades titulo e preco, referente ao 
  // elemento contido no índice atual da primeira lista; um objeto com as propriedades titulo e preco, 
  // referente ao elemento contido no índice atual da segunda lista.

  // RESOLUÇÃO 

  // Alternativa correta! É super importante sempre sabermos qual é o tipo de dado guardado nas variáveis
  //  que usamos em nosso código. Aqui, há uma distinção importante entre as variáveis que guardam o número
  // do índice de um array e o dado que está contido nesse índice.