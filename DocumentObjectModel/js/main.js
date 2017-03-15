;(function(){
	'use strict';
	console.log('Document : es el nodo raíz de todos los documentos HTML. Todos los demás nodos derivan de él.');
	console.log(document);
	console.log('----------------------------------------');

	var objeto_html = document.documentElement;

	var objeto_head = objeto_html.firstChild;
	var objeto_body = objeto_html.lastChild;

})();