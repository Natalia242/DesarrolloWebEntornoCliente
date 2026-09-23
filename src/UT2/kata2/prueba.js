// JS (ajedrez_enroque.js)
const esTurnoBlancas = true;
const reyEnJaque = false;
const reyMovido = false;
// Condición de enroque: Turno Blancas AND NO en jaque AND NO se ha movido el Rey
const puedeEnrocar = esTurnoBlancas && !reyEnJaque && !reyMovido;
const statusDisplay = document.getElementById("status-display");
if (statusDisplay) {
    statusDisplay.textContent = puedeEnrocar
        ? "Movimiento legal: El Rey blanco (♔) puede realizar el enroque corto."
        : "Enroque no permitido en la posición actual.";
}