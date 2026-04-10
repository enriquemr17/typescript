// Interfaz que define la forma de cualquier respuesta de la API

interface RespuestaAPI<T> { // T se rellena al usarse
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

// Función genérica que simula una llamada a base de datos

async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        codigoEstado: 200,
        exito: true,
        datos: {} as T,
      });
    }, 1000);
  });

  // 1. Funcion asíncrona; 2. Promise... (promete una respuestaAPI en el futuro); 3. setTimeout (simula tiempo de base de datos); 4.{} as t (respuesta de base de datos)
}