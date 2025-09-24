function tarea16() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tarea terminada")
    }, 1000)
  })
}

tarea16().then(res => console.log(res))

async function ejecutar16() {
  let r = await tarea16()
  console.log(r)
}

ejecutar16()
