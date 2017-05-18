function crearVariables() {
	// Creacion de variables precio
	var precio,
		res;

	res = document.getElementById('resultado');
	res.innerHTML = "La variables vale" + precio + "<br>";

	//Tomamos la variable de nuevo
	precio = 25;
	precio = precio + 25;
	res.innerHTML += "La variable vale" + precio + "<br>" + "Y el doble es " + (precio*2) + "<br>";
}