/*1 Crea obtenerTimestampJugada().
Devuelve la marca de tiempo exacta en milisegundos del momento actual utilizando Date.now().*/

function obtenerTimestampJugada() {
  return Date.now();
}

//console.log(`${obtenerTimestampJugada()} milisegundos`);

/*2 Crear formatearFechaTorneo(fechaObj). Recibe un objeto Date y retorna la fecha formateada en español completo
(ej. '18 de octubre de 2026') con toLocaleDateString('es-ES', ...)*/

function formatearFechaTorneo(fechaObj) {
  return fechaObj.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

//console.log(`${formatearFechaTorneo(new Date(2026, 9, 18))}`);

/*3 Crea calcularTiempoPensamiento(inicioMs, finMs). Calcula la diferencia en
segundos entre dos marcas de tiempo, formatea con 1 decimal y añade el sufijo 's'(ej. '4.2 s').*/

function calcularTiempoPensamiento(inicioMs, finMs) {
  return `${((finMs - inicioMs) / 1000).toFixed(1)} s`;
}

//console.log(calcularTiempoPensamiento(1000, 5000));

/*4 Crea obtenerTiempoFormateadoReloj(msRestantes). Convierte milisegundos a minutos y segundos,
formateando el resultado como 'MM:SS' con Math.floor() y padStart(2, '0').*/

function obtenerTiempoFormateadoReloj(msRestantes) {
  let seg = msRestantes / 1000;
  let min = Math.floor(seg / 60);
  seg %= 60;
  return `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`; //Para hacer que siempre sea un número de dos cifras.
}

//console.log(obtenerTiempoFormateadoReloj(3601000))

/*5 Crea evaluarAntiguedadGM(fechaTitulacion, anosRequeridos). Obtén la diferencia en años cumplidos
considerando mes y día con getFullYear(), getMonth() y getDate(), retornando true si supera los años requeridos.*/

function evaluarAntiguedadGM(fechaTitulacion, anosRequeridos) {

  const hoy = new Date();

  let aniosCumplidos = hoy.getFullYear() - fechaTitulacion.getFullYear();

  if (
    hoy.getMonth() < fechaTitulacion.getMonth() ||
    (hoy.getDate() < fechaTitulacion.getDate() &&
      hoy.getMonth() === fechaTitulacion.getMonth())
  ) {
    aniosCumplidos--;
  }

  return aniosCumplidos >= anosRequeridos;

}

//console.log(evaluarAntiguedadGM(new Date(2020, 9, 30), 6));

/*6 Crea calcularHoraSiguienteRonda(fechaRondaActual, duracionMin, descansoMin).
Añade la suma de minutos en ms al timestamp con getTime() y retorna un nuevo objeto Date con la hora exacta.*/

function calcularHoraSiguienteRonda(
  fechaRondaActual,
  duracionMin,
  descansoMin,
) {

  return new Date(
    fechaRondaActual.getTime() +
    ((duracionMin + descansoMin) * 60 * 1000)
  );

}

console.log(
  calcularHoraSiguienteRonda(
    new Date('2026-10-28T10:00:00'),
    30,
    15,
  ).toLocaleString('es-ES'),
);