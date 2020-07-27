/*
Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:

const soma = (num1, num2) => num1+num2

const calculadoraFn = (....) => ….

calculadoraFn(10, soma, 20)*/

const soma = (a, b) => a + b
const subtracao = (a, b) => a - b
const multiplicacao = (a, b) => a * b
const divisao = (a, b) => a / b

const calculadora = (op, a, b) => op(a,b)

const res = calculadora(soma, 2, 4)
console.log(res)