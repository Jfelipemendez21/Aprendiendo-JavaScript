//el map lo que hace es transformar los elementos de un array

// const numeros =[3,5,6,7];
// const dobles = numeros.map(function(elementoAtransformar, posicion, arrayOriginal){
//    return elementoAtransformar, posicion, arrayOriginal
// })




const numeros=[12,34,456,234];
const dobles= dobles = numeros.map((numero)=>{
return numero*2;
})




//-----------------------------------------------------------------------------------------------------



//filter sirve para tomar cada elemento de un array y guardarlo en otro si cumple con determinadas condiciones


const productos=[
    {id: '1234',nombre:'camiseta', precio:965},
    {id: '3456', nombre:'zapatillas', precio:1755},
    { id: '5678', nombre:'pantalon', precio:355}
];
const esBarato= producto => producto.precio<1000; 
const productosBaratos= productos.filter(esBarato);  
