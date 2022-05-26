
//VÍNCULO CON LA ETIQUETA MENÚ

var iconomenu= document.getElementById('iconomenu');
var menu = document.getElementById('menu');

//FUNCIONES MENÚ

function activar(){
    menu.classList.add("activarmenu");
}
//EVENTO MEÚ

iconomenu.addEventListener('click', activar);

//-------------------------------------------------------------