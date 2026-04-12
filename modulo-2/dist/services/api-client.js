"use strict";
// Interfaz que define la forma de cualquier respuesta de la API
// Función genérica que simula una llamada a base de datos
async function obtenerRecurso(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                codigoEstado: 200,
                exito: true,
                datos: {},
            });
        }, 1000);
    });
    // 1. Funcion asíncrona; 
    // 2. Promise... (promete una respuestaAPI en el futuro); 
    // 3. setTimeout (simula tiempo de base de datos); 
    // 4. resolve (cuando pasa el timpo simulado, entrega el resultado)
    // 5. {} as t (respuesta de base de datos)
}
