/*Kata 4.3
1. Crea un array de jugadas en notación algebraica: const HISTORIAL = ['e4', 'e5', 'Nf3', '{comentario}',
'Nc6', 'Bc4', 'Bc5', 'Qxf7#'];.
2. Recorre el historial usando for (const jugada of HISTORIAL).
3. Si la jugada empieza por '{', usa continue para saltar la iteración sin procesarla.
4. Si la jugada contiene '#' (jaque mate), imprímela, notifica la victoria en pantalla usando textContent y
usa break para terminar el bucle inmediatamente.*/

//1
const HISTORIAL = ['e4', 'e5', 'Nf3', '{comentario}', 'Nc6', 'Bc4', 'Bc5', 'Qxf7#', 'h4'];
let contadorJugadasValidas = 0;

//2
for (const jugada of HISTORIAL) {
//3
  if (jugada.startsWith('{')) {
    console.log(`[Omision] Comentario detectado: ${jugada}`);
    continue;
  }
  contadorJugadasValidas++;
  console.log(`Procesando jugada ${contadorJugadasValidas}: ${jugada}`);
//4
  if (jugada.includes('#')) {
    console.log(`¡JAQUE MATE detectado en la jugada ${jugada}! Fin de la partida.`,);
  break;
  }
}