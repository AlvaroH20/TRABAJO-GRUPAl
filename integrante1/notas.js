let estudiantes=[
    {nombre:"Edwin", apellido:"Erazo", nota1:8.4, nota2:9.5, nota3:8.7,total:26.6,promedio:8.7 },
    {nombre:"Maritza", apellido:"Rosero", nota1:5.4, nota2:8.5, nota3:9.7,total:23.6,promedio:9.7 },
    {nombre:"Esteban", apellido:"Guaranda", nota1:9.4, nota2:10, nota3:9.0,total:28.4,promedio:9.0 },
    {nombre:"Ricardo", apellido:"Batista", nota1:6.4, nota2:9.5, nota3:8.9,total:24.8,promedio:8.9 }
];

calcularTotal = function (n1, n2, n3) {
    let total;
    total = (n1 + n2 + n3);
    return total;
}
calcularPromedio = function (p1, p2, p3) {
    let promedio;
    promedio = (p1 + p2 + p3) / 3;
    return promedio.toFixed(2);
}

calcular=function(){
    
    let notaCaja1=recuperarFloat("cajaNota1");
    let notaCaja2=recuperarFloat("cajaNota2");
    let notaCaja3=recuperarFloat("cajaNota3");
    let resultacoCalcularTotal=calcularTotal(notaCaja1,notaCaja2,notaCaja3);
    mostrarTexto("sumaTotal",resultacoCalcularTotal);
    let resultadoPromedio=calcularPromedio(notaCaja1,notaCaja2,notaCaja3);
    mostrarTexto("resultadoPromedio",resultadoPromedio);
    habilitarComponente("guardar");
}
guardar=function(){

    let nombreE=recuperarTexto("cajaNombre");
    let apellidoE=recuperarTexto("cajaApellido");
    let notaCaja1=recuperarFloat("cajaNota1");
    let notaCaja2=recuperarFloat("cajaNota2");
    let notaCaja3=recuperarFloat("cajaNota3");
    let totalSuma=calcularTotal(notaCaja1,notaCaja2,notaCaja3);
    let promedioE=calcularPromedio(notaCaja1,notaCaja2,notaCaja3);
    if(nombreE==""||nombreE.length<3){
        mostrarTexto("erroresN","CAMPO OBLIGATORIO");
     
    }else{
        let estudiante={}
    estudiante.nombre=nombreE;
    estudiante.apellido=apellidoE;
    estudiante.nota1=notaCaja1;
    estudiante.nota2=notaCaja2;
    estudiante.nota3=notaCaja3;
    estudiante.total=totalSuma;
    estudiante.promedio=promedioE;

    estudiantes.push(estudiante);
    mostrarEstudiantes();
    habilitarComponente("guardar");
    alert("Notas guardadas con exito");
    limpiar();
    }
    
    
}

mostrarEstudiantes=function(){
    let cmpTabla=document.getElementById("tablita");
    let contenidoTabla="";
    let elementoPersona;
    contenidoTabla="<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>NOTA1</th>"+
    "<th>NOTA2</th>"+
    "<th>NOTA3</th>"+
    "<th>TOTAL</th>"+
    "<th>PROMEDIO</th>"+
    "</tr>"
    for(i=0;i<estudiantes.length;i++){
        elementoPersona=estudiantes[i]
        contenidoTabla+=
        "<tr><td>"+elementoPersona.nombre+"</td>"+"<td>"+elementoPersona.apellido+"</td>"+
        "<td>"+elementoPersona.nota1+"</td>"+
        "<td>"+elementoPersona.nota2+"</td>"+
        "<td>"+elementoPersona.nota3+"</td>"+
        "<td>"+elementoPersona.total+"</td>"+
        "<td>"+elementoPersona.promedio+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla; //el inner no te olvides
}

inicio=function(){
    deshabilitarComponente("guardar");
    mostrarEstudiantes();
}

limpiar=function(){
    mostrarTextoEnCaja("cajaNombre","");
    mostrarTextoEnCaja("cajaApellido","");
    mostrarTextoEnCaja("cajaNota1","");
    mostrarTextoEnCaja("cajaNota2","");
    mostrarTextoEnCaja("cajaNota3","");
    deshabilitarComponente("guardar");
}