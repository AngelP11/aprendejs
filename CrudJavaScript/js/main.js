    
    'use strict';


	//Variables y Constates

	var d = document,
		mensaje = null,
		filas = null,
		consecutivo = 0,
		frm = d.querySelector('#contactos_frm'),
		btnSubmit = d.querySelector('#btn_submit'),
		btnLimpiar = d.querySelector('#btn_limpiar'),
		respuesta = d.querySelector('#respuesta'),
		cuerpo_tabla = d.querySelector('#cuerpoTabla');

	//Objetos y Arrays

	var contacto = {},
		contactos = [];


	//Funciones

	function guardaEditaContacto(event) {
		event.preventDefault();

		console.log(frm.dataset.action);

		contacto.nombre = frm.nombre_txt.value;
		contacto.telefono = frm.telefono_txt.value;
		contacto.fecha_nacimiento = frm.fecha_nacimiento_txt.value;

		if (frm.dataset.action=='guardar') {

			consecutivo = consecutivo + 1;

			contacto.id = consecutivo;

			contactos.push(contacto);

			mostrarMsj('<div class="mensajes msj-bn">Contacto creado con el id: '+consecutivo+'</div>');

		} else {

			for (var i = 0; i < contactos.length; i++) {
				if (parseInt(frm.id_txt.value, 10) === contactos[i].id) {
					contacto.id = contactos[i].id;
					contactos.splice(i, 1);
					break;
				}
			}

			contactos.push(contacto);

			mostrarMsj('<div class="mensajes msj-bn">Contacto editado con el id: '+contacto.id+'</div>');

			frm.dataset.action = 'guardar';

			btnSubmit.textContent = 'Guardar';

		}

		contacto = {};

		frm.reset();

		frm.nombre_txt.focus();	

		tablaContactos();
	}

	function tablaContactos() {
		filas = '';

		for (var i = 0; i < contactos.length; i++) {
			filas += '<tr>';
				filas += '<td class="identificador"> '+contactos[i].id+' </td>';
				filas += '<td class="nombre"> '+contactos[i].nombre+' </td>';
				filas += '<td class="telefono"> '+contactos[i].telefono+' </td>';
				filas += '<td class="fecha_nacimiento"> '+contactos[i].fecha_nacimiento+' </td>';
				filas += '<td class="acciones_btns">';
					filas += '<button class="acciones eliminar" onclick="eliminar('+contactos[i].id+')" >Eliminar</button>';
					filas += '<button class="acciones actualizar" onclick="preparaFrmEditar('+contactos[i].id+')" >Actualizar</button>';
				filas += '</td>';
			filas += '</tr>';

		}

		cuerpo_tabla.innerHTML = filas;
	}

	function preparaFrmEditar (id) {
		for (var i = 0; i < contactos.length; i++) {
			if (parseInt(id, 10) === contactos[i].id) {
				
				frm.id_txt.value =  contactos[i].id;
				frm.nombre_txt.value =  contactos[i].nombre;
				frm.telefono_txt.value =  contactos[i].telefono;
				frm.fecha_nacimiento_txt.value =  contactos[i].fecha_nacimiento;

				frm.dataset.action = 'editar';

				btnSubmit.textContent = 'Editar';

				break;
			}
		}
	}


	function eliminar (id) {
		if (confirm('seguro quiere eliminar al contacto con el id: '+id)) {
			for (var i = 0; i < contactos.length; i++) {
				if (parseInt(id, 10) === contactos[i].id) {
					contactos.splice(i, 1);
					break;
				}
			}

			mostrarMsj('<div class="mensajes msj-bn">Contacto con el id: '+consecutivo+' eliminado</div>');

			tablaContactos();
		}	
	}

	function mostrarMsj (msj) {
		respuesta.innerHTML = msj;

		setInterval(function () {
			respuesta.innerHTML = '';
		}, 2500);
	}

	function limpiar (event) {
		event.preventDefault();
		frm.reset();
		frm.nombre_txt.focus();
		btnSubmit.textContent = 'Guardar';
	}

	function main() {
		frm.addEventListener('submit', guardaEditaContacto);
		btnLimpiar.addEventListener('click', limpiar)
	}

	//Eventos
	window.addEventListener('load', main);

