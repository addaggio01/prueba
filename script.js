function encriptar(){

var texto = document.getElementById("inputTexto").value.toLocaleLowerCase();

//i es para que afecte tanto mayusculas como minusculas
//g es para toda la linea u oración
//m es para que afecte multiples lineas o parrafos

var txtCifrado = texto.replace(/e/img,"enter");
var txtCifrado = txtCifrado.replace(/o/img,"ober");
var txtCifrado = txtCifrado.replace(/i/img,"imes");
var txtCifrado = txtCifrado.replace(/a/img,"ai");
var txtCifrado = txtCifrado.replace(/u/img,"ufat");

document.getElementById("imgDer").style.displaly = "none";
document.getElementById("texto").style.display = "none";
document.getElementById("imgDer").style.display = "none";
document.getElementById("texto2").innerHTML = txtCifrado;
document.getElementById("copiar").style.display = "show";
document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){

    var texto = document.getElementById("inputTexto").value.toLocaleLowerCase();
    
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea u oración
    //m es para que afecte multiples lineas o parrafos
    
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";    
    }

    function copy(){

        var contenido = document.querySelector("#texto2");
        contenido.select();
        document.execCommand("copy");
        alert("Copiado");
    }