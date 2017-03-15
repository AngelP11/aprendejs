//let

//Ahora podemos declarar variables con let en lugar de var si no queremos que sean accesibles más allá de un ámbito. Por ejemplo:

/*
//ES5
(function() {
    console.log(x); // x no está definida aún.
    if(true) {
        var x = "hola mundo";
    }
    console.log(x); 
    // Imprime "hola mundo", porque "var" hace que sea global
    // a la función;
})();

//ES6
(function() {
    if(true) {
        let x = "hola mundo";
    }
    console.log(x); 
    //Da error, porque "x" ha sido definida dentro del "if"
})();
*/


//-------------------------------------------------------------

//const

//Ahora con const podemos crear constantes que sólo se puedan leer y no modificar a lo largo del código. Veamos un ejemplo


/*
(function() {
    const PI;
    PI = 3.15; 
    // ERROR, porque ha de asignarse un valor en la 
    // declaración
})();

(function() {
    const PI = 3.15;
    PI = 3.14159;
    // ERROR de nuevo, porque es sólo-lectura
})();
*/

//-------------------------------------------------------------


//Template Strings
//Con ES6 podemos interpolar Strings de una forma más sencilla que como estábamos haciendo hasta ahora. Fíjate en este ejemplo:

/*
//ES6
let nombre1 = "JavaScript";  
let nombre2 = "Genial";  
console.log(`Sólo quiero decir que ${nombre1} es ${nombre2}`);
// Solo quiero decir que JavaScript es Genial
*/

//-------------------------------------------------------------

//Valores por defecto

//Otra novedad es asignar valores por defecto a las variables que se pasan por parámatros en las funciones. Antes teníamos que comprobar si la variable ya tenía un valor. Ahora con ES6 se la podemos asignar según creemos la función.

/*
//ES5
function(valor) {  
    valor = valor || "foo";
}

//ES6
function(valor = "foo") { }; 
*/ 

//-------------------------------------------------------------

//Función Arrow

//La expresión de función flecha (también conocida como función flecha gruesa) dispone de una sintaxis más corta comparada con la expresión de función convencional y vincula contextualmente el valor de this. Las Funciones Flecha siempre son anónimas.


/*
// ES5
var miFuncion = function(num) {  
    return num + num;
}
// ES6
var miFuncion = (num) => num + num;

console.log(miFuncion(7))

//var dato = (false)? 2 : (true)? 'si' : 'no' ;

//console.log(dato);
*/


//-------------------------------------------------------------

//Callbacks

//Como la palabra en inglés lo indica un callback es una “llamada de vuelta” y este es un concepto importante al momento de escribir código. Es simple: llamo a una funcion y le envío por parámetro otra función (un callback) esperando que la función que llamé se encargue de ejecutar esa función callback.

// Posiblemente, tu vengas programando todo como lo haces en C#, PHP, Java y haces que tu función/método retorne algo para realizar la acción. Es lo que comunmente hacemos.

/*
function hagoAlgo() {
    return 'Hola Ramon !!';
}
console.log(hagoAlgo());
*/

//En callback hacemos algo similar, solo que pasámos una función como parámetro, y ese algo que queremos que haga lo ejecutar la función que recibe nuestro parámetro. ¿Medio confuso no?

/*
function hagoAlgo(callback) {
    callback();
}

var fun = function(){
    console.log('Hola Isaac !!');
}

hagoAlgo(fun);
*/

/*
function Sumar(a, b, callback){
    return callback(a+b);
}

document.querySelector("#operar").addEventListener('click', function(){
    var a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value),

    fun = function(r){
        console.log(`La suma de ${a} + ${b} es ${r}`);
    };

    Sumar(a, b, fun);
});
*/


//Pero callback no significa que voy a llamar cuando termino algo, simplemente puedo tener distintos callbacks que se van llamando en determinados casos. La idea es disparar eventos en las funciones que llamaron “avisando” que esta sucendiendo, por ejemplo:

/*
function haceAlgo( a, b ,callbackPaso1, callbackPaso2, callbackTermino, callbackCUarto){

        var c = 0, r, aux = a;

        while(aux>=b){

            r = aux-b;

            c++;

            aux = r;
        }

    callbackPaso1(c);

        var c2 = 0, aux = r;

        aux = aux * 100;

        while(aux>=b){

            r = aux-b;

            c2++;

            aux = r;
        }

    
    callbackPaso2(`${c},${c2}`);

    var acumulador = 0;

    for (var i = 1; i < a; i++) {
        if (a % i == 0) {
            acumulador += i;
        }
    }

    var perfecto = (acumulador==a)?'el dividendo es perfecto': 'el dividendo no es perfecto';

    callbackTermino(perfecto);

    acumulador = 0;

    for (var i = 2; i < b; i++) {
        if (b % i == 0) {
            acumulador ++;
        }
    }

    var primo = (acumulador==0)?'el divisor es primo': 'el divisor no primo';

    callbackCUarto(primo);
}

var f1 = function(quePaso){
       console.log(quePaso);
    },

    f2 = function(quePaso){
       console.log(quePaso);
    },

    f3 = function(queHizo){
       console.log(queHizo);
    };

    f4 = function(queHizo){
       console.log(queHizo);
    };


haceAlgo(9, 4, f1 , f2 , f3, f4); */


//-------------------------------------------------------------

//Filter Array

/*
var numeros = [ 10, 2, 3, 4, 9, 20, 22 ];
var	numeros_pares = [];
for (var i = numeros.length - 1; i >= 0; i--) {
	if ( numeros[i]%2 == 0 ) {
		numeros_pares.push(numeros[i]);
	}
}
//var	numeros_pares = numeros.filter(function(numero) {
	//return numero % 2 === 0;
//});
console.log(numeros_pares);
*/

//-------------------------------------------------------------

//Map Array

var numero = [ 1, 5, 6, 8];


//numero.map(callback);
/*var cuadrados = [];

for (var i = 0; i < numero.length; i++) {
	cuadrados.push(Math.pow( numero[i], 2 ));
}
console.log(cuadrados);
*/

/*
var cuadrados = numero.map( function( elem ) {
	return elem * elem;
});
console.log(cuadrados);
*/

//-------------------------------------------------------------

// forEach

/*
var numeros = [ 2, 4, 6, 8],
	array = [];

numeros.forEach(function(elemento,index,arreglo){
	array.push(Math.pow(elemento, 2));
});

console.log(array);
*/

//-------------------------------------------------------------

//Reduce

//var letras = [ "H", "O", "L", "A" ];

//console.log(letras.join(""));

/*
var palabra = letras.reduce(function(valor_actual_retornado,valor_actual,index,arreglo) {
	return valor_actual_retornado + valor_actual;
});

console.log(palabra);
*/



//-------------------------------------------------------------

//Destructuring

//Tenemos nuevas formas de asignar valores a Arrays y a Objetos.

/*
var [a, b] = ["hola", "mundo"];
console.log(a); // "hola"  
console.log(b); // "mundo"

var obj = { nombre: "Isaac", apellido: "Seijas" };  
var { nombre, apellido } = obj;  
console.log(nombre); // "Isaac"  
*/

/*
var foo = function() {  
    return ["175", "75"];
};
var [estatura, peso] = foo();  
console.log(estatura); //175  
console.log(peso); //75 
*/

//-------------------------------------------------------------

//Clases

//Ahora JavaScript tiene clases, ahora bajo el paradigma de clases, con todo lo que eso conlleva, como por ejemplo, herencia.

// Ejemplos en la carpeta POO