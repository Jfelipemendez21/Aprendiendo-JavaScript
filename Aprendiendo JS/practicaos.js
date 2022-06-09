var valores = new Array(true, 5, false, "hola", "adios", 2);

// for(i=0;i<6;i++){
//     document.write(valores[i]);
// }
var num_uno = valores[1];
var num_dos = valores[5];


function suma(a, b) {
    document.write("<br>");
    return document.write(a + "+" + b + "=" + (a + b));
}
suma(num_uno, num_dos);

function resta(a, b) {
    document.write("<br>");
    return document.write(a + "-" + b + "=" + (a - b));
}
resta(num_uno, num_dos);

function mul(a, b) {
    document.write("<br>");
    return document.write(a + "*" + b + "=" + (a * b));
}
mul(num_uno, num_dos);

function div(a, b) {
    document.write("<br>");
    return document.write(a + "/" + b + "=" + (a / b));
}
div(num_uno, num_dos);