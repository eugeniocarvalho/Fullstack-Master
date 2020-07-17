// HOF de High order function

// HOF é uma função, que recebe outra função como parâmetro

const soma = (a, b) => a + b
const multiplica = (a, b) => a * b


// recebe uma função como patametro e executa na função calcula
const calcula = (op, a, b) => op(a, b)

//calcula a soma de 10 + 3
//passa a referência para a função e não a invocação da função
const c = calcula(soma, 10, 3)

console.log(c)

//HOF são funções que recebem funções ou que retornem funções
const selectOp = op => {
  const ops = {
    '+': soma,
    '*': multiplica
  }
  
  return ops[op]
}

//o selectOp ver qual simbolo foi dado como parâmetro 
//e retorna a referência correspondente
const d = calcula(selectOp('*'), 13, 4)

console.log(d)