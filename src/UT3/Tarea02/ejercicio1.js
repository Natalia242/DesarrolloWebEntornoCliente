/*Desarrolla la función crearRelojAjedrezBlitz(tiempoInicialSeg, incrementoSeg, callbackActualizar, callbackFin).
• Sincronización de Tiempo Real (Date.now()): Al iniciar el turno, registra la marca de tiempo de inicio tInicio = Date.now().
• Ticker Asíncrono (setInterval): Configura un temporizador con intervalo de 100ms que calcule en cada pulso el tiempo
consumido real tConsumido = Math.floor((Date.now() - tInicio) / 1000) y determine los segundos restantes segRestantes =
tiempoInicialSeg - tConsumido.
• Formateo Digital (Date / padStart): Formatea los segundos restantes a la cadena digital 'MM:SS' asegurando 2 dígitos en
minutos y segundos mediante String().padStart(2, '0').
• Finalización (clearInterval): Si segRestantes <= 0, detén inmediatamente el reloj con clearInterval() e invoca
callbackFin('¡Caída de Bandera!').
• Función de Cierre de Turno: La función debe retornar un objeto con el metodo detenerYSumarIncremento() que detenga
el intervalo activo, sume el incrementoSeg al tiempo restante y devuelva la nueva marca de tiempo formateada con new
Date().toLocaleTimeString('es-ES').
*/
function crearRelojAjedrezBlitz(
  tiempoInicialSeg,
  incrementoSeg,
  callbackActualizar,
  callbackFin
) {
  const tInicio = Date.now();

  let tConsumido;
  let segRestantes;

  let intervalo = setInterval(() => {
    tConsumido = Math.floor((Date.now() - tInicio) / 1000);
    segRestantes = tiempoInicialSeg - tConsumido;

    if (segRestantes <= 0) {
      clearInterval(intervalo);
      callbackFin('¡Caída de Bandera!');
      return;
    }

    const MM = String(Math.floor(segRestantes / 60)).padStart(2, '0');
    const SS = String(segRestantes % 60).padStart(2, '0');
    callbackActualizar(`${MM}:${SS}`);
  }, 100);

  return {
    detenerYSumarIncremento() {
      clearInterval(intervalo); // Para el intervalo activo
      segRestantes += incrementoSeg; // Suma del incremento
      return new Date().toLocaleTimeString('es-ES');
    }
  };

}

// Estructura de prueba en consola:
const reloj = crearRelojAjedrezBlitz(
  180,
  3,
  (tiempoTxt) => console.log(tiempoTxt),
  console.warn,
);
// Resultado esperado a los 2 segundos: '02:58'
// Al llamar a reloj.detenerYSumarIncremento() -> Detiene temporizador y devuelve la hora local formateada.
setTimeout(() => {
  console.log(reloj.detenerYSumarIncremento());
}, 2500);