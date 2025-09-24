function separarnum(arr) {
  let pares = []
  let impares = []
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
      pares.push(arr[j])
    } else {
      impares.push(arr[j])
    }
  }
  return { pares: pares, impares: impares }
}

let obj2 = separarnum([1,2,3,4,5])
console.log(obj2)
