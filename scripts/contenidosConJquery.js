$(document).ready(function () {
    //var boton = document.getElementById("adicionar");

    //if (boton.addEventListener) {
    //    boton.addEventListener("click", eventoClick);
    //}
    //else {
    //    boton.attachEvent("onclick", eventoClick);
    //}

    $("#adicionar").on("click", eventoClick);
});


function eventoClick() {
    /*
    var tabla = $("#contenidos");

    var fila = tabla.insertRow(tabla.rows.lenght);
    var columna1 = fila.insertCell(0);
    var columna2 = fila.insertCell(1);
    var columna3 = fila.insertCell(2);
    var columna4 = fila.insertCell(3);
    */
    var nombreProyecto = document.getElementById("nombreProyecto").value;
    var fecha = document.getElementById("fechaElaboracion").value;
    var descripcion = document.getElementById("descripcion").value;
    var url = document.getElementById("url").value;
/*
    columna1.innerHTML = nombreProyecto;
    columna2.innerHTML = fecha;
    columna3.innerHTML = descripcion;

    var etiquetaA = document.createElement("a");
    etiquetaA.href = url;
    etiquetaA.innerHTML = "ir a " + url;

    columna4.appendChild(etiquetaA);
*/
    var fila = "<tr><td>" + nombreProyecto + "</td><td>" + fecha + "</td><td>" + descripcion + "</td><td>" +  + "</td></tr>"
    $("#contenidos tr:last").after(fila);

    document.getElementById("nombreProyecto").value = "";
    document.getElementById("fechaElaboracion").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("url").value = "";

    document.getElementById("nombreProyecto").focus();
}
