//VÍNCULO CON LA ETIQUETA VENTANA
var iconventana= document.getElementById('iconventana');
var ventana = document.getElementById('ventana');

//FUNCIONES VENTANA

function activar(){
    ventana.classList.add("activarventana");
}
//EVENTO VENTANA

iconventana.addEventListener('click', activar);