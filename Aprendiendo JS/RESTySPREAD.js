// REST sirve para pasarle a una funcion un numero indefinido de elementos
const mostrarDatos = (...datos)=>{
  console.log(datos);
}

mostrarDatos('Carlos', 23, 'carlos@gmail');

// SPREAD sirve para pasar parametros a un rest desde un arreglo o otro lado que no sea directamente en la funcion

const mostrarDatos2 = (...datos)=>{
  console.log(datos);
}
const arregloDatos = ['Juan', 33, 'carlos@gmail'];
mostrarDatos2(...arregloDatos);
