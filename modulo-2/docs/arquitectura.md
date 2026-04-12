ARQUITECTURA MODULO 2

## INTERFACES Y TYPE:

El uso de INTERFACE  para modelar las entidades `Estudiante` y `Asignatura` es necesario debido a que representan objetos con estructura fija.

El uso de TYPE  para `EstadoMatricula` es necesario porque une varias interfaces con el operador `|`, algo que las interfaces no permiten.

## UNIÓN DISCRIMINADA: 

`EstadoMatricula` tiene tres estados posibles: ACTIVA, SUSPENDIDA y FINALIZADA.
Cada una tiene una propiedad `tipo` que permite a TypeScript saber exactamente 
qué propiedades están disponibles en cada caso.

## GENÉRICOS: 

`RespuestaAPI<T>` permite reutilizar la misma estructura de respuesta para cualquier tipo de dato sin repetir código.