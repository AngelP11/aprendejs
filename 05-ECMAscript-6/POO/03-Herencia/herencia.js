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


class Gato extends Animal{
	constructor( nombre, color, anios ){
		super(nombre, color, 'Miaau Miaau Miaau!!!')
		this.nombre = nombre,
		this.color = color,
		this.anios = anios
	}

	informacion(){
		return `Hola mi nombre es ${this.nombre} tengo ${this.anios} años :D`;
	}

	decirMiau(){
		return `${super.queHace()}`;
	}
}

var Ton = new Gato( 'Ton', 'Negro con blanco', 2);


console.log( Ton.informacion() );

console.log( Ton.decirMiau() );