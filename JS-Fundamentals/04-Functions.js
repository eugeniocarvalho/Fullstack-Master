// maneira mais simples, utilizando a palavra reservada function
// esse modo é com hoisting, o ideal é manter as funções sempre mais
// acima de quando são chamadas

ola()

function ola() {
  console.log('Olá! 1')
}

ola()

// deixa o código mais organizado, sempre implementar antes o que vai usar, e depois invocar
function opa() {
  console.log('Opa!')
}

function ola2() {
  opa()
  console.log('Olá! 2')
}

ola2()

// quando o retorno da função depende exclusivamente dos valores de entradas,
// ela é uma função pura, a partir do momento que alguma coisa externa a ela,
// pode mudar o valor, ela deixa de ser uma função pura
// quanto mais pura, mais facil de testar

function multiplica(a, b) {
  return a * b
}

function dobra(num) {
  //isso é chamado de composição
  return multiplica(num, 2)
}

const num = dobra(2)

console.log(num)

// função nao pura

const i = 2

function dobra2(num) {
  return i + num * 2
}

console.log(dobra2(2))


// outro modo de fazer funções é com arrow functions

const arrowDivide = (a, b) => {
  return a / b
}

//quando so retorna algo, pode ser feita assim
const arrowResult = () => arrowDivide(45, 2)

console.log(arrowResult())
