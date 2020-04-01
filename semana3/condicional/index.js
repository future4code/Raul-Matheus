

/*Exercicio 1*/
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
    const numero = Number(respostaDoUsuario)
    
    if(numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    /*Realiza se passou ou não.O numeros pares ou múltiplos de 2 significa
    "Passou no teste". Impares são para "Não passou no teste"*/

    //*Exercicio 2
    let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    // break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*Respostas
a.Serve para definir o preço das frutas escolhidas
b.O preço da fruta  macã  é  R$  2.25
c.Pagaria ao todo R$ 24.55
d. Uncaught SyntaxError: Invalid or unexpected token, ou seja, daria invalido*/

//Exercicio 3
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)
/*Resposta:
Ao meu ver é porque console.log(mensagem) está fora do escopo pai e filho, se tornando
um escopo global, não podendo usar as informações do escopo que está entre chaves.



    