//Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.

const v = [1, 2, 3, 4, 5]

const somatorio = (valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
}

const sumImpar = v.filter(function (item) {
  if (item % 2 !== 0)
    return item
}).reduce(somatorio)

console.log(sumImpar)