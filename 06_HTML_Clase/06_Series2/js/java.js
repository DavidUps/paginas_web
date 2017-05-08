
function bienNarcos(narcos, serie1){
	var img,
            p1, /*Boton*/
            p2, /*Respuesta*/
            numeroAciertos;
	p1 = document.getElementById(serie1);
        p1.style.color = "green";
        img = document.getElementById(narcos);
        img.src = "img/si.jpg";
        p2 = document.getElementById('idAciertos');
        numeroAciertos = parseInt(p2.innerHTML);
        numeroAciertos = numeroAciertos + 1;
        p2.innerHTML = numeroAciertos;

}

function malNarcos(narcos, serie1){
	var img,
            p1, /*Boton*/
            p2, /*Respuesta*/
            numeroFallos;
	p1 = document.getElementById(serie1);
        p1.style.color = "red";
        img = document.getElementById(narcos);
        img.src = "img/no.jpg";
        p2 = document.getElementById('idFallos');
        numeroFallos = parseInt(p2.innerHTML);
        numeroFallos = numeroFallos + 1;
        p2.innerHTML = numeroFallos;
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
