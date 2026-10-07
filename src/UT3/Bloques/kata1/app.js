function validarYParsearElo(entradaRaw) {
  //Extracción Numérica
  let n = Number.parseInt(entradaRaw, 10);

  //Validación de Tipo
  let esNaN = Number.isNaN(n);
  let esInteger = Number.isInteger(n);

  //Validación de Rango FIDE
  let elo = n >= 1000 && n <= 3000;

  let mensaje = "ELO válido.";

  if (esNaN || !esInteger) {
    mensaje = "El número es inválido.";
  } else if (!elo) {
    mensaje = "El ELO debe estar entre 1000 y 3000.";
  }

  return {
    valido: esInteger,
    elo: elo ? n : null,
    mensaje: mensaje,
  };

}

console.log(validarYParsearElo('2350'));