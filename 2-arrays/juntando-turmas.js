const salaDePython = ['Melissa', 'Helena', 'Rodrigo']

const salaDeJavaScript = ['Ju', 'Leo', 'Raquel']

const salasUnificadas = salaDePython.concat(salaDeJavaScript)

console.log(salasUnificadas)

// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada.
// Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.