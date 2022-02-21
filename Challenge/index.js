const base = Number(prompt("Digite o valor da base do triângulo em cm: "))
const altura = Number(prompt("Digite o valor da altura do triângulo em cm: "))

const area = (base, altura) => (base * altura) / 2

console.log(`O valor da área do triângulo em é ${area(base, altura)}cm`);