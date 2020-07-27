//Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)

v = [1, 2, 2, 3, 3]

const quant = (total, valor) => {
  if (!total[valor])
    total[valor] = 0
  
  total[valor] += 1

  return total
}

const res = v.reduce(quant, {})
console.log(res)
