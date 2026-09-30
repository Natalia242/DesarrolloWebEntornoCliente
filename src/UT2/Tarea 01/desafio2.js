/*Desafío 2: Árbitro de Reglas Especiales y Coronación
Programa el motor de toma de decisiones para validar reglas de
juego.

1. Evaluación de Enroque (if / else combinados): Declara las booleanas reyMovido, torreMovida y
enJaque. Un enroque solo es legal si el rey no se ha movido (!reyMovido), la torre tampoco (!torreMovida) y
no hay jaque (!enJaque).
2. Comportamiento por Pieza (switch): Dado el nombre de una pieza ('torre', 'caballo', 'peon', etc.),
imprime su rango de movimiento. Incluye obligatoriamente la sección default para manejar casillas vacías
o entradas inválidas.
3. Promoción de Peón (Operador Ternario): Dada la fila de destino de un peón (1 a 8), utiliza un
operador ternario para asignar la figura promocionada: si llega a la fila 8 (o fila 1 en negras) se transforma
en Dama ('♛' / '♕'), en caso contrario sigue siendo Peón.*/

//1
let reyMovido = false,
  torreMovida = false,
  enJaque = false;
let enroqueLegal;

if (!reyMovido && !torreMovida && !enJaque) {
  enroqueLegal = true;
} else {
  enroqueLegal = false;
}

console.log(`El enroque ${enroqueLegal ? 'es' : 'no es'} legal.`);

//2
const pieza = prompt('Introduce una pieza: ');
let rangoMovimiento;

switch (pieza) {
  case 'torre':
    rangoMovimiento = 'Se mueve en horizontal y vertical.';
    break;
  case 'caballo':
    rangoMovimiento = 'Se mueve en forma de L.';
    break;
  case 'alfil':
    rangoMovimiento = 'Se mueve en diagonal.';
    break;
  case 'peon':
    rangoMovimiento = 'Avanza hacia delante y captura en diagonal.';
    break;
  case 'dama':
    rangoMovimiento = 'Se mueve en horizontal, vertical y diagonal.';
    break;
  default:
    rangoMovimiento = 'Casilla vacía o pieza no válida.';
    break;
}

console.log(`Pieza: ${pieza}`);
console.log(`Rango de movimiento: ${rangoMovimiento}`);

//3
const fila = 8;
let peonBlanco = true;

const figuraPromocionada = peonBlanco
  ? fila === 8
    ? '♕'
    : '♙'
  : fila === 1
    ? '♛'
    : '♟';

console.log(`Figura promocionada: ${figuraPromocionada}`);