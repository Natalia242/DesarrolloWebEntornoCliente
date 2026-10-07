/*Kata 2.1
Calcular la puntuación total de piezas capturadas y la diferencia de material usando
operadores aritméticos y asignación compuesta (+=, -=).

1. Declara constantes con el valor estándar de cada pieza: PEON = 1, CABALLO = 3, ALFIL = 3, TORRE =
5, DAMA = 9.
2. Inicializa las variables de puntuación acumulada: puntosBlancas = 0 y puntosNegras = 0.
3. Simula la captura de piezas sumando puntos con +=: las blancas capturan 1 Dama (♛) y 2 Peones
(♟); las negras capturan 1 Torre (♖) y 1 Caballo (♘).
4. Calcula la diferencia de ventaja material (puntosBlancas - puntosNegras).
5. Muestra en consola los totales y la ventaja formateados mediante Template Literals.*/

//1
const PEON = 1;
const CABALLO = 3;
const ALFIL = 3;
const TORRE = 5;
const DAMA = 9;

//2
let puntosBlancas = 0, puntosNegras = 0;

//3
puntosBlancas += DAMA
puntosBlancas += PEON * 2
puntosNegras += TORRE + CABALLO

//4
const ventaja = puntosBlancas - puntosNegras;

//5
console.log("Puntos de las blancas: " + puntosBlancas);
console.log("Puntos de las negras: " + puntosNegras);

let tieneVentaja = "blancas";

if (ventaja <= 0) {
    tieneVentaja = "negras"
}

console.log(`Ventaja de las ${tieneVentaja}: ${Math.abs(ventaja)}`);