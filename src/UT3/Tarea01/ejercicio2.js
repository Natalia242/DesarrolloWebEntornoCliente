/*Crea la función analizarFENVilaAleatoria(cadenaFEN) para la posición:
const fenPrueba = "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3";

• 1. Extracción de Disposición (String): Corta la cadena FEN con slice() e indexOf(' ') para conservar únicamente el
primer campo con la posición del tablero ("r1bqkbnr/pppp1ppp/.../RNBQKB1R").
• 2. Despiece por Filas (String & Array): Separa las 8 filas del tablero con split('/') y extrae la fila 1 de piezas blancas
(índice 7, cadena "RNBQKB1R").
• 3. Conteo de Piezas Blancas (String): Bucle o metodo de reemplazo/conteo para determinar cuántas piezas en
mayúscula (excluyendo números) existen en la fila 1.
• 4. Selección de Columna Aleatoria (Math.random & Math.floor): Genera un número entero aleatorio para la columna
entre 0 y 7 usando Math.floor(Math.random() * 8).
• 5. Conversión de Columna a Letra (String.fromCharCode): Convierte el entero (0 a 7) en su letra algebraica ('a' a 'h')
usando String.fromCharCode(97 + colIndex).
• 6. Cálculo de Probabilidad y Retorno (Number / toFixed): Calcula la probabilidad de seleccionar esa columna ((1 / 8) *
100), dale formato de 2 decimales con .toFixed(2) y devuelve un objeto con:
{ fila1: "RNBQKB1R", casillaSeleccionada: "e1", probabilidad: "12.50%" }*/

function analizarFENVilaAleatoria(cadenaFEN) {
  //1
  const disposicion = cadenaFEN.slice(0, cadenaFEN.indexOf(' '));

  //2
  const filas = disposicion.split('/');
  const fila1 = filas[7];

  //3
  let mayusculas = 0;

  for (const caracter of fila1) {
    if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
      mayusculas++;
    }
  }

  //4
  let colIndex = Math.floor(Math.random() * 8);
  //5
  let letraColumna = String.fromCharCode(97 + colIndex);
  let casillaSeleccionada = letraColumna + 1
  //6
  let probabilidad = (((1 / 8) * 100).toFixed(2)) + "%";

  return { fila1, casillaSeleccionada, probabilidad };
}

const fenPrueba = 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3';
console.log(analizarFENVilaAleatoria(fenPrueba));