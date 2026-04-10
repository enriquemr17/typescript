export function calcularMedia(array: number[]): number | null { // SE DEFINEN LOS CONTRATOS (TIPOS). PRIMERO SE EXPORTA PARA PODER IMPORTARLO
    if (array.length === 0) {
        return null; 
    }
let suma = 0; // declaramos el valor de suma
    for (let i=0; i < array.length; i++) {
        suma = suma + array[i]; 
    } 
    return suma / array.length; 
}  

export function calcularMediana(array: number[]): number | null {
    if (array.length === 0) {
        return null; 
    }
// COPIAR EL ARRAY PARA NO MUTAR
const arrayOrdenado = [...array]; 
// ORDENAR EL ARRAY
arrayOrdenado.sort((a,b) => a-b); // asegura que se ordene numericamente.

const mitad = Math.floor(arrayOrdenado.length / 2); // le decimos que es la MITAD
    if (arrayOrdenado.length %2 !== 0){
        return arrayOrdenado [mitad]; // si es impar devuelve el numero de la mitad
    } else { // si es par, devuelve la suma de los dos numeros intermedios divido entre dos
        return (arrayOrdenado[mitad -1] + arrayOrdenado[mitad]) / 2; 
    }
}





export function filtrarAtipicos (array:number[], limite: number): number[] {

    if (limite < 0) {
        throw new Error("No puedes introducir valores negativos"); 
    }

    if (array.length === 0) {
        return []; 
    }

    const media = calcularMedia(array); 

    if (media === null) {
        return[]; 
    } else {
       const atipicos = []; // creas un array nuevo para los atipicos ([]= array)
       for (let i=0; i < array.length; i++) {
        const valor = array[i]; // valor = numero actual en el array
    
        if (Math.abs(valor - media) > limite) {
            atipicos.push(valor); // se guarda el valor en el array de atipicos
            }
        }
        return atipicos; // devolvemos todos los valores atipicos 

     }
}
    

    

    

    

