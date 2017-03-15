(function ( w, d, n ) {

	'use strict';


	var validarFrm = {

		frm( frm ){
			console.log(frm)
			this.frm = frm
		}
	}

	var lib = {

		validar: validarFrm,

		Selector: function( selector ) {
			return [].slice.call( document.querySelectorAll( selector ) );
		}

	}

	if (typeof w.lib==='undefined') {
		w.lib = lib;
	}else {
		console.log('Ya existe la librería');
	}
	
})( window, document, navigator );