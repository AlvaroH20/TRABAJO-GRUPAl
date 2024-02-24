let estudiantes = [
    {
        nombre: "Edwin",
        apellido: "Erazo",
        nota1: 8.4,
        nota2: 9.5,
        nota3: 8.7,
        total: 26.6,
        promedio: 8.7
    },
    {
        nombre: "Maritza",
        apellido: "Rosero",
        nota1: 5.4,
        nota2: 8.5,
        nota3: 9.7,
        total: 23.6,
        promedio: 9.7
    },
    {
        nombre: "Esteban",
        apellido: "Guaranda",
        nota1: 9.4,
        nota2: 10.0,
        nota3: 9.0,
        total: 28.4,
        promedio: 9.0
    },
    {
        nombre: "Ricardo",
        apellido: "Batista",
        nota1: 6.4,
        nota2: 9.5,
        nota3: 8.9,
        total: 24.8,
        promedio: 8.9
    }
]


calcularTotal = function (n1, n2, n3) {
    let total
    total = n1 + n2 + n3

    return total
}

calcularPromedio = function (p1, p2, p3) {
    let promedio
    promedio = (p1 + p2 + p3) / 3


    return promedio

}

calcular = function () {
    let nota1
    let nota2
    let nota3
    let total
    let promedio

    nota1 = recuperarFloat("txtNota1")
    nota2 = recuperarFloat("txtNota2")
    nota3 = recuperarFloat("txtNota3")

    total = calcularTotal(nota1, nota2, nota3)

    mostrarTexto("total", total)

    promedio = calcularPromedio(nota1, nota2, nota3)

    mostrarTexto("promedio", promedio)
    habilitarComponente("btnGuardar")


}

guardar = function () {
    let nombre
    let apellido
    let nota1
    let nota2
    let nota3
    let total
    let promedio
    let estudiante = {}

    nombre = recuperarTexto("txtNombre")
    apellido = recuperarTexto("txtApellido")
    nota1 = recuperarFloat("txtNota1")
    nota2 = recuperarFloat("txtNota2")
    nota3 = recuperarFloat("txtNota3")

    total = calcularTotal(nota1, nota2, nota3)

    promedio = calcularPromedio(nota1, nota2, nota3)

    if (apellido.length < 4 ) {
        mostrarTexto("errorApellido", "Debe tener al menos 4 caracteres")
    } else {
        estudiante.nombre = nombre
        estudiante.apellido = apellido
        estudiante.nota1 = nota1
        estudiante.nota2 = nota2
        estudiante.nota3 = nota3
        estudiante.total = total
        estudiante.promedio = promedio
        estudiantes.push(estudiante)

        alert("NOTAS GUARDADAS CON ÉXITO")
        limpiar()
        console.log(estudiantes)
        deshabilitarComponente("btnGuardar")

        mostrarTabla()
    }




}
mostrarTabla = function () {

    let estudiante
    let contenidoTabla
    let componenteTabla = document.getElementById("tablaEstudiantes")

    contenidoTabla = "<table>" +
        "<tr><th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>NOTA1</th>" +
        "<th>NOTA2</th>" +
        "<th>NOTA3</th>" +
        "<th>TOTAL</th>" +
        "<th>PROMEDIO</tr>"

    for (let i = 0; i < estudiantes.length; i++) {
        estudiante = estudiantes[i]
        contenidoTabla += "<tr><td>" + estudiante.nombre + "</td>"
        contenidoTabla += "<td>" + estudiante.apellido + "</td>"
        contenidoTabla += "<td>" + estudiante.nota1 + "</td>"
        contenidoTabla += "<td>" + estudiante.nota2 + "</td>"
        contenidoTabla += "<td>" + estudiante.nota3 + "</td>"
        contenidoTabla += "<td>" + estudiante.total + "</td>"
        contenidoTabla += "<td>" + estudiante.promedio + "</td></tr>"
    }
    contenidoTabla += "</table>"

    componenteTabla.innerHTML = contenidoTabla
}

onload = function () {
    mostrarTabla()
    deshabilitarComponente("btnGuardar")
}

limpiar = function () {
    mostrarTextoEnCaja("txtNombre", "")
    mostrarTextoEnCaja("txtApellido", "")
    mostrarTextoEnCaja("txtNota1", "")
    mostrarTextoEnCaja("txtNota2", "")
    mostrarTextoEnCaja("txtNota3", "")
    mostrarTexto("total", 0.0)
    mostrarTexto("promedio", 0.0)
}