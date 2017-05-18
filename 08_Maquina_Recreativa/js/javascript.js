

function jugar() {
	var img1,  //imagen izq
	 	img2,  //imagen centro
	 	img3,  //imagen dere
	 	resul1, //resul comprobacion
	 	resul2, //resul compro
	 	resul3,	//resul compr0
	 	resul,	//resul total
	 	puntos,
	 	actual,
	 	ran1,  //nun aleatorio
	 	ran2,  //nun aleatorio
	 	ran3,  //nun aleatorio
	 	nim1,  //nun poner img1
	 	nim2,  //nun poner img2
	 	nim3;  //nun poner img3

	img1=document.getElementById("img-fresa");
	img2=document.getElementById("img-limon");
	img3=document.getElementById("img-sandia");
	ran1=Math.floor((Math.random() * 3) + 1);
	ran2=Math.floor((Math.random() * 3) + 1);
	ran3=Math.floor((Math.random() * 3) + 1);
	nim1=1;
	nim2=2;
	nim3=3;
	puntos=document.getElementById("puntos");
	actual=document.getElementById("actual");

	//PONER IMAGEN

	//FRESA

	if(nim1==ran1){
		img1.src = "img/fresa.png";
		resul1= +1;
	}
	if (nim1==ran2){
		img2.src = "img/fresa.png";
		resul2= +1;
	}
	if (nim1==ran3){
		img3.src = "img/fresa.png";
		resul3= +1;
	}

	//LIMON

	if(nim2==ran1){
		img1.src = "img/limon.png";
		resul1= +19;
	}
	if (nim2==ran2){
		img2.src = "img/limon.png";
		resul2= +19;
	}
	if (nim2==ran3){
		img3.src = "img/limon.png";
		resul3= +19;
	}

	//SANDIA

	if(nim3==ran1){
		img1.src = "img/sandia.png";
		resul1= +6;
	}
	if (nim3==ran2){
		img2.src = "img/sandia.png";
		resul2= +6;
	}
	if (nim3==ran3){
		img3.src = "img/sandia.png";
		resul3= +6;
	}
	resul= resul1+resul2+resul3;
	
	//PUNTOS

	if (resul==3){
		puntos.innerHTML = "+1000 ||";
		actual.innerHTML = "1000 || ";
	}

	if (resul==57){
		puntos.innerHTML = "+1000 ||";
		actual.innerHTML = "1000 ||";
	}

	if (resul==18){
		puntos.innerHTML = "+1000 ||";
		actual.innerHTML = "1000 ||";
	}

	if (resul==21){
		puntos.innerHTML = "+500 ||";
		actual.innerHTML = "500 ||";
	}

	if (resul==10){
		puntos.innerHTML = "+500 ||";
		actual.innerHTML = "500 ||";
	}

	if (resul==14){
		puntos.innerHTML = "+500 ||";
		actual.innerHTML = "500 ||";
	}

	if (resul==39){
		puntos.innerHTML = "+500 ||";
		actual.innerHTML = "500 ||";
	}

	if (resul==44){
		puntos.innerHTML = "+500 ||";
		actual.innerHTML = "500 ||";
	}

	if (resul==31){
		puntos.innerHTML = "+500 ||";
		actual.innerHTML = "500 ||";
	}
}

function cambiar1() {
	var img,
		ran,
		nim1,
		nim2,
		nim3;

	img=document.getElementById("img-fresa");
	ran=Math.floor((Math.random() * 3) + 1);
	nim1=1;
	nim2=2;
	nim3=3;

	if(nim1==ran){
		img.src = "img/fresa.png";
		resul1= +1;
	}
	if(nim2==ran){
		img.src = "img/limon.png";
		resul1= +19;
	}
	if(nim3==ran){
		img.src = "img/sandia.png";
		resul1= +6;
	}
}

function cambiar2() {
	var img1,
		ran1,
		nim1,
		nim2,
		nim3;

	img1=document.getElementById("img-limon");
	ran1=Math.floor((Math.random() * 3) + 1);
	nim1=1;
	nim2=2;
	nim3=3;

	if(nim1==ran1){
		img1.src = "img/fresa.png";
		resul1= +1;
	}
	if(nim2==ran1){
		img1.src = "img/limon.png";
		resul1= +19;
	}
	if(nim3==ran1){
		img1.src = "img/sandia.png";
		resul1= +6;
	}
}

function cambiar3() {
	var img1,
		ran1,
		nim1,
		nim2,
		nim3;

	img1=document.getElementById("img-sandia");
	ran1=Math.floor((Math.random() * 3) + 1);
	nim1=1;
	nim2=2;
	nim3=3;

	if(nim1==ran1){
		img1.src = "img/fresa.png";
		resul1= +1;
	}
	if(nim2==ran1){
		img1.src = "img/limon.png";
		resul1= +19;
	}
	if(nim3==ran1){
		img1.src = "img/sandia.png";
		resul1= +6;
	}
}

function reiniciar() {
	var puntos,
		actual;

	puntos=document.getElementById("puntos");
	actual=document.getElementById("actual");
	puntos.innerHTML += "0";
	actual.innerHTML += "0";

}