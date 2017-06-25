var titulo = document.querySelector('#titulo');
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll('.paciente');

console.log(paciente);


var tdPeso = paciente.querySelector('.info-peso');
var tdAltura = paciente.querySelector('.info-altura')

tdPeso.textContent = -2;

var pesoEhValido = true;
var alturaEhValido = true;

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var calculoIMC = peso / (altura * 2);


if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdPeso.textContent = "O peso é inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida");
    alturaEhValido = false;
    tdAltura.textContent = "A altura é inválida";
}

if (alturaEhValido && pesoEhValido) {
    var tdIMC = paciente.querySelector(".info-imc")
    tdIMC.textContent = calculoIMC;
}else{
    console.log("A aultura ou o peso digitado não são válidos, porfavor verificar isso!");
}



