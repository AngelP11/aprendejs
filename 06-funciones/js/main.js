

var nombre = "omar";


(function (w, d, n, nom){

	'use strict';
	var a = 'hola';

	//console.log(nom);

})(window, document , navigator, nombre);




//-----------------------------------------
		//   Son objetos de primer clase
		//-----------------------------------------
/*
		function a() {}
		console.log(typeof a);
		// function
		console.log(a instanceof Object);
		// true
		console.log(a.name);
		// a
		console.log(a.constructor);
		// function Function() { [native code] }
*/

		//-----------------------------------------
//		  Pueden asignarse a una variable
		//-----------------------------------------

/*		var a = function() {
			return 4;
		}

		var b = a;
			console.log(a());
			//4
			console.log(b());
			//4*/

		//-----------------------------------------------
		//	Pueden pasarse como argumento a otra función
		//-----------------------------------------------

/*
		function a() {
			return 3;
		}

		function b(arg){
			return arg();
		}

		console.log(b(a)); 
		//3
*/
		//-----------------------------------------------
		//	Pueden retornarse
		//-----------------------------------------------


/*		function b( n ){
			return function( m ){
				return n * m;
			}
		}

		console.log( b(2)(3) );
		//6
*/
		// recursión


		//-----------------------------------------------
		//	 Fibonacci
		//-----------------------------------------------
	/*function fib( n ) {
		if ( n<2 ) return 1;
		return fib( n-1 ) + fib( n-2 );
	}

	let arrayFibobacci = [],
		num = prompt('ingrese el numero');

	for (var i = 0; i <= num; i++) {
		arrayFibobacci.push( fib(i) );
	}

	console.log(arrayFibobacci);*/
	/*	


		primos(arrayFibobacci);

		function primos(array) {

			array.forEach( function(element, index) {
				var contador = 0;
				for (var i = 1; i < element; i++) {
					if ( element % i == 0 ) {
						contador++;
					}

				}
				if (contador == 0) {
					console.log(element)
				}

			});

		}*/



		//________________________________________________________/
		// n   |  0  |  1  |  2  |  3  |  4  |  5  |  6   |  7   |
		// fib |  1  |  1  |  2  |  3  |  5  |  8  |  13  |  21  |


		//-----------------------------------------------
		//	 Las funciones tienen funciones 
		//-----------------------------------------------

		// call: permite llamar a la función pasandole el this y los argumentos separados por coma.

/*
		var obj = {

			a: 3,

			f: function ( n ) {
				console.log(this);
				return this.a * n;
			}

		};

		console.log( obj.f( 2 ) ); // 6

		var obj2 = {

			a: 8

		};

		console.log( obj.f.call(obj2, 6)); // 16*/


/*

		arr.forEach( function(element, index) {
			console.log(element);
		});
*/
		/*var arr = [ 1, 2, 3, 4, 5 ];

		var links = document.querySelectorAll('a');

		console.log( links, arr );*/

/*
		links.forEach( function(element, index) {
			console.log(element, index);
		} );*/

		/*[].forEach.call( links, function( element, index ) {
			console.log( element );
		});*/
		

/*
*/
		// apply: Llama a la funcion pasándole el this y un arreglo de argumentos

		
		/*function a( a, b, c, d ) {
			console.log( a*a, b*b, c*c, d*d );
		}

		var arr = [ 1, 2, 3, 4];

		a.apply(null, arr); // 1 4 9 16*/

/*
		var arr = [ 9, 23, 55, 322, 11, 3, 59, 12, 122 ];

		console.log( Math.max.apply(null, arr) ); // 322
		console.log( Math.min.apply(null, arr) ); // 3
*/

		// bind : Crea una función a partir de otra, la cual tiene asignado el this y sus argumentos.

/*		var obj = {
			a: 3,
			f: function ( n ) {
				return this.a * n;
			}
		};

		// si por error hago esto
		var f = obj.f;

		console.log(f(3)); // NaN
*/

/*		var obj = {
			a: 3,
			f: function ( n ) {
				//console.log(this);
				return this.a * n;
			}
		};

		//console.log( obj.f(5) );

		var f = obj.f.bind( {a:6} );
		//console.log( f(1) ); // 6

		var f5 = obj.f.bind( {a:8}, 5 );
		//console.log( f5() ); // 30 <= ( this.a = 6 ) * ( n = 5 )
*/


/*
		var app = {
			msg: 'hola java script',
			main: function () {
				document.addEventListener('click', this.saludar.bind(this) );
			},
			saludar: function () {
				alert( this.msg );
			}
		};

		app.main();
*/

// SELECTORES

// $(); Estan en el navegador "no son JQuery"
// $$();  Estan en el navegador "no son JQuery"

// Como solo estan en el navegador no las puedo usar en mi script, pero podemos construir nuestras propias funciones selectoras Js

//querySelector && querySelectorAll Debuelven el o los elementos que coicidad con un selector css

/*
	var $ = document.querySelector.bind( document ),
		$$ = document.querySelectorAll.bind( document ); 

	console.log(
			$('p'),
			$$('a')
		);
*/

		// creando un microQuery

/*
		function mQuery( selector ) {
			return [].slice.call( document.querySelectorAll( selector ) );
		}

		mQuery('p')
			.filter(function( p ) {
				return p.innerHTML.match(/lorem/i);
			})
			.slice( 2 , 4 )
			.forEach( function(element, index) {
				console.log(element);
			});
*/


//splice(indice, catidadEmentos); Elimina elementos del array  
/*var array = [1, 2, 3, 4, 5, 6]; //[1, 2, 3, 4, 5, 6]
array.splice(3,2); //[1, 2, 3, 6]
console.log('----------splice----------')
console.log(array);*/

//------------------------------------------------------------------

// slice corta el array pasandole por paramentro el indixe y la el final

/*var arr = array.slice(3, 2);
console.log('----------slice----------')
console.log(arr);*/