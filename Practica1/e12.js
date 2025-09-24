// con callbacks
function paso1(cb) {
  setTimeout(() => cb("paso 1 listo"), 1000)
}
function paso2(cb) {
  setTimeout(() => cb("paso 2 listo"), 1000)
}

paso1(res1 => {
  console.log(res1)
  paso2(res2 => {
    console.log(res2)
  })
})

// con promesas clásicas
const paso1p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("paso 1 listo"), 1000)
})

const paso2p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("paso 2 listo"), 1000)
})

async function ejecutar12() {
  let r1 = await paso1p
  console.log(r1)
  let r2 = await paso2p
  console.log(r2)
}

ejecutar12()
