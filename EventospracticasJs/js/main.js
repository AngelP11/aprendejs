var d = document;

function main() {
	//var btn = d.getElementsByTagName('button');

	//var btn = d.getElementById('btn-saludar');

	//var btn = d.getElementsByClassName('btns');

	var btn = d.querySelectorAll('.btns');

	for (var i = btn.length - 1; i >= 0; i--) {
		btn[i].addEventListener('click', fun);
		btn[i].addEventListener('click', fun2);
	}

}

function fun2() {
	console.log('fun2');
}


function fun(evento) {

	console.log(evento.target);
	evento.target.name = 'nuevoBTN';
	console.log(evento.target);

	evento.target.disabled = true;

	evento.target.style.color = 'red';

	evento.target.textContent = 'disabled';

	evento.target.removeEventListener('click', fun);


	//setTimeout(function() {
	//}, 100)




}

window.onload = function () {
	main();
}
