/*Em linguagens síncronas é comum a função sleep(tempo) assim, pode-se por exemplo escrever algo no console, pausar o script por x tempo e escrever algo mais algo como:

console.log('Olá!')

sleep(2000)

console.log('Depois de 2segs')

simule o sleep de maneira correta em Javascript (sem travar a thread principal) utilizando promises e uma função async/await
*/

const sleeping = (time) => new Promise((resolve) => {
  setTimeout(resolve, time)
})

const sleep = async () => {
  console.log('Olá!')

  await sleeping(2000)

  console.log('Depois de 2segs')
}

sleep()