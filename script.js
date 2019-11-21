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
}

function calcularEdad(fcha) {
    var fchActual = new Date();
    var fchNacimiento = fcha;
    var fecha = fchNacimiento.split("/")
    var dia = fecha[0];
    var mes = fecha[1];
    var anyo = fecha[2];
    var fNac = new Date(mes + "," + dia + "," + anyo);
    var edad;

    edad = fchActual.getUTCFullYear() - fNac.getFullYear();

    return edad;
}

function socio(nombre, apellidos, nombreUsuario, email, contrasenya, fechaNacimiento) {
    this.nombreUsua = nombre;
    this.apellidosUsua = apellidos;
    this.usuario = nombreUsuario;
    this.emailUsua = email;
    this.contraUsua = contrasenya;
    this.edad = calcularEdad(fechaNacimiento);
}
var socios = new Array();
numUsuario = 0;

var miembro = new socio("Gustavo ", "Ponce Salazar ", "Gussy1820", "gussy@gmail.com", "gussy", "11/02/1998");
socios[numUsuario] = miembro;
miembro = new socio("Astrid", "Ruiz Zerda", "Lanie98", "lanie@gmial.com", "lanie", "27/12/1998");
socios[numUsuario + 1] = miembro;

function mostrarSocio() {
    debugger;
    alert(socios[0].edad);
}