

var semana = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],

	meses = new Array( 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ),
	nuevoArreglo,
	convertirEnCadena,
	convertirEnArreglo;

	semana.pop()

	console.log( 'después de .pop(): ' + semana )

	semana.push( 'Sábado' )

	console.log( 'después de .push(): ' + semana )

	semana.shift()

	console.log( 'después de .shift(): ' + semana )

	semana.unshift( 'Domingo' )

	console.log( 'después de .unshift(): ' + semana )

	semana.reverse()

	console.log( 'después de .reverse(): ' + semana )

	nuevoArreglo = semana.concat( meses )

	console.log( 'después de .concat(): ' + nuevoArreglo, nuevoArreglo.length )

	convertirEnCadena = nuevoArreglo.join( '-' )

	console.log( 
		'después de .join(): ' + convertirEnCadena,
		typeof(convertirEnCadena),
		convertirEnCadena.length
	)

	convertirEnArreglo = convertirEnCadena.split( '-' )

	console.log( 
		'después de .split(): ' + convertirEnArreglo,
		typeof (convertirEnArreglo),
		convertirEnArreglo.length
	)




/*
function palindromo (cadena) {
	var resultado = '';

	// Pasar a minusculas la cadena
	var cadenaOriginal = cadena.toLowerCase();

	// Convertir la cadena en un array
	var letrasEspacios = cadenaOriginal.split("");

	// Eliminar los espacios en blanco
	var cadenaSinEspacios = "";

	for(i in letrasEspacios) {
		if(letrasEspacios[i] != " ") {
			cadenaSinEspacios += letrasEspacios[i];
		}
	}

	var letras = cadenaSinEspacios.split("");

	var letrasReves = cadenaSinEspacios.split("").reverse();
	// Este paso tambien es muy largo porque no se utiliza la sentencia "break"
	var iguales = true;

	for(i in letras) {
		if(letras[i] == letrasReves[i]) {
			resultado += " es un palíndromo";
			break;
		}
			else {
			// Alguna letra es distinta, por lo que ya no es un palindromo
			iguales = false;
			resultado += " no es un palíndromo";
			break;
		}
	}

	return resultado;

}

console.log(palindromo ('La ruta nos aporto otro paso natural'));

*/