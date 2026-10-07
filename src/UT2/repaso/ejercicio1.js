/*Ejercicio 1
Un jugador blanco tiene 1 Rey (♔), 1 Torre (♖) y 2 Peones (♙). El rival negro tiene 1 Rey (♚)
y 1 Dama (♛).

1. Declara constantes con los valores materiales: Peón=1, Torre=5, Dama=9.
2. Calcula el total de puntos de cada bando usando operadores aritméticos.
3. Usa un operador ternario para determinar qué bando tiene ventaja material y guárdalo en una
variable mensajeVentaja.
4. Mediante una estructura if con operadores lógicos (&&, !), verifica si las blancas pueden enrocar
(condiciones: reyMovido === false, torreMovida === false y enJaque === false).*/

//1
const PEON = 1, TORRE = 5, DAMA = 9;

//2
let puntosBlancas = 0, puntosNegras = 0;
puntosBlancas += TORRE + PEON * 2
puntosNegras += DAMA;

//3
const VENTAJA = Math.abs(puntosNegras - puntosBlancas);
const mensajeVentaja = `Ventaja ${puntosBlancas > puntosNegras ? "Blancas" : "Negras"} (${VENTAJA})`;

//4
let reyMovido = false;
let torreMovida = false;
let enJaque = false;

if (!reyMovido && !torreMovida && !enJaque) {
  console.log('Las blancas pueden realizar el enroque.');
} else {
  console.log('Enroque no permitido en esta posición.');
}