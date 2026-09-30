
let
  /**
   * Indica si el rey se ha movido en algun momento de la partida
   * @type {boolean}
   * @default false
   */
  reyMovido = false,
  /**
   * Indica si la torre ha sido movida en algun momento de la partida
   * @type {boolean}
   * @default false
   */
  torreMovida = false,
  /**
   * Indica si el rey se encuentra en Jaque en la jugada actual
   * @type {boolean}
   * @default false
   */
  enJaque = false;

/**
 * Indica si el enroque es legal tal y como esta ahora la partida.
 * Se calcula a partir de reyMovido, torreMovida y enJaque
 * @type {boolean}
 */
let enroqueLegal;

/**
 * Calcula si el enroque es legal, para ello ni el rey ni la torre deben haberse movido
 * y el rey no puede estar en jaque.
 */
enroqueLegal = !reyMovido && !torreMovida && !enJaque;

console.log(`El enroque ${enroqueLegal ? 'es' : 'no es'} legal.`);

/**
 * Nombre de la pieza cuyo movimiento se quiere saber.
 * Valores correctos: 'torre', 'caballo', 'alfil', 'peon', 'dama'
 * @const
 * @type {string}
 * @example
 * //Para saber el movimiento del caballo
 * const pieza = 'caballo':
 */
const pieza = 'dama';
/**
 * Descripcion del movimiento de la pieza indicada en la constante pieza.
 * Su valor se asigna en el switch siguiente.
 * @type {string}
 */
let rangoMovimiento;

/**
 * Asigna a rangoMovimiento la descripcion del movimiento correspondiente a la pieza.
 * Cada caso termina en break para evitar que se ejecuten los siguientes y el caso
 * default para fallos.
 *
 * @see rangoMovimiento
 */
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

/**
 * Fila del tablero en la que se encuentra el peón (de 1 a 8).
 * @const
 * @type {number}
 */
const fila = 8;
/**
 * Indica el color del peon: true si es blanco, false si es negro.
 * @type {boolean}
 */
let peonBlanco = true;

/**
 * Figura que se muestra para el peón segun su color
 * @type {string}
 */
const figuraPromocionada = peonBlanco
  ? fila === 8
    ? '♕'
    : '♙'
  : fila === 1
    ? '♛'
    : '♟';

console.log(`Figura promocionada: ${figuraPromocionada}`);