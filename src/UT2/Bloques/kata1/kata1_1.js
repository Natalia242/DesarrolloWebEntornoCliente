/*Kata 1.1
Declarar variables para almacenar el estado inicial de una partida e inspeccionar tipos con typeof y
piezas Unicode (♔, ♟).

1. Declara NOMBRE_JUGADOR con tu nombre.
2. Declara piezasBlancas = 16; y esTurnoBlancas = true;.
3. Declara piezaSeleccionada; (sin valor -> undefined) y piezaCapturada = null;.
4. Muestra en consola el tipo de dato de cada variable usando typeof y Template Literals.*/

//1
const NOMBRE_JUGADOR = "Natalia";

//2
let piezasBlancas = 16;
let esTurnoBlancas = true;

//3
let piezaSeleccionada;
let piezaCapturada = null;

//4
console.log(`Jugador: ${NOMBRE_JUGADOR} (Tipo: ${typeof NOMBRE_JUGADOR})`);
console.log(`Piezas restantes: ${piezasBlancas} (Tipo: ${typeof piezasBlancas})`);
console.log(`¿Es el turno de las blancas?: ${esTurnoBlancas} (Tipo: ${typeof esTurnoBlancas})`);
console.log(`Pieza seleccionada: ${piezaSeleccionada} (Tipo: ${typeof piezaSeleccionada})`);
console.log(`Pieza capturada: ${piezaCapturada} (Tipo: ${typeof piezaCapturada})`);