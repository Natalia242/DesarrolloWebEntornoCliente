/*Desafío 3: Generador Algorítmico y Buscador de Casillas 8x8
Implementa la iteración bidimensional del tablero.

1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas
algebraicas.
2. Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0 para determinar si la casilla es clara u oscura.
3. Almacena en un array las jugadas de una partida. Usa un bucle for...of para recorrerlo, saltando
comentarios con continue e interrumpiendo el recorrido con break cuando detectes la jugada final de jaque
mate ('#').*/

//1
const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let fila = 8; fila >= 1; fila--) {
  for (let colum = 0; colum < columnas.length; colum++) {
    const coordenada = `${columnas[colum]}${fila}`;

    //2
    if ((fila + colum) % 2 === 0) {
      console.log(`${coordenada}: casilla clara`);
    } else {
      console.log(`${coordenada}: casilla oscura`);
    }
  }
}

//3
const jugadas = [
  'e4',
  'e5',
  'Nf3',
  '{comentario}',
  'Nc6',
  'Bc4',
  'Bc5',
  'Qxf7#',
  'h4',
];

let contadorJugadasValidas = 0;

for (const jugada of jugadas) {
  if (jugada.startsWith('{')) {
    console.log(`[Omision] Comentario detectado: ${jugada}`);
    continue;
  }

  contadorJugadasValidas++;
  console.log(`Procesando jugada ${contadorJugadasValidas}: ${jugada}`);

  //4
  if (jugada.includes('#')) {
    console.log(
      `¡JAQUE MATE detectado en la jugada ${jugada}! Fin de la partida.`,
    );
    break;
  }
}