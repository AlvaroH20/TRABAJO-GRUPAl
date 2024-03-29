
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}

esMayuscula=function(caracter){
    let codigoAs;
    codigoAs=caracter.charCodeAt(0);
    if(codigoAs>=65 && codigoAs<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if((valorAscii>=95 && valorAscii<=122)||(valorAscii>=130 && valorAscii<=163)){
        return true;
    }else{
        return false;
    }
}
esDigito = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if((valorAscii>=48 && valorAscii<=57)){
        return true;
    }else{
        return false;
    }
}
esGuion = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if((valorAscii>=45 || valorAscii<=95)){
        return true;
    }else{
        return false;
    }
}
esCaracter = function (caracter){
    let valorCaracter = caracter.charAt(0);
    if (valorCaracter == '*' || valorCaracter == '-' || valorCaracter == '_' ) {
        return true;
    } else {
        return false;
    }
};