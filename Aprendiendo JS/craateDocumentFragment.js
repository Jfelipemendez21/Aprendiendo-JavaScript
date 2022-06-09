const contendor = document.querySelector (".contenedor");
const fragmento = document.createDocumentFragment(); //Crea un nuevo DocumentFragment vacio, dentro del cual un nodo del DOM puede ser adicionado para construir un nuevo arbol DOM fuera de pantalla

for (i= 0; i<20; i++){
const item = document.createElement ("LI") //creamos un elemento html
item.innerHTML = ("Este es un item de la lista"); //nos trae el contenido html del elemento creado
fragmento.appendChild (item); // dentro del documentFragment que habiamos creado se inserta el elemento "item" creado anteriormente 
}
contenedor.appendChild(fragmento); //se mete la variable fragmento(los elementos creados) dentro de la etiqueta con clase "contenedor"
  
