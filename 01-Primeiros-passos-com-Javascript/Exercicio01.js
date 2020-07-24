//Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

const v = [1, 2, 3]

const somatorio = (valorAnterior, valorAtual, indexAtual, vetor) => {
  return valorAnterior + valorAtual
}

const sum = v.reduce(somatorio)
console.log(sum)