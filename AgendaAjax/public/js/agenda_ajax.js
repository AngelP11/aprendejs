(function ( w, d, n) {
	
	'use strict';

	function main() {

		//VARIABBLES CONSTANTES OBJECTO 
		let btnMenu = d.querySelector('#btn_menu'),
			menu = d.querySelector('.menu');

		btnMenu.addEventListener('click', function (e) {
			menu.classList.toggle('mostrarMenu');
		}, false);


		enrutador.addRuta(
			'/', // Ruta para la url
			'Views/Home.html', // Ruta del archivo a mostrar
			null, // Controlador
			null // Funcion algargar la vista
		);

		enrutador.addRuta( 
			'/Listar', 
			'Views/Listar.html', 
			null, 
			null 
		);

		/*ajax.ejecutar({
			type: 'GET',
			url: 'Views/Home.html',
			data: 'saludo=hola ajax',
			loading: function () {
				d.querySelector('#vistas').innerHTML = '<img src="public/img/loading.gif">';
			},
			success: function (datos) {
				d.querySelector('#vistas').innerHTML = datos;
			}
		});*/

	}

	w.addEventListener('DOMContentLoaded', main, false);	

})( window, document, navigator );