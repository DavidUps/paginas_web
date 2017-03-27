function alerta(){
	alert("Se ha cargado la página.");
}

function bienNarcos(){
	var img, boton, acierto;
	alert("BIEN.");
	img = document.getElementById("nacos");
	document.getElementById("narcos").src="img/si.jpg";
	boton = document.getElementById("serie1");
	document.getElementById("serie1").style.backgroundColor="green";
	acierto = document.getElementById("acierto");
	acierto.innerHTML += "+1";
}

function malNarcos(){
	var img, boton, acierto;
	alert("MAL.");
	img = document.getElementById("nacos");
	document.getElementById("narcos").src="img/no.jpg";
	boton = document.getElementById("serie1");
	document.getElementById("serie1").style.backgroundColor="red";
	acierto = document.getElementById("acierto");
	acierto.innerHTML += "-1";
}

function bienVikingos(){
	var img, boton, acierto;
	alert("BIEN.");
	img= document.getElementById("vikingos");
	document.getElementById("vikingos").src="img/si.jpg";
	boton = document.getElementById("serie2");
	document.getElementById("serie2").style.backgroundColor="green";
	acierto = document.getElementById("acierto");
	acierto.innerHTML += "+1";
}

function malVikingos() {
	var img, boton, acierto;
	alert("BIEN.");
	img= document.getElementById("vikingos");
	document.getElementById("vikingos").src="img/no.jpg";
	boton = document.getElementById("serie");
	document.getElementById("serie2").style.backgroundColor="red";
	acierto = document.getElementById("acierto");
	acierto.innerHTML += "-1";
}