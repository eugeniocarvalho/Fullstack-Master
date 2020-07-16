const num = 10.1

const str = `Meu número é ${num + 1}`
console.log(str)

const obj = {
  nome: 'Eugênio Freire',
  cidade: {
    nome: 'Ibiapina',
    uf: 'CE'
  }
}

console.log(obj)
console.log(obj.nome)

const key = 'cidade'
const key2 = 'nome'

console.log(obj[key])

const array = [1, 2, 3]
console.log(array[1])

const toInt = parseInt

console.log(toInt('10') + 1)
