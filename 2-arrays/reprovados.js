const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter( (aluno,indice) => notas [indice] < 5 )

console.log(`reprovados: ${reprovados}`)

// O método filter exige que o primmeiro paramêtro seja uma função, nós chamamos de função callback.
// filter é um metodo que funciona como true ou false 

// Selecione a alternativa que representa o que deve ser retornado da função callback para que o método filter funcione:
// Um booleano.
// Alternativa correta! Certo! Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.