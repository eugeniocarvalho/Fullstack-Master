const soma = (a, b) => a + b
const multiplica = (a, b) => a * b

//ha outra maneira de exportar
//expostando individualmente
// export const soma = (a, b) => a + b
// export const multiplica = (a, b) => a * b

//ha essa maneira tambem
// export default

// isso serve pra deixar quais funções vao ser disponibilizada pro "meio externo"

module.exports = {
  soma: soma,
  multiplica: multiplica
}



/*
Quando temos o mesmo nome na variável e na key, podemos omitir a atribuição
module.exports = {
  soma, multiplica
}
*/