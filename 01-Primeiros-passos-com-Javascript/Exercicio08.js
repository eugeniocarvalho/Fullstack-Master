/*
Uma função é chamada da seguinte forma:

calculadora(10, '+', 20)

crie o corpo da função de forma que ela realize as 4 operações aritméticas*/

const opcao = (op) => {
  a = [{
    '+': soma,
    '-': subtracao,
    '*': multiplicacao,
    '/': divisao
  }]

  return a[op]
}

const calculadora = (a, op, b) => {
  if ( op === '+')
    return a + b
  
  if (op === '-')
    return a - b
  
  if (op === '*')
    return a * b
  
  if (op === '/')
    return a / b
}

const res = calculadora(1, '+', 3)
console.log(res)