"use strict";
// INTERFACES Y UNIONES
// GENERAR REPORTE
function generarReporte(estado) {
    switch (estado.tipo) {
        // en caso de... devolver... (utilizando los estados de las imterfaces)
        case "ACTIVA":
            return "Matricula activa con" + estado.asignaturas.length + " asignaturas";
        case "SUSPENDIDA":
            return "La matricula se encuentra suspendida debido a: " + estado.motivo;
        case "FINALIZADA":
            return "La nota media del alumno es: " + estado.notaMedia;
    }
}

