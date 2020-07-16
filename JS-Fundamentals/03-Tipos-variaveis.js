//int, double
const num = 10.1

//string
const str = `Meu número é ${num + 1}`
console.log(str)

// objeto
const obj = {
  nome: 'Eugênio Freire',
  cidade: {
    nome: 'Ibiapina',
    uf: 'CE'
  }
}

//modos de acesso ao objeto
console.log(obj)
console.log(obj.nome)

const key = 'cidade'
const key2 = 'nome'

console.log(obj[key])

//vetor
const array = [1, 2, 3]
console.log(array[1])

const toInt = parseInt

console.log(toInt('10') + 1)
