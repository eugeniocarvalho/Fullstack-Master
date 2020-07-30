// closure é uma forma da uma variavel lembrar de onde ela foi executada
function func1(initial) {
  let count = initial

  return function () {
    return ++count
  }
}

const func = func1(10)
console.log(func())
console.log(func())


const funcB = func1(20)
console.log(funcB())
console.log(funcB())

console.log(funcB(), func())

console.log(func1(10).count)

function animal(name) {
  let count = 0
  return {
    getCount: function () {
      return count
    },

    getName: function () {
      return name
    },

    increment: function () {
      return ++count
    }
  }
}

const gato = animal('gato')

gato.increment()

console.log(gato.getCount(), gato.getName())

const cachorro = animal('cachorro')

cachorro.increment()
cachorro.increment()

console.log(cachorro.getCount(), cachorro.getName())
