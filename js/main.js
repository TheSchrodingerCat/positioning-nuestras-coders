
var miSeccion = document.getElementById("contenedor");

var arrayDivs = new Array(6)
for (i=0 ; i<6 ; i++){
	arrayDivs[i] = document.createElement("div");
	arrayDivs[i].setAttribute("class","fotos");
	arrayDivs[i].setAttribute("id","caja" + i.toString());

	miSeccion.appendChild(arrayDivs[i]);
}