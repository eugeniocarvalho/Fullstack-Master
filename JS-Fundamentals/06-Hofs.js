// Existem algumas Hofs, que são aplcadas a vetores

const nums = [1, 2, 3, 4]

const testForEach = (value, index, vetor) => {
  console.log(value, index)
}

const returnForEach = nums.forEach(testForEach)
console.log('Retorno forEach', returnForEach)

const testForMap = (value, index, vetor) => {
  console.log(value, index)
  return value * 3
}

const returnForMap = nums.map(testForMap)
console.log('Retorno forMap', returnForMap)

const testForReduce = (previousValue, currentValue, currentIndex, vetor) => {
  console.log(previousValue, currentValue, currentIndex)
  return previousValue + currentValue
}

const returnForReduce = nums.reduce(testForReduce, 0)
console.log('Retorno ForReduce', returnForReduce)


const soma = nums
.map(a => a * 2)
.reduce((a, b) => a + b)

console.log(soma)


