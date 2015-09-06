function saludo(nombre) {
    alert("Hola " + nombre);
}

function llamadoFuncion(funcion) {
    funcion("pepito");
}

function menuMouseOver() {
    this.children[1].className = "";
}

function menuMouseLeft() {
    this.children[1].className = "oculto";
}


window.onload = function () {

    var opcionesPrincipales = document.getElementsByClassName("opcionPrincipal");

    for (var i = 0; i < opcionesPrincipales.length; i++) {
        opcionesPrincipales[i].addEventListener("mouseover", menuMouseOver);
        opcionesPrincipales[i].addEventListener("mouseout", menuMouseLeft);
    }
}



