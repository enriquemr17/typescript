import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const numeros: number[] = [10, 20, 30, 40, 100];
const limite: number = 20;

const media = calcularMedia(numeros);
const mediana = calcularMediana(numeros);
const atipicos = filtrarAtipicos(numeros, limite);

console.log("Array original:", numeros);
console.log("Media:", media);
console.log("Mediana:", mediana);
console.log("Atípicos:", atipicos);