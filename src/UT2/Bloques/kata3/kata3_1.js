/*Kata 3.1
1. Declara las constantes: const enJaque = true; y const movimientos = 50;.
2. Mediante una estructura if ... else if ... else:
• Si movimientos >= 50, muestra: 'Se pueden reclamar tablas por la regla de los 50 movimientos.'.
• Si enJaque === true, muestra: '¡Atención! El rey está amenazado. Debes salir del jaque.'.
• En cualquier otro caso, muestra: 'Partida en curso normal.'.
3. Muestra el resultado por consola y actualiza el texto de un elemento HTML con textContent.*/

//1
const enJaque = true;
const movimientos = 50;

//2
let mensajeEstado;
if (movimientos >= 50) {
  mensajeEstado = 'Se pueden reclamar tablas por la regla de los 50 movimientos.';
} else if (enJaque === true) {
  mensajeEstado = '¡Atención! El rey está amenazado. Debes salir del jaque.';
} else {
  mensajeEstado = 'Partida en curso normal.';
}

//3
const estadoElemento = document.getElementById('status-display');
console.log(`Estado actual: ${mensajeEstado}`);
if (estadoElemento) {
  estadoElemento.textContent = mensajeEstado;
}