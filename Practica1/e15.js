function sumaCb(a, b, cb) {
  cb(a + b)
}

function sumaPromesa(a, b) {
  return new Promise((resolve, reject) => {
    sumaCb(a, b, (r) => {
      resolve(r)
    })
  })
}

sumaPromesa(2, 3).then(res => console.log(res)) // 5
