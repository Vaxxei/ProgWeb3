function invertircad(cad) {
  let inv = ""
  for (let j = cad.length - 1; j >= 0; j--) {
    inv += cad[j]
  }
  return inv
}

let cad1 = invertircad("abcd")
console.log(cad1)
