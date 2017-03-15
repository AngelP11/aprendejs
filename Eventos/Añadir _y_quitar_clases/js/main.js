;(function(w,d){

	var toggleMenu = d.querySelector('#toggle-menu'),
		menu = d.querySelector('#menu');

	function main () {
		toggleMenu.addEventListener('click', function () {
			//menu.classList.add('mostrar');
			//menu.classList.remove('mostrar');
			menu.classList.toggle('mostrar');
		});
	};

	d.addEventListener('DOMContentLoaded', main);
	
})(window,document);