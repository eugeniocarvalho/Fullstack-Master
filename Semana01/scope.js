// global scope
// local scope

const scopeGlobal = 1

const teste = function () {
  //scope 1
  const var0 = 10

  function teste2() {
    //scope 2
    const var1 = 20
    console.log(var0, var1)
  }

  if (var0 === 3) {
    //scope 3
    const scope3 = 123
  }

  // console.log(scope3) vai dar erro porque a variavel so é visivel dentro do if

  for (let i = 0; i < 5; i++)
    //scope 4  
    console.log(i)

  teste2()
}

teste()