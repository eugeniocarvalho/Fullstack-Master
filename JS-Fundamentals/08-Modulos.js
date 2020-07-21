//Outra forma é usando o import mas tem que ser declarado no inicio
// import math from './math'

//quando fazemos aquele export especifico, podemos fazer o import so de uma função a vantagem é que reduz o tamanho do projeto final
// import { soma } from './math'

//Têm duas maneiras de importar, uma é a que o node usa, chamada de commonjs
const math = require('./math')

console.log(math)

// se quisesse usar o soma, faria o seguinte
const math2 = require('./math')
const soma2 = math2.soma

console.log(soma2(2, 3))

//destruturing assignment
const math3 = require('./math')
const { multiplica } = math3

console.log(multiplica(3, 5))

// serve pra deixar o codigo menos verboso
const {soma} = require('./math')

console.log(soma(3, 19))
