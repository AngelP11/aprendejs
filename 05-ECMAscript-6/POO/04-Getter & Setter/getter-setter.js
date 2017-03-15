class Isaac{

	get nombre(){
		return this._nombre;	
	}

	set nombre(nombre){
		this._nombre = nombre;
	}

}

var person = new Isaac();

person.nombre = "Isaac";
console.log(`Hola soy ${person.nombre}`);