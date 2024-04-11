const prompt = require("prompt-sync")();

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
  return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
  return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    return v1 / v2
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1 * v2
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    return Math.sqrt(v1);
}

function menu() {
  console.log("----------------------------------------")
  console.log("1. Soma")
  console.log("2. Subtração")
  console.log("3. Divisão")
  console.log("4. Multiplicação")
  console.log("5. Raiz quadrada")
  console.log("6. Sair")
  console.log("----------------------------------------")
}

while (true) {
  menu()
  let escolha = Number(prompt("Digite a escolha:"))
  if (escolha == 1) {
      n1 = Number(prompt("Digite o 1° Número: "))
      n2 = Number(prompt("Digite o 2° Número: "))
      console.log(sum(n1,n2))
  } else if (escolha == 2) {
      n1 = Number(prompt("Digite o 1° Número: "))
      n2 = Number(prompt("Digite o 2° Número: "))
      console.log(sub(n1,n2))
  } else if (escolha == 3) {
      n1 = Number(prompt("Digite o 1° Número: "))
      n2 = Number(prompt("Digite o 2° Número: "))
      console.log(div(n1,n2))
  } else if (escolha == 4) {
      n1 = Number(prompt("Digite o 1° Número: "))
      n2 = Number(prompt("Digite o 2° Número: "))
      console.log(mult(n1,n2))
  } else if (escolha == 5) {
      n1 = Number(prompt("Digite o Número: "))
      console.log(square(n1))
  } else {
      break
  }

}