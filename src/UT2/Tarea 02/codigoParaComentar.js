//Código para que comente Iván.

let reyMovido = false,
  torreMovida = false,
  enJaque = false;
let enroqueLegal;

enroqueLegal = !reyMovido && !torreMovida && !enJaque;

console.log(`El enroque ${enroqueLegal ? 'es' : 'no es'} legal.`);

const pieza = 'dama';
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