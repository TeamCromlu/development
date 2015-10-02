var str ="Hola mundo"
console.log("Saludos desde esta dependencia de code.js")
module.exports = function (name){
	console.log(str + ' ' + name);
}