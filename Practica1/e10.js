function tareaCb(cb) {
  setTimeout(() => cb("hecho con callback"), 1000)
}
tareaCb(res => console.log(res))

const promesa10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hecho con promesa")
  }, 1000)
})

promesa10.then(res => console.log(res))

/*Un callback se usa cuando la tarea es sencilla y solo necesitas ejecutar una función después de otra, por ejemplo con un setTimeout o una operación rápida. En cambio, una promesa se usa cuando la operación asíncrona es más compleja, cuando necesitas encadenar varios pasos en orden o manejar errores de manera clara*/
