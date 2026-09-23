/*Kata 2.2
Determinar a qué jugador le corresponde mover según el número de jugada actual utilizando
el operador resto (%) y comparaciones estrictas.

1. Declara la variable numeroJugada = 7.
2. Evalúa si la jugada es impar con numeroJugada % 2 !== 0 para determinar si es turno de Blancas.
3. Compara mediante operadores relacionales (>, <) si las Blancas superan en más de 3 puntos a las
Negras.
4. Muestra en consola mensajes claros evaluando si el turno es válido y si la ventaja es significativa.*/

//1
let numeroJugada = 7;

//2
const esTurnoBlancas = (numeroJugada % 2 !== 0);

console.log(`Número de jugada actual: ${numeroJugada}`);
console.log(`¿Es turno de las Blancas ♔ ?: ${esTurnoBlancas? "Sí" : "No"}`);

//3
const puntosBlancas = 11;
const puntosNegras = 8;
const ventajaClara = (puntosBlancas - puntosNegras) >= 3;

//4
console.log(`¿Tienen las Blancas ventaja clara mayor de 3 puntos?: ${ventajaClara? "Sí" : "No"}, tienen una ventaja de ${puntosBlancas - puntosNegras}`);