const cap = Array(4);
for(let i = 1; i <= 4; i++){
  cap[i] = Number(prompt(`Digite o valor a receber:  ${i}: `));

}
const car = Array(4);
for(let i = 1; i <= 4; i++){
  car[i] = Number(prompt(`Digite o valor:  ${i}: `));

}

 d1 = cap[1]- car[1];
 d2 = cap[2]- car[2];
 d3 = cap[3]- car[3];
 d4 = cap[4]- car[4];

  console.log("a diferença é :"  + d1 );
   console.log("a diferença é :"  + d2);
    console.log("a diferença é :"  + d3);
     console.log("a diferença é :"  + d4);