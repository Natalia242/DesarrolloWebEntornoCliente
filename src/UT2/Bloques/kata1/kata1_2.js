/*Kata 1.2
Trabajar con caracteres Unicode de piezas de ajedrez y conversión explícita de cadenas a números
con Number().

1. Guarda en constantes las figuras Unicode del Rey Blanco ('♔'), la Dama ('♕'), la Torre ('♖'), el Caballo ('♘') y
el Peón Negro ('♟').
2. Convierte explícitamente const casillasTexto = "64"; a número usando Number().
3. Muestra por consola las piezas Unicode y el número de casillas calculado.*/

//1
const REY_BLANCO = "♔";
const DAMA_BLANCA = "♕";
const TORRE_BLANCA = "♖";
const CABALLO_BLANCO = "♘";
const PEON_NEGRO = "♟";

//2
const casillasTexto = "64";
const casillasNumero = Number(casillasTexto);

//3
console.log(`Tablero: ${casillasNumero} casillas (${casillasNumero/2} por bando).`);
console.log(`Piezas activas: Rey ${REY_BLANCO}, Dama ${DAMA_BLANCA}, Torre ${TORRE_BLANCA},
Caballo ${CABALLO_BLANCO} frente a Peón ${PEON_NEGRO}`);


console.log(`Tipo de las piezas: ${typeof DAMA_BLANCA}`);
console.log(`Tipo de la constante "casillasTexto": ${typeof casillasTexto}`);
console.log(`Tipo de la constante "casillasNumero": ${typeof casillasNumero}`);