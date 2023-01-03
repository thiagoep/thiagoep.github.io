function encriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    // i es para que afecte tanto mayusculas como minusculas
    // g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("sinmensaje").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("copiar").style.margin = "0 0 0 35%";

    if(texto == "") {
        document.getElementById("texto2").innerHTML = "No fue ingresado ningún texto";
        document.getElementById("copiar").style.display = "none";
    }
}

function desencriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    // i es para que afecte tanto mayusculas como minusculas
    // g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufar/igm, "u");

    document.getElementById("sinmensaje").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("copiar").style.margin = "0 0 0 35%";

    if(texto == "") {
        document.getElementById("texto2").innerHTML = "No fue ingresado ningún texto";
        document.getElementById("copiar").style.display = "none";
    }
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
}

