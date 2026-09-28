/*Kata 3.2
1. Crea una variable piezaSeleccionada con una figura Unicode (ej. '♞').
2. Evalúa la pieza con switch(piezaSeleccionada) describiendo la regla de movimiento para: ♔ (Rey), ♛
(Dama), ♖ (Torre), ♝ (Alfil), ♞ (Caballo) y ♟ (Peón).
3. Incluye de forma obligatoria el bloque default para manejar piezas no reconocidas o casillas vacías.
4. Asegúrate de colocar la sentencia break al final de cada caso.*/

//1
const piezaSeleccionada = '♞';

//2 y 4
let reglaMovimiento;
switch (piezaSeleccionada) {
  case '♔':
    reglaMovimiento = 'El Rey mueve una casilla en cualquier dirección.';
    break;
  case '♛':
    reglaMovimiento = 'La Dama mueve en cualquier dirección las casillas que quiera.';
    break;
  case '♖':
    reglaMovimiento = 'La Torre mueve en línea recta, horizontal o verticalmente, las casillas que quiera.';
    break;
  case '♝':
    reglaMovimiento = 'El Alfil mueve en diagonal las casillas que quiera.';
    break;
  case '♞':
    reglaMovimiento = 'El Caballo mueve en forma de L y puede saltar piezas.';
    break;
  case '♟':
    reglaMovimiento = 'El Peón mueve una casilla hacia adelante.';
    break;
//3
  default:
    reglaMovimiento = 'Pieza no seleccionada o tipo desconocido.';
    break;
}

console.log(`Regla para ${piezaSeleccionada}: ${reglaMovimiento}`);