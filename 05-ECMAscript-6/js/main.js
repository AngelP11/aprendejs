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

/* Además, podemos combinar el destructuring con el spread operator para hacer una
asignación como la siguiente: */

/* var a, b, iterableObj;
[a, b, ...iterableObj] = [1, 2, 3, 4, 5];

console.log(a,b, iterableObj); */

//------------------------------------------------------------

//Parámetros Rest

/* Hasta ahora, cuando pasábamos argumentos a una f unción, se añadía una variable
arguments que incluía todos los parámetros (def inidos o no) que había recibido nuestra
f unción. */

// ES5
/* function printName (name){
    var length = arguments.length;
    var fullName = name;
    if(length > 1){
        for(var i=1; i< length; i++){
            fullName += ' ' + arguments[i];
        }
    }
    console.log(fullName);
};

printName('Felipe'); // Felipe
printName('Felipe', 'Juan', 'Froilan'); //Felipe Juan Froilan
*/

/* Los parámetros Rest nos proporcionan una manera de pasar un conjunto
indeterminado de parámetros que la función agrupa en forma de Array. Como detalle (de
lógica), solo puede ser parámetro rest el último argumento de la función. Veamos mejor a
qué me refiero. */

/* // ES6
function printName(name, ...fancyNames){
    var fullName = name;
    fancyNames.forEach(fancyN => fullName += ' ' + fancyN);
    console.log(fullName);
};
printName('Felipe'); // Felipe
printName('Felipe', 'Juan', 'Froilan'); //Felipe Juan Froilan */

//-------------------------------------------------------------

/* Operador de propagación (Spread operator)

El spread operator lo que nos permite es pasar un array de elementos a una f unción,
convirtiendo cada uno de los elementos en un argumento. Se podría pensar en el spread
operator como la versión inversa de los parámetros rest. 
Lo vemos mejor con un ejemplo.

Antes (en ES5), para pasar un array de elementos a una f unción como parámetros,
usaríamos el método apply del siguiente modo: */

//ES5
/* function f(x, y, z) { console.log(x, y, z) }
var args = [0, 1, 2];
f.apply(null, args); */

/* Ahora en cambio lo podemos hacer poniendo 3 puntos delante del array, es decir, usando el
spread operator: */

//ES6
/* function f(x, y, z) { console.log(x, y, z) }
var args = [0, 1, 2];
f(...args); */

/* Además, cualquier argumento puede aprovecharse de esta característica, con lo que
podríamos sacar ventaja para cosas como las siguientes: */

//ES6
//example1
/* function f(v, w, x, y, z) { console.log(v, w, x, y, z) }
var args = [0, 1];
f(-1, ...args, 2, ...[3]); */

//example2
/* var parts1 = ['shoulder', 'knees'];
var parts2 = ['chest', 'waist'];
var lyrics = ['head', ...parts1, ...parts2, 'and', 'toes'];

console.log(lyrics); */

//lyrics = ['head', 'shoulder', 'knees', 'chest', 'waist', 'and', 'toes'];


//-------------------------------------------------------------

/* For ... of loop

El for...of loop nos permite crear un bucle de iteración a través de colecciones (Array,
string, Map, Set, ...). Este tipo de bucle es equivalente al que podríamos hacer con un
forEach, pero la sintaxis es más similar a bucles for en otros lenguajes, como por ejemplo
Python. */

//ES5
/* var numbers = [1,2,3,4,5];
numbers.forEach(function(value) {
    console.log(value);
});
//1, 2, 3, 4, 5
 */

//ES6
/* var numbers = [1,2,3,4,5];
for(let item of numbers){
    //remember let is useful to define local vars
    console.log(item);
}; */
//1, 2, 3, 4, 5

//ES6
/* var word = "foo";
for(let item of word){
    console.log(item);
}; */
//"f", "o", "o"

/* La principal diferencia entre for...in y for...of es que el
primero itera entre todas las propiedades enumerables de un objeto, mientras que el segundo no funciona con todos los
objetos, sino que es especifico de colecciones, es decir, solo
itera sobre los elementos de cualquier colección que
contenga la propiedad Symbol.iterator */

//ES6
/* let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
    console.log(i); // logs 0, 1, 2, "foo"
}

for (let i of iterable) {
    console.log(i); // logs 3, 5, 7
} */

//-----------------------------------------------------------------------------

/* Block level function declarations

Con ES6 podemos declarar f unciones a nivel de bloque de f orma segura (ES5 lo
desaconsejaba, por que sus scopes está diseñados a nivel de f unción).


Si miramos el siguiente ejemplo, veremos que en ES5 el log de f () siempre es 2: */
//ES5
/* function f() { return 1; }
{
    console.log(f()); // 2
function f() { return 2; }
    console.log(f()); // 2
}
console.log(f()); // 2 */

/* Lo que está pasando es que las llaves no crean un scope nuevo, 
y por tanto la f unción f () se redef ine para el scope global. */


/* En cambio, si hacemos lo mismo en ES6, vemos que f () devuelve el valor 2 dentro de las
llaves, pero el valor 1 f uera. */
//ES6

/* function f() { return 1; }
{
    console.log(f()); // 2
function f() { return 2; }
    console.log(f()); // 2
}
console.log(f()); // 1
 */

/* Esto es por que en ES6, como en muchos otros lenguajes de programación, el bloque que
se def ine entre llaves genera un nuevo scope (block scope).
 */

 //------------------------------------------------------------

//Generadores

/* Los generadores son f unciones de las que se puede salir y volver a entrar y que conservan
su contexto entre las reentradas. Así de primeras parece extraño, pero no lo es tanto, si
vemos a los generadores como una herramienta para construir iteradores.

Un generador se declara con f unction* (la palabra clave f unction seguida de una asterisco).
También se pueden def inir f unciones generadoras usando el constructor
GeneratorFunction y una f unction* expression.

La llamada a una f unción generadora no se ejecuta inmediatamente, sino que
devuelve un objeto iterador. Cuando llamamos al metodo next() del iterador, se ejecuta
el cuerpo de la f unción hasta la primera expresión yield, que determina el valor a devolver (o
se delega con yield* a otro generador).
El método next() devuelve un objeto con 2 propiedades:

__ value: El valor que devuelve la expresión yield
__ done: Indica si es el último yield del generador.

Vamos a clarif icarlo con un ejemplo, donde aprovechamos para recordar también algo de
destructuring: */

/* function* idMaker(){
    
    var index = 0;
    
    while(index < 3)
        yield index++;
    
    yield "end";

}

var gen = idMaker();

while(true){
    let {value, done} = gen.next();
    if(done)
        break;
    console.log(value);
}
// 0, 1, 2, end */

/* Para completar el tema de los generadores, vamos a ver un ejemplo de un generador que
ref erencia a otro con yield*. Además, aprovecho para recordar que al devolver un iterador,
puede aprovecharse del bucle f or...of : */

/* var anotherGenerator = function*(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i){
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

for(let val of generator(10)){
    console.log(val);
}
//10, 11, 12, 13, 20 */


//-------------------------------------------------------------

//Mapas y Sets

/* ES6 incorpora 4 nuevas estructuras de datos, que son Map, WeakMap, Set y WeakSet. Si
has trabajado con lenguajes como Java o Python ya te harás una idea de para que sirven.
Vamos a repasarlos. */


/* Map
El objecto Map nos permite relacionar (mapear) unos valores con otros como si fuera un
diccionario, en formato clave/valor. Cualquier valor (tanto objetos como valores
primitivos) puede ser usados como clave o valor. */

/* Los Maps nos permiten, por ejemplo, saber de inmediato si existe una clave o borrar un par
clave/valor concreto: */

//ES6
/* let map = new Map();
    map.set('foo', 123);

let user = {userId: 1};

console.log(
    map.set(user, 'Alex'),
    map.get('foo'), //123
    map.get(user), //Alex
    map.size, //2
    map.has('foo'), //true
    map.delete('foo'), //true
    map.has('foo'), //false
    map.clear(),
    map.size //0
) */

/* Además, podemos crear Maps a partir de un array de pares: */

/* map = new Map([['user1','Alex'], ['user2', 'Vicky'], ['user3', 'Enrique']]);
for(let [key, value] of map){
    console.log(key, value);
}
//"user1" "Alex"
//"user2" "Vicky"
//"user3" "Enrique"
map.keys(); //iterator with keys
map.values(); //iterator with values
map.entries(); //iterator with pair [key, value] */






//-------------------------------------------------------------

//Clases

//Ahora JavaScript tiene clases, ahora bajo el paradigma de clases, con todo lo que eso conlleva, como por ejemplo, herencia.

// Ejemplos en la carpeta POO