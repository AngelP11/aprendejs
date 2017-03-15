/*
Conceptos Básicos en POO en JS
	Clases (Modelo a Seguir) - Prototipos
	Objetos (Instancias de las Clases)

	Los objetos tienen 2 facultades:
		Métodos (tienen acciones)
		Atributos (tienen características)

Formas de crear objetos en JS:
	1) Objetos literales
	2) Prototipo Object()
	3) Función Constructora
	4) Clases (apartir de ES6 o ES2015)
*/

;(function(){
	'use strict';

	var contacto = {
		id: '01',
		nombre: 'ramon',
		apellido: 'perez',
		edad: 35,
		telefono: '0412-490-7297',
		email: 'ramon@ejemplo.com',

		getDatos: function() {

			var datos = '<table>';
				datos += '<tr>';
					datos += '<td> ' + this.id + ' </td>';
					datos += '<td> ' + this.nombre + ' </td>';
					datos += '<td> ' + this.apellido + ' </td>';
					datos += '<td> ' + this.edad + ' </td>';
					datos += '<td> ' + this.telefono + ' </td>';
					datos += '<td> ' + this.email + ' </td>';
				datos += '</tr>';
			datos += '</table>';

			return datos;

		}
	}

//---------------------------------------------------------------------

	var contacto2 = new Object();

	contacto2.id = '02',
	contacto2.nombre = 'juan',
	contacto2.apellido = 'diaz',
	contacto2.edad = 25,
	contacto2.telefono = '0414-144-0233',
	contacto2.email = 'juan@ejemplo.com',

	contacto2.getDatos = function() {

			var datos = '<table>';
				datos += '<tr>';
					datos += '<td> ' + this.id + ' </td>';
					datos += '<td> ' + this.nombre + ' </td>';
					datos += '<td> ' + this.apellido + ' </td>';
					datos += '<td> ' + this.edad + ' </td>';
					datos += '<td> ' + this.telefono + ' </td>';
					datos += '<td> ' + this.email + ' </td>';
				datos += '</tr>';
			datos += '</table>';

			return datos;

		}

//---------------------------------------------------------------------

	function Contactos ( id, nombre, apellido, edad, telefono, email ) {
		
		var o = this;

		o.id = id;
		o.nombre = nombre;
		o.apellido = apellido;
		o.edad = edad;
		o.telefono = telefono;
		o.email = email;

		o.getDatos = function () {

			var datos = '<table>';
				datos += '<tr>';
					datos += '<td> ' + o.id + ' </td>';
					datos += '<td> ' + o.nombre + ' </td>';
					datos += '<td> ' + o.apellido + ' </td>';
					datos += '<td> ' + o.edad + ' </td>';
					datos += '<td> ' + o.telefono + ' </td>';
					datos += '<td> ' + o.email + ' </td>';
				datos += '</tr>';
			datos += '</table>';

			return datos;

		}
	}

	var contacto3 = new Contactos( '03', 'gustavo', 'garcia', 37, '0424-364-2736', 'gustavo@ejemplo.com' );

//---------------------------------------------------------------------

	class ContactosClass{

		constructor( id, nombre, apellido, edad, telefono, email ){

			this.id = id;
			this.nombre = nombre;
			this.apellido = apellido;
			this.edad = edad;
			this.telefono = telefono;
			this.email = email;

		}

		getDatos() {

			var datos = '<table>';
				datos += '<tr>';
					datos += '<td> ' + this.id + ' </td>';
					datos += '<td> ' + this.nombre + ' </td>';
					datos += '<td> ' + this.apellido + ' </td>';
					datos += '<td> ' + this.edad + ' </td>';
					datos += '<td> ' + this.telefono + ' </td>';
					datos += '<td> ' + this.email + ' </td>';
				datos += '</tr>';
			datos += '</table>';

			return datos;

		}
	}

	var contacto4 = new ContactosClass( '04', 'maria', 'morales', 19, '0412-154-8293', 'gustavo@ejemplo.com' );

	document.querySelector('.contactos').innerHTML = contacto.getDatos() + contacto2.getDatos() + contacto3.getDatos() + contacto4.getDatos();

})();