var socios = new Array();
numUsuario = 0;

var miembro = new socio("Gustavo ", "Ponce Salazar ", "Gussy1820", "gussy@gmail.com", "gussy", "11/02/1998");
socios[numUsuario] = miembro;
miembro = new socio("Astrid", "Ruiz Zerda", "Lanie98", "lanie@gmial.com", "lanie", "27/12/1998");
socios[numUsuario++] = miembro;




function mostrarDatos() {
    var nombreUsua = document.sesion.usuario.value;
    var contraUsua = document.sesion.contra.value;
    alert(nombreUsua + " " + contraUsua);
}


var Ancho = screen.width;
var Alto = screen.height;
var A = Ancho * 50 / 100;
var H = Alto * 50 / 100;
var difA = Ancho - A;
var difH = Alto - H;
var tope = difH / 2;
var lado = difA / 2;
var Opciones = "width=" + A + ", height=" + H + ", top=" + tope + ", left=" + lado + "";

var vRegistro;

function registrarse() {
    vRegistro = window.open('https://ruiz19746.github.io/ProyectoCliente/registro.html', 'Registrarse', Opciones);
}
var nombreNuevoUsua;
var apellidoNuevoUsua;
var nomUsuaNuevoUsua;
var fechaNacNuevoUsua;
var emailNuevoUsua;
var contraNuevoUsua;
var repetirContraNuevoUsua;
/* */
function guardarDatos() {
    nombreNuevoUsua = document.unirse.nombre.value;
    apellidoNuevoUsua = document.unirse.apellido.value;
    nomUsuaNuevoUsua = document.unirse.usuario.value;
    fechaNacNuevoUsua = document.unirse.fchNac.value;
    emailNuevoUsua = document.unirse.email.value;
    contraNuevoUsua = document.unirse.contra.value;
    repetirContraNuevoUsua = document.unirse.contraRepetida.value;

    if (contraNuevoUsua == repetirContraNuevoUsua) {
        debugger;

        miembro = new socio(nombreNuevoUsua, apellidoNuevoUsua, nomUsuaNuevoUsua, emailNuevoUsua, contraNuevoUsua, fechaNacNuevoUsua);

    }
}
socios[socios.length] = miembro;
alert(socios[socios.length - 1].nombreUsua)
    /**/
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

// function mostrarSocio() {
//     debugger;
//     alert(socios[0].edad);
// }

function inicioSesion() {
    var existe = false;
    var pos = 0;

    debugger;

    for (var i = 0; i < socios.length; i++) {
        if (socios[i].usuario == document.sesion.usuario.value) {
            existe = true;
            pos = i;
        }
    }

    if (existe) {
        if (socios[pos].contraUsua == document.sesion.contra.value) {
            alert("BIENVENIDO");
        } else {
            alert("La contraseña es incorrecta");
        }
    } else {
        alert("Ese usuario es incorrecto");
    }
}