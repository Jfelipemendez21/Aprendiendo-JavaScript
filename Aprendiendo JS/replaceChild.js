const contenedor = document.querySelector(".contenedor"); //seleccionamkos el elemento padre

const h2_nuevo = document.createElement("H2"); //se crea un elemento hijo
h2_nuevo.innerHTML = "titulo"; //se le agrega un contenido al elemento nuevo
h2_antiguo = documeny.querySelector(".h2"); //seleccionamos el elemento con clase "h2"

contenedor.replaceChild(h2_nuevo,h2_antiguo); //para luego reemplazarlo por el nuevo elemento hijo 
