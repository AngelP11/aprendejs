

(function() {

	'use strict';

	var d = document,
		links = d.querySelectorAll('.link');


	function main() {

		for (var i = links.length - 1; i >= 0; i--) {
			links[i].addEventListener('click', redirect);
		}
		
	}

	function redirect(evento) {

		evento.preventDefault();

		var href = evento.target.href;
		
	}

	window.addEventListener('load', main);


})();

