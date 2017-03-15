
//La clase Array


var array = new Array();

var semana = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];


var arrayNumerosElementos = new Array(10);

var arrayElementosCorchetes = new Array();
arrayElementosCorchetes[0] = 2;
arrayElementosCorchetes[1] = "hola";
arrayElementosCorchetes[2] = true;
arrayElementosCorchetes[3] = 45.34;

var arrayElementosParametro = new Array(2, "hola", true, 45.34);


//------------------------------------------------------------------

//funciones más útiles para el manejo de arrays


// length , calcula el número de elementos de un array
var vocales = ["a", "e", "i", "o", "u"];
var numeroVocales = vocales.length; // numeroVocales = 5


//------------------------------------------------------------------

//concat() , se emplea para concatenar los elementos de varios arrays:


var array1 = [1, 2, 3];
array2 = array1.concat(4, 5, 6); // array2 = [1, 2, 3, 4, 5, 6]
array3 = array1.concat([4, 5, 6]); // array3 = [1, 2, 3, 4, 5, 6]


//------------------------------------------------------------------

//join(separador) , es la función contraria a split() . Une todos los elementos de un array para formar una cadena de texto. Para unir los elementos se utiliza el carácter separador :


var array = ["hola", "mundo"];
var mensaje = array.join(""); // mensaje = "holamundo"
mensaje = array.join("-"); // mensaje = "holamundo"




//------------------------------------------------------------------

//pop() , elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud disminuye una unidad.


var array = [1, 2, 3];
var ultimo = array.pop();
// ahora array = [1, 2]


//------------------------------------------------------------------

//push() , añade un elemento al final del array. El array original se modifica y aumenta su longitud una unidad. También es posible añadir más de un elemento a la vez.


var array = [1, 2, 3];
array.push(4);
// ahora array = [1, 2, 3, 4]


//------------------------------------------------------------------

//shift() , elimina el primer elemento del array. El array original se modifica y su longitud disminuye una unidad.


var array = [1, 2, 3];
var primero = array.shift();
// ahora array = [2, 3]


//------------------------------------------------------------------

//unshift() , añade un elemento al principio del array. El array original se modifica y aumenta su longitud en una unidad. También es posible añadir más de un elemento a la vez.


var array = [1, 2, 3];
array.unshift(0);
// ahora array = [0, 1, 2, 3]


//------------------------------------------------------------------

//reverse() , modifica un array colocando sus elementos en el orden inverso a su posición original:


var array = [1, 2, 3];
array.reverse();
// ahora array = [3, 2, 1]


//------------------------------------------------------------------



//splice(indice, catidadEmentos); Elimina elementos del array  
var array = [1, 2, 3, 4, 5, 6]; //[1, 2, 3, 4, 5, 6]
array.splice(3,2); //[1, 2, 3, 6]
console.log('----------splice----------')
console.log(array);

//------------------------------------------------------------------

// slice corta el array pasandole por paramentro el indixe y la el final

var arr = array.slice(3, 2);
console.log('----------slice----------')
console.log(arr);

//Ejercicios

// crear 2 arrys uno para los dias de la semana y otro para los meses del año, 
/*

0) Mostrar los array por consola jundo a su longitud y tipo typeof()

1) Eliminarle a el array semanas el ultimo dia

2) Agragarle al array semanas el dia eliminado anteriormnete

3) Eliminarle a el array semanas el primer dia

4) Agragarle al array semanas el dia eliminado anteriormnete

5) Mostrar a el array semanas inverdido

6) Concatenar el array meses con el array semanas / Mostrar la longitud del array

7) Transformar el array en cadena de caracteres / Mostrar la longitud de la cadena de caracteres, mas el tipo de archivos typeof()


7) Transformar la cadena de caracteres en array /  Mostrar la longitud de la cadena de caracteres, mas el tipo de archivos typeof()

8) realizar una funcion que detecte si una cadena de caracterer es palíndromos

	* La ruta nos aporto otro paso natural
    * Esta frase no se parece a ningun palindromo

Notas: mostrar todos los resultados por consola jutamente con el metodo utilizado para resolver cada parte del ejercicios

*/

