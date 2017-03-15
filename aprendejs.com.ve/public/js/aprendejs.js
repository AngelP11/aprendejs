(function (w, d, n) {
    
	'use strict';
    
	let btnMenu = d.getElementById('btn-menu'),
		nav = d.getElementById('nav'),
		links = d.querySelectorAll('#nav .menu__link'),
		btns_show_modal = d.querySelectorAll('.show_modal_ingresar');

    /*-------------Mostrar menu lateral-------------*/

    console.log(btnMenu);
	btnMenu.addEventListener('click' ,function () {
	  nav.classList.toggle('mostrar');
	  console.log(nav.classList);
	}, false);
    

	/*-------------Agrega clase select a los links del menu-------------*/
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function (e) {
			let licksSelect = d.querySelectorAll('#nav .menu__link.select');
			for (var i = 0; i < licksSelect.length; i++) {
				licksSelect[i].classList.remove('select');
			}
			e.target.classList.add('select');
		}, false);
	}


	/*-------------Funciones para mostrar y ocultar ventanas modal-------------*/
	for (var i = 0; i < btns_show_modal.length; i++) {
		btns_show_modal[i].addEventListener('click', function (e) {
			e.preventDefault();

			let modal = d.getElementById(`${e.target.dataset.modal}`),
				btn_cerrar_modal = modal.querySelectorAll('.modal_cerrar'),
                input = modal.querySelector('input');

			modal.style.overflow = 'auto';
			d.querySelector('body').style.overflow = 'hidden';           
            
            setTimeout(function (){
                input.focus();
            },800);
				
			modal.classList.add('modal__show');

			for (var i = 0; i < btn_cerrar_modal.length; i++) {
				btn_cerrar_modal[i].addEventListener('click', function (e) {
					e.preventDefault();
					d.querySelector('body').style.overflow = 'auto';
					modal.classList.remove('modal__show');
				}, false)
			}

		}, false);
	}

})( window, document, navigator );