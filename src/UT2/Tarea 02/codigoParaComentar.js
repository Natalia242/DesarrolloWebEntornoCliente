// Creación de variables de tipo booleano para las condiciones del enroque en ajedrez.
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

// Creación de una variable que necesitaremos después para saber si el enroque cumple las condiciones para ser legal.
/**
 * Indica si el enroque es legal tal y como esta ahora la partida.
 * Se calcula a partir de reyMovido, torreMovida y enJaque
 * @type {boolean}
 */
let enroqueLegal;

// Le asignamos el valor true si cumple todas las condiciones y false si incumple al menos una de ellas.
/**
 * Calcula si el enroque es legal, para ello ni el rey ni la torre deben haberse movido
 * y el rey no puede estar en jaque.
 */
enroqueLegal = !reyMovido && !torreMovida && !enJaque;

// Imprimimos por consola el resultado de si es legal el enroque.
console.log(`El enroque ${enroqueLegal ? 'es' : 'no es'} legal.`);

//Creamos una constante de tipo string para elegir una pieza de ajedrez.
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

// Creamos una variable de tipo string para guardar el rango de movimiento según el tipo de pieza por la que se pregunte.
/**
 * Descripcion del movimiento de la pieza indicada en la constante pieza.
 * Su valor se asigna en el switch siguiente.
 * @type {string}
 */
let rangoMovimiento;

// Se realiza un switch para asignar el rango de movimiento según el tipo de pieza.
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

// Imprimimos por consola el resultado de la pieza y su respectivo rango de movimiento.
console.log(`Pieza: ${pieza}`);
console.log(`Rango de movimiento: ${rangoMovimiento}`);

// Creamos una nueva constante que indica la fila donde se encuentra el peón.
/**
 * Fila del tablero en la que se encuentra el peón (de 1 a 8).
 * @const
 * @type {number}
 */
const fila = 8;

// Creamos una varible que puede cambiar en caso de que se pregunte por un peón diferente, para diferenciar si es una pieza blanca o negra.
/**
 * Indica el color del peon: true si es blanco, false si es negro.
 * @type {boolean}
 */
let peonBlanco = true;

// Creamos una última constante para saber si el peón puede promocionar y convertirse en reina o en caso de que no pueda se queda como un peón.
/**
 * Figura que se muestra para el peón segun su color y su fila.
 * Se usa un operador ternario anidado:
 * - Peon blanco: en la fila 8 promociona a dama y en otro caso sigue siendo peon
 * - Peon negro: en la fila 1 promociona a dama y en otro caso sigue siendo peon
 *
 * @const
 * @type {string}
 * @example
 * //Peon blanco en fila 8: devuelve dama.
 * //Peon negro en fila 3: devuelve peon.
 */
const figuraPromocionada = peonBlanco
  ? fila === 8
    ? '♕'
    : '♙'
  : fila === 1
    ? '♛'
    : '♟';

// Imprimimos por pantalla el resultado anterior.
console.log(`Figura promocionada: ${figuraPromocionada}`);