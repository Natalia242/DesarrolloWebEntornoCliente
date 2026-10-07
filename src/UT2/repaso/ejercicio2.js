/*Ejercicio 2
Crea un script que simule el recorrido del tablero 8x8 mediante dos bucles for anidados.

1. Usa las variables fila (de 1 a 8) y columna (de 1 a 8).
2. Utiliza la condición de paridad (fila + columna) % 2 === 0 para identificar las casillas claras y
oscuras.
3. Cuenta cuántas casillas claras y cuántas oscuras hay en total usando asignación compuesta (+= 1).
4. Muestra por consola el resultado final comprobando que ambas suman 32 casillas.*/

//1
let casillasBlancas = 0, casillasNegras = 0;

for (let fila = 1; fila <= 8; fila++) {
  for (let columna = 1; columna <= 8; columna++) {
//2 y 3
    (fila + columna) % 2 === 0 ? casillasBlancas++ : casillasNegras++;
  }
}

//4
console.log(`Casillas blancas: ${casillasBlancas}`);
console.log(`Casillas blancas: ${casillasNegras}`);