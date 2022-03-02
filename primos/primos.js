const x = prompt("Digite um número:")
let valor = 0


for(let c = 2; c < x; c++) {
    if(x % c === 0){
        valor++
    } 
}
valor > 0 ? console.log("Não é primo.") : console.log("É primo.");