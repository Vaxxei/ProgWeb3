const promesa13 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("inicio")
  }, 1000)
})
promesa13
  .then(res => {
    console.log(res)
    return "siguiente"
  })
  .then(res2 => {
    console.log(res2)
    return "final"
  })
  .then(res3 => console.log(res3))
async function ejecutar13() {
  let r1 = await promesa13
  console.log(r1)
  console.log("siguiente")
  console.log("final")
}

ejecutar13()
