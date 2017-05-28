
var miSeccion = document.getElementById("contenedor");

var miDivTexto, miTexto;

var arrayDivs = new Array(6)
for (i=0 ; i<6 ; i++){
	arrayDivs[i] = document.createElement("div");
	arrayDivs[i].setAttribute("class","fotos");
	arrayDivs[i].setAttribute("id","caja" + i.toString());

	arrayDivs[i].style.position = "relative";
	arrayDivs[i].style.backgroundSize = "cover";
	arrayDivs[i].style.boxSizing = "border-box";

	miDivTexto = document.createElement("div");
	miDivTexto.setAttribute("class","text");
	miTexto = document.createTextNode("Nombre Apellido");
	miDivTexto.appendChild(miTexto);

	arrayDivs[i].appendChild(miDivTexto);
	miSeccion.appendChild(arrayDivs[i]);
}

