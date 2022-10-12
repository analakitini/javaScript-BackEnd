const arrayNomes = ['Ana', 'Ju', 'Leo', 'Paula']

function imprimeNomes(nome){
    console.log(nome)
}

arrayNomes.forEach(imprimeNomes); 


// o foreach só vai funcionar se dentro dentre tiver uma função, ele não funciona se colocarmos um array dentro dele.


// Outra forma de utilizar o método forEach() é declarar a função ao mesmo tempo em que utilizamos o comando. Confira o algoritmo a seguir:

// const arrayNomes = ['Ana', 'Ju', 'Leo', 'Paula']
// arrayNomes.forEach(function imprimeNomes(nome){
//     console.log(nome)
// });

// Mais sobre foreach 
// https://blog.betrybe.com/javascript/javascript-foreach/

// O termo callback se refere à função que é “chamada de volta” dentro de outra função.