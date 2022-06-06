
let nota1
let nota2



nota1 = prompt("Digite sua primeira nota: ");
nota1= eval (nota1);
nota2 = prompt("Digite sua segunda nota:  ");
nota2= eval (nota2);

let media = (nota1 + nota2)/2;

if(media >= 7){
   alert(" Voce está Aprovado");
}else {
  alert("Voce está  Reprovado");
}

