(function ( w, d, n ) {

	'use strict';

	const READY_STATE_COMPLETE = 4,
		  OK = 200;

	class Ajax{

			constructor() {

				if (w.XMLHttpRequest) {

					this.peticion_http = new XMLHttpRequest();

				}else if (w.ActiveXObject) {

					this.peticion_http = ActiveXObject("Microsoft.XMLHTTP");

				};

			}

			ejecutar( objectJSON ){

				this.peticion_http.open( `${objectJSON.type}`, `${objectJSON.url}` );

				this.peticion_http.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );

				this.peticion_http.send(objectJSON.data);

				this.peticion_http.onreadystatechange = function () {

					if (typeof objectJSON.loading == 'function') {

						objectJSON.loading();

					}
					
					if (this.readyState == READY_STATE_COMPLETE) {
						if (this.status == OK) {

							if (typeof objectJSON.success == 'function') {
								objectJSON.success(this.responseText);
							}

						}
					}

				};

			}

	}

	if ( typeof w.ajax==='undefined' ) {
		w.ajax = new Ajax();
	}else {
		console.log( 'Ya existe la librería ajax' );
	}
	
})( window, document, navigator );