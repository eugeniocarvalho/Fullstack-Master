//A tipagem acontece por inferencia, ou seja, quando você 
//atribui um valor a uma variável, e é dinamica

//let é a forma mais indicada para se declarar uma váriavel
let a = 10
console.log(a)

a = 'Eugênio'
console.log(a)

console.log(b)
var b = 20 // hoisting

//A diferença do const pro let, é que ele nao permite outra atribuição sobre ele
const c = 30

//Em tipo objeto, nos conseguimos manipular o que tem dentro,
//nos nao conseguimos fazer uma atribuição direta
const d = {}

d.a = 10

console.log(d)

//Geralmente construimos algumas variaveis basicas, pra construir outras mais complexas
const firstName = 'Eugênio'
const secondName = 'Carvalho'

const name = firstName + ' ' + secondName
console.log(name)
