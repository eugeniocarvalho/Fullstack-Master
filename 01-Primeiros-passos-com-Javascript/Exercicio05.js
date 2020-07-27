//Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)

const v = [1, 1, 2, 3, 4, 4, 5, 6, 6, 6, 8, 8, 9]

const apenasum = (total, valor) => {
  if (!total[valor])
    total[valor] = {
      value: valor,
      occur: 0
    }

  total[valor].occur += 1

  return total
}

const quant = v.reduce(apenasum, {})
const keys = Object.keys(quant)
const unique = keys.filter(key => quant[key].occur === 1).map( val => quant[val].value)

console.log(unique)