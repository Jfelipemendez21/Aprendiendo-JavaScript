class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = ` Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}. `; 


    }
    verInfor() {
        document.write(this.info+"<br>"); 

    }
} const perro = new animal('pitbull','11', 'gris con blanco'); 
const gato = new animal('siames','8', 'negro'); 
const pajaro = new animal('loro','2', 'verde'); 

perro.verInfor();
gato.verInfor();
pajaro.verInfor(); 
