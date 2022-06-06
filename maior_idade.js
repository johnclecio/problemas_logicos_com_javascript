
const prompt = require('prompt-sync')()

function main(){
  const n = Number(prompt('Digite total de idades: '))
  
  const vetor = Array(n)

  for (let i = 0; i < n; i++){
    vetor[i] = Number(prompt(`Digite sua Idade ${i}: `))
  }
 
  let posicao_maior = 0;
  let posicao_menor = 0;

  for (let i = 1; i < n; i++){
    if(vetor[i]> vetor[posicao_maior]){
      posicao_maior = 1
    }else if(vetor[i] < vetor[posicao_menor]){
      posicao_menor = 1
    }
  }

  console.log(`Maior Idade: ${vetor[posicao_maior]} (i: ${posicao_maior})`)
  
}

main()