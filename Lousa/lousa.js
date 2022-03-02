// let novaLista = []
// let array = [1, 2, 3, 4]
// let i = 0
//  while (i<array.length) {
//      let novoIten = "O elemento " + i.toString() + " é "
//      novoIten += array[i].toString()
//      novaLista.push(novoIten)
//      i++
//  }

//  console.log(novaLista);

// ------------------------------------------------------------------------------------------------

// let models = []

// for(let i = 0; i <array.length; i++) {
//     if(array.indexOf(array[i]) === i) {
//         models.push(array[i])
//     }
// }

// console.log(models);

// ------------------------------------------------------------------------------------------------

let genero = undefined

while(genero == undefined) {

    genero = prompt('Qual o seu genero? MA) masculino FE)feminino')
    switch (genero) {
        case "MA":
            genero = "Masculino"
            break;
        case "FE":
            genero = "Feminino"
            break;
    
        default:
            genero = undefined
            break;
    }
}

console.log(genero);

