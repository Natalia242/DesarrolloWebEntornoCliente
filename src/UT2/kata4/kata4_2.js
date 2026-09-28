/*Kata 4.2
1. Define un array con las columnas: const COLUMNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];.
2. Usa un bucle exterior para recorrer las filas (de 8 a 1) y un bucle interior para las columnas (de 0 a 7).
3. Calcula si la casilla es clara u oscura con la expresión (fila + columnaIndex) % 2 === 0.
4. Muestra en la consola la coordenada completa (ej. e4) y su color correspondiente.*/

//1
const COLUMNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//2
for (let fila = 8; fila >= 1; fila--) {
  for (let columna = 0; columna < COLUMNAS.length; columna++) {
//3
    const esClara = (fila + columna) % 2 === 0;
    const colorCasilla = (esClara) ? 'Clara' : 'Oscura';
//4
    const coordenadas = `${COLUMNAS[columna]}${fila}`;
    console.log(`Casilla ${coordenadas} -> ${colorCasilla}`);

    await new Promise(resolve => setTimeout(resolve, 100));
  }
  await new Promise((resolve) => setTimeout(resolve, 900));
}