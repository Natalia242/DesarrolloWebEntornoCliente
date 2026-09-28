/*Kata 3.3
1. Define la fila alcanzada por un peón blanco: const filaAlcanzada = 8;.
2. Evalúa con el operador ternario si el peón ha promocionado: const figuraFinal = (filaAlcanzada === 8) ? '♕'
: '♙';.
3. Crea una función promocionar() que reemplace el texto en la casilla en el HTML usando textContent.
4. Asigna la acción a un botón mediante addEventListener('click', promocionar).*/

//1
const filaAlcanzada = 8;
const peonElemento = document.getElementById('casilla-a8');

//2
const figuraFinal = (filaAlcanzada) === 8 ? '♕' : '♙';

//3
function promocionar() {
  if (peonElemento) {
    peonElemento.textContent = figuraFinal;
  }
  console.log(`¡Promoción ejecutada! Nueva pieza: ${figuraFinal}`);
}

//4
const btnPromocionar = document.getElementById('btn-promocionar');
if (btnPromocionar) {
  btnPromocionar.addEventListener('click', promocionar);
}