(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var str ="Hola mundo"
console.log("Saludos desde esta dependencia de code.js")
module.exports = function (name){
	console.log(str + ' ' + name);
}
},{}],2:[function(require,module,exports){
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
},{"./about-me/code.js":1}]},{},[2]);
