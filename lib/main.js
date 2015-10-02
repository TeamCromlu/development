alert("Hola, digita tu nombre please")
console.log("saludos")

var $btn_tocame = $("#btn_tocame")
$btn_tocame.on('click', Saluda)


function Saluda(){
	var name= $("#txt_name").val()
	alert("Hola Bienvenido" + " " + name )
}

require('./about-me/code.js');
// hola('joel');