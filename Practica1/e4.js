function mayormenor(arr) {
  let may = arr[0]
  let men = arr[0]
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] > may) {
      may = arr[j]
    }
    if (arr[j] < men) {
      men = arr[j]
    }
  }
  return { mayor: may, menor: men }
}

let obj3 = mayormenor([3,1,5,4,2])
console.log(obj3)
