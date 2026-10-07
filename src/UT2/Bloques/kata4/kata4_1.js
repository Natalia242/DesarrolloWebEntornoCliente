/*Kata 4.1
1. Declara una variable jugadasSinCaptura = 0; y la constante MAX_JUGADAS = 50;.
2. Mediante un bucle while, incrementa jugadasSinCaptura de 1 en 1 simulando el paso de los turnos.
3. Imprime por consola cada turno formateado con Template Literals (ej. `Turno ${jugadasSinCaptura}: sin
peones ni capturas`).
4. Al alcanzar el límite de 50, detén la ejecución e imprime un mensaje de tablas de partida.*/

//1
let jugadasSinCaptura = 0;
const MAX_JUGADAS = 50;

//2
while (jugadasSinCaptura < MAX_JUGADAS) {
  jugadasSinCaptura++;
//3
  console.log(`Jugada ${jugadasSinCaptura}: Movimiento realizado sin capturas.`);

  await new Promise((resolve) => setTimeout(resolve, 100));
}

//4
if (jugadasSinCaptura === MAX_JUGADAS) {
  console.log(`¡Tablas aplicadas! Se han alcanzado ${MAX_JUGADAS} jugadas sin capturas.`);
}