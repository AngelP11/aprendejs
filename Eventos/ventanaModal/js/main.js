;(function(w,d){

	var modal = d.querySelector('#modal-js'),
		btnModal = d.querySelectorAll('.btn-modal-js');

	function mostrarModal(event) {
		event.preventDefault();

		modal.style.visibility = event.target.dataset.modal;

	}

	function main () {

		for (var i = btnModal.length - 1; i >= 0; i--) {
			btnModal[i].addEventListener('click', mostrarModal, false);
		}

	}

	w.addEventListener('load', main)
	
})(window,document);