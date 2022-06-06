var valorA = prompt("Informe o valor de A:");
		var valorB = prompt("Informe o valor de B:");
		var valorC = prompt("Informe o valor de C:");
		var coeficiente1;
		var coeficiente2;

		var delta = (valorB * valorB) - 4 * valorA * valorC;

		alert("Valor de Delta => " + delta );

		if(delta < 0){
		  alert("Para Delta negativo, não existem raízes reais.");  
		} else{
		  
		  alert("Para Delta positivo, raízes diferentes:");  
		  
		  coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
		  coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
		  
		  alert("x' = " + coeficiente1);
		  alert("x'' = " + coeficiente2);
		}