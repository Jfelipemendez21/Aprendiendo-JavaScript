//El forEach sirve practicamente igual que un sitio for pero optimiza recursos 



//--------------------------------------------------
//nos permite iterar igual que el for normal 
var array = ['a','b','c','d']; //definimos arreglo
array.forEach (function (element, index, arreglo){ // implementamos el forEach con una funcion que va a tener como parametros, el iterador, los elementos del arreglo y el arreglo en si
//en esta parte imprimimos cada parametro individualmente
console.log(element); 
console.log(index);
console.log(arreglo);

}); 
