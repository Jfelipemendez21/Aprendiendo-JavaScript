
// abre un url en otra ventana
let youtubeUrl =("https://youtu.be/xOinGb2MZSk");
window.open(youtubeUrl);
// cierra la ventana abierta previamente 
window.close(youtubeUrl);
// verifica si la ventana esta cerrada o no
window.closed;
// se detiene la ventana
window.stop;
// imprime la pagina 
window.print;
 //se usa para confirmar una accion 
window.confirm("estas seguro que desea salir del sitio web? ");
// devuelve una referencia al objeto de pantalla asociado con la ventana
const screen = window.screen;
console.log(screen);
document.write(screen.availHeight);
// devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla
const screenLeft= window.screenLeft; 
// devuelve la distancia vertical entre el vborde su´perior del navegador y el borde superior de la pantalla 
const screenTop= window.screenTop; 
document.write(`left: <br>${screenLeft}</br><br>
Top: <br>${screenTop}</br><br>
`);
// devuelve el numero de pixeles que el documento se desplaza actualmente de forma horizontal
const scrollX= window.scrollX;
alert(scrollX);
// devuelve el numero de pixeles que el documento se desplaza actualmente de forma verticalmente
window.scrollY(); 
// desplaza la ventana a un lugar particular en el documento ()con options y con posiciones)
window.scroll; 
 

// devuelve el url de la pagina
const href= window.location.href; 
document.write(href);
// devuelve el nombre del dominio de servidor web 
window.location.hostname; 
// devuelve la ruta y el nombre de archivo de la pagina actual
window.location.pathname;
// devuleve el protocolo web usado http o https
window.location.protocol;
// para cargar un nuevo documento 
window.location.assign(); 
