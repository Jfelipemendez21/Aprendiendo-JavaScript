class Celular {
    constructor(color, peso, tamaño, rc, ram) {
        this.color = color
        this.peso = peso
        this.tamaño = tamaño
        this.rc = rc
        this.ram = ram
        this.encendido == false
    }
    Prender() {
        if (this.encendido == false) {
            alert("celular encendico")
            this.encendido == true;
        } else {
            alert("celular apagado")
        }

    }

    Apagar() {
        if (this.encendido == true) {
            alert("celular apagado")
            this.encendido == false;
        } else {
            alert("el celular ya esta apagado")
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("el celular se esta reiniciando");
        } else {
            alert("el celular esta apagado")
        }
    }
    tomarFotos() {
        alert(`foto todama en resolucion de: ${this.rc}`)
    }
    grabarVideo() {
        alert(`Grabando video en ${this.rc}`)
    }

}
celular1 = new Celular (rojo, 150, 7, "full hd", "4 gb");
celular1.Prender()
celular1.grabarVideo()
celular1.reiniciar()
celular1.tomarFotos()
celular1.Apagar()