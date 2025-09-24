function espalin(cad) {
  let inv = ""
  for (let j = cad.length - 1; j >= 0; j--) {
    inv += cad[j]
  }
  if (cad === inv) {
    return true
  } else {
    return false
  }
}

console.log(espalin("oruro"))
console.log(espalin("hola"))
