//del ejercicio anterior "ninja"

class Ninja {
    constructor(nombre, salud, _velocidad, _fuerza, ) {
        this.nombre = nombre;
        this.salud = salud;
        this._velocidad = 3;
        this._fuerza = 3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(this._fuerza, this._velocidad, this.salud)
    }
    drinkSake(){
        this.salud += 10;
    }
}  

//super ninja

class Sensei extends Ninja {
    constructor(salud, _velocidad,_fuerza, sabiduría) {
        this.salud = 200;
        this._velocidad = 10;
        this._fuerza = 10;
        this.sabiduría = 10;
    }
    speakWisdom(drinkSake) {
        drinkSake()
        console.log('Antes de las flores, comida.')
    }      
}