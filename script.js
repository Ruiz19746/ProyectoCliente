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

function registrarse() {
    var vRegistro = window.open('E:/2º DAW/Entorno cliente/1 EVA/Proyecto integrado/ProyectoCliente/registro.html', 'Registrarse', Opciones);
}