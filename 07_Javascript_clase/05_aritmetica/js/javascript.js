function CalcularRango () {
	var edad,
		res,
		numeroEdad;

	res = document.getElementById('resultado');
	edad = document.getElementById('edadActual');
	numeroEdad = parseInt(edad.value);
	if((numeroEdad >=0) && (numeroEdad<=12))
		res.innerHTML = "En la infancia";
	else
		if((numeroEdad>=13) && (numeroEdad <=17))
			res.innerHTML = "En la adolescencia";
		else
			if ((numeroEdad>=18) && (numeroEdad <=30))
				res.innerHTML = "En la edad adulta";
			else
				res.innerHTML = "En la caja de pino";
}

function CalcularEdad () {
	
	var diaActual,
		mesAcutal,
		anoActual,
		diaNacimiento,
		mesNacimiento,
		anoNacimiento,
		edad,
		res;

	diaActual = parseInt(document.getElementById('diaActual').value);
	mesActual = parseInt(document.getElementById('mesActual').value);
	anoActual = parseInt(document.getElementById('anoActual').value);
	
	diaNacimiento = parseInt(document.getElementById('diaNacimiento').value);
	mesNacimiento = parseInt(document.getElementById('mesNacimiento').value);
	anoNacimiento = parseInt(document.getElementById('anoNacimiento').value);
	
	if((mesActual > mesNacimiento) || (mesActual == mesNacimiento) && (diaActual >= diaNacimiento))
		edad = (anoActual - anoNacimiento);
	else
		edad = (anoActual - anoNacimiento) -1;

	res = document.getElementById('resultadoEdad');
	res.innerHTML = "La edad es " + edad + " años";
}

function CalcularDiaSiguiente(){

	var diaActual,
		mesAcutal,
		anoActual,
		res;

	diaActual = parseInt(document.getElementById('diaAct').value);
	mesActual = parseInt(document.getElementById('mesAct').value);
	anoActual = parseInt(document.getElementById('anoAct').value);

	//Comprobar los casos en que el dia es el último del mes

	if((diaActual == 30) && ((mesAcutal == 4) || (mesAcutal == 6) || (mesAcutal == 9) || (mesAcutal == 11))){
		diaActual =  1;
		mesActual = mesAcutal + 1;

	}
	else
		if((diaActual == 31) && ((mesAcutal == 1) || (mesAcutal == 3) || (mesAcutal == 5) || (mesAcutal == 7) || (mesAcutal == 8) || (mesAcutal == 10))){
			diaActual =  1;
			mesActual = mesAcutal + 1;
		}
		else
			if((diaActual == 31) && (mesActual==12)){
				diaActual = 1;
				mesActual = 1;
				anoActual = anoActual +1;
			}
			else
				if((diaActual==29) && (mesActual==2) && ((anoActual%4)==0)){
					diaActual = 1; 
					mesActual = mesActual +1;
				}
				else
					if((diaActual==28) && (mesActual==2) && ((anoActual%4)==0)){
						diaActual = 1; 
						mesActual = mesActual +1;
					}
					else
						diaActual = diaActual +1;
					
	res = document.getElementById('resultadoAct');
	res.innerHTML = "El dia siguiente es " + diaActual + "/" + mesActual + "/" + anoActual;
}
