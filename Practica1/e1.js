function contarvoc(cad) {
  let a = 0, e = 0, i = 0, o = 0, u = 0
  for (let j = 0; j < cad.length; j++) {
    let c = cad[j].toLowerCase()
    if (c === "a") a++
    if (c === "e") e++
    if (c === "i") i++
    if (c === "o") o++
    if (c === "u") u++
  }
  return { a, e, i, o, u }
}

let obj1 = contarvoc("euforia")
console.log(obj1)
