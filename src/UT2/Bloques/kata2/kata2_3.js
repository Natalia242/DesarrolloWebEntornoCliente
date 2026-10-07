/*Kata 2.3
Combinar expresiones booleanas complejas para validar la condición de enroque y actualizar
dinámicamente el panel de estado del DOM sin usar innerHTML.

1. Define las variables del estado del Rey Blanco: esTurnoBlancas = true, reyEnJaque = false,
reyOMovido = false.
2. Comprueba si se cumplen las 3 condiciones necesarias para el enroque usando el operador lógico &&
y la negación !.
3. Selecciona el elemento del DOM con id status-display usando document.getElementById().
4. Asigna un mensaje de texto formateado mediante textContent indicando si el enroque es legal.*/

//1
const esTurnoBlancas = true, reyEnJaque = false, reyOMovido = false;

//2
const puedeEnrocar = esTurnoBlancas && !reyEnJaque && !reyOMovido;

//3
const statusDisplay = document.getElementById("status-display");

//4
if (statusDisplay) {
    statusDisplay.textContent = puedeEnrocar
        ? "Movimiento legal: El Rey blanco ♔ puede realizar el enroque corto."
        : "Enroque no permitido en la posición actual.";
}