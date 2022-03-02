let precoReais = [5, 7, 10, 45, 20]

let stringado = precoReais.map((array, indice) => {
    return `O elemento ${indice} é ${array}`
})

console.log(stringado);

// -------------------------------------------------------------------------------------------

const toFrase = (array, indice) => {
    return `O elemento ${indice} é ${array}`
}

let stringado = precoReais.map(toFrase)

console.log(stringado);