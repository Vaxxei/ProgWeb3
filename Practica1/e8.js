function ejecutarcb(cb) {
  setTimeout(cb, 2000)
}

ejecutarcb(function() {
  console.log("callback ejecutado despues de 2 segundos")
})
