/*Kata 1.3
Seleccionar elementos del DOM, asignar eventos con addEventListener y actualizar símbolos
Unicode de forma segura mediante textContent.

Dada una casilla HTML (<p id="casilla"></p>) y un botón (<button
id="btn-mover"></button>):
1. Selecciona ambos elementos con document.getElementById().
2. Al pulsar el botón, asigna la figura del Caballo Blanco ('♘') usando textContent.
3. Vincula la función mediante addEventListener('click', colocarPieza).*/

// HTML: <p id="casilla">Casilla e4: Vacía</p>
// HTML: <button id="btn-mover">Mover Caballo a e4</button>

//1
const casillaElemento = document.getElementById("casilla");
const botonMover = document.getElementById("btn-mover");

//2
function colocarPieza() {
    const caballo = "♘";
    casillaElemento.textContent = `Casilla e4 ocupada por: ${caballo}`;
}

//3
botonMover.addEventListener("click", colocarPieza);