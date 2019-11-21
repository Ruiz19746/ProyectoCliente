function mostrarDatos() {
    var nombreUsua = document.sesion.usuario.value;
    var contraUsua = document.sesion.contra.value;
    alert(nombreUsua + " " + contraUsua);
}
debugger

var Ancho = screen.width;
var Alto = screen.height;
var A = Ancho * 50 / 100;
var H = Alto * 50 / 100;
var difA = Ancho - A;
var difH = Alto - H;
var tope = difH / 2;
var lado = difA / 2;
var Opciones = "status=no, menubar=no, directories=no, location=no, toolbar=no, scrollbars=yes, resizable=no, width=" + A + ", height=" + H + ", top=" + tope + ", left=" + lado + "";

var vRegistro;

function registrarse() {
    vRegistro = window.open('https://ruiz19746.github.io/ProyectoCliente/registro.html', 'Registrarse', Opciones);
}
var nombre;
var contra;
vRegistro = vRegistro;

function guardarDatos() {
    debugger;
    nombre = document.unirse.nombre.value;
    contra = document.unirse.contra.value;
    alert(nombre + contra)
    vRegistro.close();

}
if (vRegistro.closed) { window.alert('este es el nombre del registrado' + nombre); }