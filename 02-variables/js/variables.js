/*
Una variable es un elemento que se
emplea para almacenar y hacer referencia a otro valor
*/

resultado = 3 + 1 //Si no existieran variables, un programa que suma dos números podría escribirse como:

///////////////////////////////////////////////////////////////////////////

/*
//Sin embargo, el programa se puede rehacer de la siguiente manera utilizando variables para almacenar y referirse a cada número:
numero_1 = 3
numero_2 = 1
resultado = numero_1 + numero_2

*/
///////////////////////////////////////////////////////////////////////////

/*
 //Las variables en JavaScript se crean mediante la palabra reservada var .De esta forma, el ejemplo anterior se puede realizar en JavaScript de la siguiente manera:

var numero_1 = 3;
var numero_2 = 1;
var resultado = numero_1 + numero_2;

*/


///////////////////////////////////////////////////////////////////////////
	
/*
 // Tambie podemos declarar variables usando una sola vez la palabra reservada var separando las variables con (comas)

var numero_1 = 3,
	numero_2 = 1,
	resultado = numero_1 + numero_2;

*/
///////////////////////////////////////////////////////////////////////////

/*
//La palabra reservada var solamente se debe indicar al definir por primera vez la variable, lo que se denomina declarar una variable. Cuando se utilizan las variables en el resto de instrucciones del script, solamente es necesario indicar su nombre. En otras palabras, en el ejemplo anterior sería un error indicar lo siguiente:

var numero_1 = 3;
var numero_2 = 1;
var resultado = var numero_1 + var numero_2;

*/

///////////////////////////////////////////////////////////////////////////

/*
//Si cuando se declara una variable se le asigna también un valor, se dice que la variable ha sido inicializada. En JavaScript no es obligatorio inicializar las variables, ya que se pueden declarar por una parte y asignarles un valor posteriormente. Por tanto, el ejemplo anterior se puede rehacer de la siguiente manera:

var numero_1;
var numero_2;
numero_1 = 3;
numero_2 = 1;
var resultado = numero_1 + numero_2;

*/
///////////////////////////////////////////////////////////////////////////


/*
//El nombre de una variable también se conoce como identificador y debe cumplir las siguientes normas:

		//Sólo puede estar formado por letras, números y los símbolos $ (dólar) y _ (guión bajo).

		//El primer carácter no puede ser un número.
	

//Por tanto, las siguientes variables tienen nombres correctos:
var $numero1;
var _$letra;
var $$$otroNumero;
var $_a__$4;

//Sin embargo, las siguientes variables tienen identificadores incorrectos:

	// Empieza por un número
	var 1numero;
	// Contiene un carácter ";"
	var numero;1_123; 
*/




///////////////////////////////////////////////////////////////////////////

							/*EJERCICIO*/

/*Declarar los dias de la semana en variables y mostrarlos por la consona*/


///////////////////////////////////////////////////////////////////////////
//Tipos de variables

/*
//Numéricas

var iva = 16; // variable tipo entero
var total = 234.65; // variable tipo decimal

	//Operadores Matemáticos

		var numero1 = 10,
			numero2 = 5,
			resultado;

		resultado = numero1 / numero2; // resultado = 2
		resultado = 3 + numero1;       // resultado = 13
		resultado = numero2 - 4;       // resultado = 1
		resultado = numero1 * numero2; // resultado = 50

		//"módulo"

		var numero1 = 10;
		var numero2 = 5;
		resultado = numero1 % numero2; // resultado = 0

		numero1 = 9;
		numero2 = 5;
		resultado = numero1 % numero2; // resultado = 4

		//Los operadores matemáticos también se pueden combinar con el operador de asignación para abreviar su notación:

		var numero1 = 5;
		numero1 += 3; // numero1 = numero1 + 3 = 8
		numero1 -= 1; // numero1 = numero1 - 1 = 4
		numero1 *= 2; // numero1 = numero1 * 2 = 10
		numero1 /= 5; // numero1 = numero1 / 5 = 1
		numero1 %= 4; // numero1 = numero1 % 4 = 1



*/

///////////////////////////////////////////////////////////////////////////

//Incremento

/*
var numero = 5;
++numero;
console.log('Incremento: '+numero); // numero = 6

//Decremento
var numero = 5;
--numero;
console.log('Decremento: '+numero); // numero = 4

*/

/*
Si el operador ++ se indica como prefijo del identificador de la variable, su valor se incrementa antes de realizar cualquier otra operación. Si el operador ++ se indica como sufijo del identificador de la variable, su valor se incrementa después de ejecutar la sentencia en la que
aparece.
*/

/*
var numero1 = 5;
var numero2 = 2;
numero3 = numero1++ + numero2; 

console.log(
	numero1,
	numero2,
	numero3
);

var numero1 = 5;
var numero2 = 2;
numero3 = ++numero1 + numero2; 

console.log(
	numero1,
	numero2,
	numero3
);

*/


///////////////////////////////////////////////////////////////////////////

							/*EJERCICIO*/

/*Mostrar por consola todas las operaciones matematicas vistas en clases utilizando 2 variables numericas, la primera decrementada y la segunda incrementada*/

///////////////////////////////////////////////////////////////////////////

/*
//Cadenas de texto

var mensaje = "Bienvenido a nuestro sitio web";
var nombreProducto = 'Producto ABC';
var letraSeleccionada = 'c';

*/

///////////////////////////////////////////////////////////////////////////

/*
//El contenido de texto1 tiene comillas simples, por lo que se encierra con comillas dobles 
var texto1 = "Una frase con 'comillas simples' dentro";
//El contenido de texto2 tiene comillas dobles, por lo que se encierra con comillas simples
var texto2 = 'Una frase con "comillas dobles" dentro';

*/
///////////////////////////////////////////////////////////////////////////

/*
No obstante, a veces las cadenas de texto contienen tanto comillas simples como dobles. Además, existen otros caracteres que son difíciles de incluir en una variable de texto (tabulador, ENTER , etc.) Para resolver estos problemas, JavaScript define un mecanismo para incluir de forma sencilla caracteres especiales y problemáticos dentro de una cadena de texto.
_____________________________________________________________
Si se quiere incluir...    |      Se debe incluir...
___________________________|_________________________________
Una nueva línea            |      \n
Un tabulador               |      \t
Una comilla simple         |      \'
Una comilla doble          |      \"
Una barra inclinada        |      \\
___________________________|__________________________________


var texto1 = 'Una frase con \'comillas simples\' dentro';

var texto2 = "Una frase con \"comillas dobles\" dentro";
*/

///////////////////////////////////////////////////////////////////////////

							/*EJERCICIO*/

/*Mostrar en un alert() cadenas de texto que tengan comillas simples, comillas dobles, tabulador, nueva línea y barra inclinada*/

///////////////////////////////////////////////////////////////////////////


				/*funciones para cadenas de texto*/

//length , calcula la longitud de una cadena de texto (el número de caracteres que la forman)


/*
var mensaje = "Hola Mundo";
var numeroLetras = mensaje.length; // numeroLetras = 10
*/

//+ , se emplea para concatenar varias cadenas de texto.

/*
var mensaje1 = "Hola";
var mensaje2 = " Mundo";
var mensaje = mensaje1 + mensaje2; // mensaje = "Hola Mundo"
*/

//Además del operador + , también se puede utilizar la función concat()

/*
var mensaje1 = "Hola";
var mensaje2 = mensaje1.concat(" Mundo"); // mensaje2 = "Hola Mundo"
*/

//Las cadenas también se pueden unir con variables numéricas:

/*
var variable1 = "Hola ";
var variable2 = 3;
var mensaje = variable1 + variable2; // mensaje = "Hola 3"
*/


//toUpperCase() , transforma todos los caracteres de la cadena a sus correspondientes caracteres en mayúsculas:

/*
var mensaje1 = "Hola";
var mensaje2 = mensaje1.toUpperCase(); // mensaje2 = "HOLA"
*/


//toLowerCase() , transforma todos los caracteres de la cadena a sus correspondientes caracteres en minúsculas:

/*
var mensaje1 = "HOlA";
var mensaje2 = mensaje1.toLowerCase(); // mensaje2 = "hola"
*/


//charAt(posicion) , obtiene el carácter que se encuentra en la posición indicada:

/*
var mensaje = "Hola";
var letra = mensaje.charAt(0); // letra = ‘H’
letra = mensaje.charAt(2); // letra = ‘l’
*/

//indexOf(letra) , calcula la primera posición en la que se encuentra el carácter indicado dentro de la cadena de texto. Si la cadena no contiene el carácter, la función devuelve el valor -1 :
/*
var mensaje = "Hola";
var posicion = mensaje.indexOf('a'); // posicion = 3
posicion = mensaje.indexOf('b'); // posicion = -1

*/

//La función indexOf() comienza su búsqueda desde el principio de la palabra y solo devuelve la primera posición de todas las existentes. Su función análoga es lastIndexOf().

//lastIndexOf(letra) , calcula la última posición en la que se encuentra el carácter indicado dentro de la cadena de texto. Si la cadena no contiene el carácter, la función devuelve el valor -1 :

/*
var mensaje = "Hola";
var posicion = mensaje.lastIndexOf(‘a’); // posicion = 3
posicion = mensaje.lastIndexOf(‘b’); // posicion = -1
*/

//La función lastIndexOf() comienza su búsqueda desde el final de la cadena hacia el principio, aunque la posición devuelta es la correcta empezando a contar desde el principio de la palabra.

//substring(inicio, final) , extrae una porción de una cadena de texto. El segundo parámetro es opcional. Si solo se indica el parámetro inicio, la función devuelve la parte de la cadena original correspondiente desde esa posición hasta el final:

/*
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(2); // porcion = "la Mundo"
porcion = mensaje.substring(5); // porcion = "Mundo"
porcion = mensaje.substring(7); // porcion = "ndo"
*/

//Si se indica un inicio negativo, se devuelve la misma cadena original:

/*
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(-2); // porcion = "Hola Mundo"
*/

//Si se indica el inicio y el final, se devuelve la parte de la cadena original comprendida entre la posición inicial y la inmediatamente anterior a la posición final (es decir, la posición inicio está incluida y la posición final no)

/*
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(1, 8); // porcion = "ola Mun"
porcion = mensaje.substring(3, 4); // porcion = "a"
*/

//Si se indica un final más pequeño que un inicio, JavaScript los considera de forma inversa, ya que automáticamente asigna el valor más pequeño al inicio y el más grande al final:

/*
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(5, 0); // porcion = "Hola "
porcion = mensaje.substring(0, 5); // porcion = "Hola "
*/

//split(separador) , convierte una cadena de texto en un array de cadenas de texto. La función parte una cadena de texto dividiendo sus trozos a partir del carácter delimitador indicado:


/*
var mensaje = "Hola Mundo, soy una cadena de texto!";
var palabras = mensaje.split(" ");
// palabras = ["Hola", "Mundo,", "soy", "una", "cadena", "de", "texto!"];
*/

//Con esta función se pueden extraer fácilmente las letras que forman una palabra:

/*
var palabra = "Hola";
var letras = palabra.split(""); // letras = ["H", "o", "l", "a"]
*/


///////////////////////////////////////////////////////////////////////////

									/*EJERCICIO*/

/*
	Guardar en una variable su nombres y apellidos completos con una letra minuscula y la siguiente mayuscula 
	ejemplo: var nombre_completo = "iSaAc JoSé SeIjAs MoRaLeS",

	luego si la longitud del cada nombre o apellido es PAR "El primer caracter debe ser en mayuscula y el resto en minuscula" y si es IMPAR "El primer caracter debe ser en minuscula y el resto en mayuscula",

	almacenar el nombre_completo_modificado en una variable y mostrarla por consola junto el en nombre_completo original


						\EJERCICIO\						 
	 
	nombre completo original: iSaAc JoSé SeIjAs MoRaLeS 

	nombre completo modificado:  ISAAc José Seijas MORALEs 

*/

///////////////////////////////////////////////////////////////////////////


var nombre_completo = "iSaAc JoSé SeIjAs MoRaLeS",

	nombre_completo_array = nombre_completo.split(' '),

	nombre_completo_modificado = '';

	for (var i = 0; i < nombre_completo_array.length; i++) {

		if (nombre_completo_array[i].length % 2 == 0) {

			nombre_completo_modificado += ' '+nombre_completo_array[i].charAt(0).toUpperCase()+nombre_completo_array[i].substring(1).toLowerCase();

		}else {

			nombre_completo_modificado += nombre_completo_array[i].charAt(nombre_completo_array[i].length-1).toLowerCase()+nombre_completo_array[i].substring(0,nombre_completo_array[i].length-1).toUpperCase();
		}
	}

	console.log(
			'\n\t\t\t\t\t\t\\\EJERCICIO\\\t\t\t\t\t\t\ \n',
			'\nnombre completo original: '+nombre_completo,
			'\n\nnombre completo modificado:  '+nombre_completo_modificado
		);

/*
Arrays

//En ocasiones, a los arrays se les llama vectores, matrices e incluso arreglos. No obstante,el término array es el más utilizado y es una palabra comúnmente aceptada en el entorno de la programación.

//Un array es una colección de variables, que pueden ser todas del mismo tipo o cada unade un tipo diferente. Su utilidad se comprende mejor con un ejemplo sencillo: si unaaplicación necesita manejar los días de la semana, se podrían crear siete variables detipo texto:
*/

/*
var dia1 = "Lunes",
	dia2 = "Martes",
	dia3 = "Miércoles",
	dia4 = "Jueves",
	dia5 = "Viernes",
	dia6 = "Sábado",
	dia7 = "Domingo";

*/

//En este tipo de casos, se pueden agrupar todas las variables relacionadas en unacolección de variables o array. El ejemplo anterior se puede rehacer de la siguienteforma:

//var nombre_array = [valor1, valor2, ..., valorN];

/*
var dias = [
	"Lunes", 
	"Martes",
	"Miércoles", 
	"Jueves", 
	"Viernes", 
	"Sábado", 
	"Domingo"
];
var diaSeleccionado = dias[0]; // diaSeleccionado = "Lunes"
var otroDia = dias[5]; // otroDia = "Sábado"
*/

///////////////////////////////////////////////////////////////////////////

						/*Ejersicio*/

		/* mostrar los meses del año usando arrays */ 			

///////////////////////////////////////////////////////////////////////////

//A continuación se muestran algunas de las funciones más útiles para el manejo de arrays:

//length , calcula el número de elementos de un array:

/*
var vocales = ["a", "e", "i", "o", "u"];
var numeroVocales = vocales.length; // numeroVocales = 5

*/
///////////////////////////////////////////////////////////////////////////

/*
//Booleanos

//Las variables de tipo boolean o booleano también se conocen con el nombre de variables de tipo lógico. Aunque para entender realmente su utilidad se debe estudiar la programación avanzada con JavaScript del siguiente capítulo, su funcionamiento básico es muy sencillo.

var clienteRegistrado = false;
var ivaIncluido = true;

*/

///////////////////////////////////////////////////////////////////////////


/*
Ámbito de variables:

Si la variable no se declara mediante el operador var , automáticamente se crea una variable global con ese identificador y su valor. Ejemplo:
*/

/*
var variable1 = 16;
variable2 = variable1 + 4;
*/

/*
El ámbito de una variable (llamado scope en inglés) es la zona del programa en la que se define la variable. JavaScript define dos ámbitos para las variables: global y local.


function muestraMensaje() {
	var mensaje = "Mensaje de prueba";
}
	muestraMensaje();
	alert(mensaje);
*/


/*
En caso de colisión entre las variables globales y locales, dentro de una función prevalecen las variables locales:
*/


// var mensaje = "gana la de fuera";
// function muestraMensaje() {
// 	var mensaje = "gana la de dentro";
// 	alert(mensaje);
// }

// alert(mensaje);
// muestraMensaje();
// alert(mensaje);



// Si no se define la variable dentro de la función con la palabra reservada var , en realidad se está modificando el valor de la variable global:


///////////////////////////////////////////////////////////////////////////