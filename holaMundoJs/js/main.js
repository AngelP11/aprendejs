var d = document;


function saluda(evento) {


	console.log(evento);

	var	span = d.querySelector('#saludo');

	span.innerHTML = evento.target.value;

		//inputTexto = input.value;

		//span.textContent = inputTexto; // escribe dentro de la etiqueta como string

		//span.innerHTML = inputTexto; // escribe dentro de la etiqueta cono codig html

}

function main() {
	//var btn = d.querySelector('#btn');

	//btn.addEventListener('click', saluda);

	var input = d.querySelector('#texto');

	input.addEventListener('keyup', saluda);

}

window.addEventListener('load', main);