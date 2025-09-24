const promesa9 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("exito despues de 3 segundos")
  }, 3000)
})

promesa9.then(res => console.log(res))
