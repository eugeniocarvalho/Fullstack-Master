const name = 'Eugênio Carvalho'
const num = 10

nameseparado = name.split(' ')
console.log(nameseparado)

console.log(nameseparado.join(' <--> '))

const str = `
opa
${name}
${num} + 10 = ${num + 10}
`
console.log(str)

const str2 = name + ' ' + str

console.log(str2)