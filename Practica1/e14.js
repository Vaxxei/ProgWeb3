const promesa14 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resultado de la promesa")
  }, 1000)
})

function usarCallback(cb) {
  promesa14.then(res => cb(res))
}

usarCallback(r => console.log(r))
