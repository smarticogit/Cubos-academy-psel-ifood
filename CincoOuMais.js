function solucao(precos) {
    //seu codigo aqui
    let menor = Math.min(...precos);
let soma = 0
let total= ""
for(let i = 0; i < precos.length; i++){
      soma += precos[i];
      }
if (precos.length >= 5) {
    total = soma-menor 
} else
total = soma
    console.log(total)


    