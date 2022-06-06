
const vetor = Array(2)
for(let i = 1; i <= 2; i++){
  vetor[i] = Number(prompt(`Digite o valor:  ${i}: `))

}
 let resultado = vetor[1]  % 2 ===0? 'par':'impar'; 
 let resultado1 = vetor[2] % 2 ===0? 'par':'impar'; 
    alert(`número ${vetor[1]} é ${resultado} `)
    alert(`número ${vetor[2]} é ${resultado1} `)
