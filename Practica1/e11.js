const promesa11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("primer paso")
  }, 1000)
})

promesa11
  .then(res => {
    console.log(res)
    return "segundo paso"
  })
  .then(res2 => {
    console.log(res2)
    return "tercer paso"
  })
  .then(res3 => console.log(res3))
