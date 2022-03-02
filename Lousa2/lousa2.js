
const imprimir = (valor) => {
    document.getElementById("meuPrimeiroTeste").innerHTML = `O número ${valor} é ímpar`
}

const getImpar = (num, getImprimir) => {
    if (num % 2 === 1) {
        getImprimir(num)
    }
}


getImpar(97, imprimir)
