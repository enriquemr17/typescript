// INTERFACES Y UNIONES

interface Estudiante {
  readonly id: string; // inmutable tras su creacion
  nombreCompleto: string; 
  email: string; 
  fechaNacimiento: Date; 
  curso: number; 
  fechaUltimoAcceso?: Date;  // propiedad opcional  
}

interface Asignatura {
    readonly id: string; 
    nombre: string; 
    creditos: number; 
    profesor?: string; 
}

// UNION DISCRIMINADA

interface MatriculaActiva {
    tipo: "ACTIVA"; 
    asignaturas: Asignatura []; 
}

interface MatriculaSuspendida {
    tipo:"SUSPENDIDA"; 
    motivo: string; 
}

interface MatriculaFinalizada{
    tipo:"FINALIZADA"; 
    notaMedia: number; 
}

type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada; 

// GENERAR REPORTE

function generarReporte (estado: EstadoMatricula): string {
    switch(estado.tipo) {
    // en caso de... devolver... (utilizando los estados de las imterfaces)
    case "ACTIVA": 
        return "Matricula activa con" + estado.asignaturas.length + " asignaturas"; 
    
    case "SUSPENDIDA":
        return "La matricula se encuentra suspendida debido a: " + estado.motivo;
        
    case "FINALIZADA": 
        return "La nota media del alumno es: " + estado.notaMedia; 
    
    // COMPROBACION NUEVOS "SWITCHS" (never fuerza un error de compilacion)

    default: 
    const comprobacionExhaustiva: never = estado; 
    throw new Error(`Estado no manejado: ${comprobacionExhaustiva}`)
    
    
    }
}