// O javascript de um modo geral funciona em single thread para fazer todas as tarefas que ele tem que executar, a mesma coisa no browser

const fs = require('fs')
const { rejects } = require('assert')

console.log('aaaa')

//isso vai pro event loop, ele chama um callback, dizendo se deu erro ou não, e acontece fora de ordem essa forma baseada em callbacks
fs.readFile('05-Hof.js', (err, content) => {
  if (!err)
    console.log(content.toString())
})

console.log('bbbb')

//outra forma é transformando a estrutura acima em uma promessa

console.log('cccc')

const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (!err)
        console.log(content.toString())
      else
        reject(err)
    })
  })
}

readFile('04-Functions.js')
  .then( content => {
    console.log(content)
  })

console.log('dddd')

// outra forma de assincronismo, que deixa mais facil o entendimento, é o async, await

//o async await, por baixo dos panos é uma promise

const run = async() => {
  return 111
}

run().then(value => {
  console.log(value)
})


const run2 = async() => {
  const content = await readFile('03-Tipos-variaveis.js')
  console.log(content)
  return 222
}

run2().then(value => {
  console.log(value)
})