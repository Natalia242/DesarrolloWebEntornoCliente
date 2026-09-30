/*Desafío 1: Módulo de Puntuación Material y Control de Turno
Debes desarrollar la lógica para llevar el marcador de una partida de
ajedrez.

1. Declara constantes con los valores de las piezas: PEON=1, CABALLO=3, ALFIL=3, TORRE=5, DAMA=9.
2. Declara variables para acumular los puntos de las Blancas y de las Negras inicializadas a 0.
3. Simula una secuencia de 4 capturas acumulando los puntos con asignación compuesta (+=).
4. Dado un número de jugada actual (ej. let jugada = 15;), calcula con el operador módulo (%) de quién es
el turno.
5. Muestra en la consola el informe completo utilizando exclusivamente Template Literals y comprueba los
tipos de datos con typeof.*/

//1
const PEON = 1,
  CABALLO = 3,
  ALFIL = 3,
  TORRE = 5,
  DAMA = 9;

//2
let puntosBlancas = 0,
  puntosNegras = 0;

//3
puntosBlancas += DAMA;
puntosNegras += CABALLO;
puntosBlancas += TORRE;
puntosNegras += ALFIL;

//4
let jugada = 15;
const mueven = jugada % 2 === 0 ? 'Negras ♛' : 'Blancas ♕';

//5
console.log(
  `Puntuación Blancas: ${puntosBlancas} pts (tipo de dato: ${typeof puntosBlancas})
Puntuación Negras: ${puntosNegras} pts (tipo de dato: ${typeof puntosNegras})`,
);
console.log(`Ventaja Material: ${Math.abs(puntosNegras - puntosBlancas)} pts`);
console.log(
  `Estado del Turno: Jugada ${jugada} (tipo de dato: ${typeof jugada})
  (Mueven ${mueven} (tipo de dato: ${typeof mueven}))`,
);