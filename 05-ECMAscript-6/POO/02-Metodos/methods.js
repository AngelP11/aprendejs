class Animal {

	constructor( nombre, color, comoHace){
		this.nombre = nombre,
		this.color = color,
		this.comoHace = comoHace
	}

	queHace(){
		console.log(this.comoHace);
	}
	
}

var perro = new Animal( 'Guardian', 'Marron', 'Guaau Guaau Guaau!!!');

console.log( perro );

perro.queHace();