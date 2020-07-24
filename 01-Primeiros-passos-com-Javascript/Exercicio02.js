//Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

const v = [2, 3, 4, 6]

const somatorio = (valorAnterior, valorAtual, indexAtual, vetor) => {
  return valorAnterior + valorAtual
}

const sumPar = v.filter(function(item) {
  return item % 2 === 0
}).reduce(somatorio)
console.log(sumPar)