
var miSeccion = document.getElementById("contenedor");

/*var miDiv = document.createElement("div");
miDiv.setAttribute("id","sub-contenedor");
miSeccion.appendChild(miDiv);*/

var arrayDivs = new Array(6)
for (i=0 ; i<6 ; i++){
	arrayDivs[i] = document.createElement("div");
	arrayDivs[i].setAttribute("class","fotos");
	arrayDivs[i].setAttribute("id","caja" + i.toString());

	arrayDivs[i].style.position = "relative";
	arrayDivs[i].style.backgroundSize = "cover";
	arrayDivs[i].style.boxSizing = "border-box";

	miSeccion.appendChild(arrayDivs[i]);
}