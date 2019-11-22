// variables

var socios = new Array();

var miembro = new socio("admin ", "admin", "admin", "admin@gmail.com", "admin", "04/01/1971");
socios[0] = miembro;

var miembro = new socio("Gustavo ", "Ponce Salazar ", "Gussy1820", "gussy@gmail.com", "gussy", "11/02/1998");
socios[1] = miembro;
miembro = new socio("Astrid", "Ruiz Zerda", "Lanie98", "lanie@gmial.com", "lanie", "27/12/1998");
socios[2] = miembro;

var nombreNuevoUsua;
var apellidoNuevoUsua;
var nomUsuaNuevoUsua;
var fechaNacNuevoUsua;
var emailNuevoUsua;
var contraNuevoUsua;
var repetirContraNuevoUsua;

var anchoP = screen.width;
var altoP = screen.height;
var ancho = anchoP * 50 / 100;
var alto = altoP * 50 / 100;
var diferenciaAncho = anchoP - ancho;
var diferenciaAlto = altoP - alto;
var mitadAltura = diferenciaAlto / 2;
var MitadAncho = diferenciaAncho / 2;
var posPantalla = "width=" + ancho + ", height=" + alto + ", top=" + mitadAltura + ", left=" + MitadAncho + "";

var vRegistro;

// crear ventana secundaria
function registrarse() {
    vRegistro = window.open('https://ruiz19746.github.io/ProyectoCliente/registro.html', 'Registrarse', posPantalla);
    debugger;
}

function socio(nombre, apellidos, nombreUsuario, email, contrasenya, fechaNacimiento) {
    this.nombreUsua = nombre;
    this.apellidosUsua = apellidos;
    this.usuario = nombreUsuario;
    this.emailUsua = email;
    this.contraUsua = contrasenya;
    this.edad = calcularEdad(fechaNacimiento);
}
// funcion de calcular la edad que es llamada en el control de usuario
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
        socios.push(miembro);
    }
}


// alert(socios[socios.length - 1].nombreUsua)
/**/


// control de usuario 




// https://ruiz19746.github.io/ProyectoCliente/registro.html