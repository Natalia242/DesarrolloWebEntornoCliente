/**
 * DWEC (0612) - MÓDULO DE DESARROLLO WEB EN ENTORNO CLIENTE
 * UNIDAD DIDÁCTICA 3 / RA3: OBJETOS PREDEFINIDOS EN JAVASCRIPT (ES6+)
 *
 * PRÁCTICA DE REPASO INTEGRADORA: PLATAFORMA DE AJEDREZ WEB (VERSIÓN EVALUACIÓN REPASO)
 *
 * INSTRUCCIONES PARA EL ALUMNADO:
 * 1. NO MODIFIQUE los nombres de las funciones ni los nombres de sus parámetros.
 * 2. Respete ESTRICTAMENTE los nombres de las variables internas y las claves de retorno.
 * 3. Complete la lógica interna de cada función y reemplace 'return null;' o 'return false;' por su solución.
 */

/**
 * EJERCICIO 1 (Bloque 01: Number & Math)
 * @param {Object} piezasBlancasObj - Objeto con el conteo de piezas blancas { peones, caballos, alfiles, torres, damas }.
 * @param {Object} piezasNegrasObj - Objeto con el conteo de piezas negras { peones, caballos, alfiles, torres, damas }.
 * @param {number} factorPosicion - Factor multiplicador de posición de tablero (número finito > 0).
 * @returns {Object|null} Objeto { puntosBlancas, puntosNegras, diferenciaMaterial, ventajaTotal, lider } o null si falla la validación.
 */
function evaluarVentajaMaterial(
  piezasBlancasObj,
  piezasNegrasObj,
  factorPosicion,
) {

  //1
  if (factorPosicion < 0 || typeof factorPosicion !== 'number') {
    return false;
  }

  //2
  const valores = { peones: 1, caballos: 3, alfiles: 3, torres: 5, damas: 9 };

  let valB = 0;
  let valN = 0;

  for (const pieza in piezasBlancasObj) {
    valB += piezasBlancasObj[pieza] * valores[pieza];
  }

  for (const pieza in piezasNegrasObj) {
    valN += piezasNegrasObj[pieza] * valores[pieza];
  }

  //3
  let difBase = Math.abs(valB - valN);

  //4
  let ventajaAjustada = Math.round(difBase * factorPosicion);

  return {
    diferenciaBase: difBase,
    ventajaAjustada: ventajaAjustada,
    tieneVentajaBlancas: valB >= valN,
  };
}

/**
 * EJERCICIO 2 (Bloque 02: String)
 * @param {string} cadenaNoticiaRaw - Cadena de texto bruta con la noticia.
 * @param {string} codigoECO - 4 caracteres (rellenando con 'E' a la izquierda)
 * @returns {string|null} Cadena formateada "[APERTURA] RESUMEN_EN_MAYUSCULAS" o null si la entrada es inválida.
 */
function formatearTitularPartida(cadenaNoticiaRaw, codigoECO) {

  //1
  let textoLimpio = cadenaNoticiaRaw.trim();

  //2
  textoLimpio = textoLimpio.replaceAll('_', '');

  //3
  textoLimpio = textoLimpio.toUpperCase();

  //4
  let ecoFmt = String(codigoECO).padStart(4, 'E');

  return `[${ecoFmt}] ${textoLimpio}`;
}

/**
 * EJERCICIO 3 (Bloque 03: Date)
 * @param {string} fechaEmisionIso - Cadena de fecha ISO (ej. "2026-01-15T10:00:00Z").
 * @param {number} diasValidez - Número entero de días de validez de la licencia.
 * @returns {Object|null} Objeto { vigente, fechaCaducidadMs, fechaCaducidadFormat } o null si la fecha/días son inválidos.
 */
function evaluarLicenciaArbitro(
  fechaEmisionIso,
  vigenciaAnos,
  fechaControlIso,
) {

  //1
  const fechaEmision = new Date(fechaEmisionIso);
  const fechaControl = new Date(fechaControlIso);

  //2
  const fechaExpiracion = fechaEmision;
  fechaExpiracion.setFullYear(fechaEmision.getFullYear() + vigenciaAnos);

  //3
  const esVigente = fechaControl.getTime() <= fechaExpiracion.getTime();

  //4
  const fechaenformatoEspanol = fechaExpiracion.toLocaleDateString('es-ES');

  return {
    esVigente: esVigente,
    fechaExpiracionStr: fechaenformatoEspanol,
  };
}

/**
 * EJERCICIO 4 (Bloque 04: BOM, window, location, navigator)
 * @param {string} [urlRetransmisionPrueba] - URL opcional para pruebas de inspección.
 * @returns {Object} Objeto { partidaId, esOnline, modoVisor }.
 */
function configurarTableroRetransmision(urlRetransmisionPrueba) {

  //1
  const esValidaUrl = urlRetransmisionPrueba.includes('/live/');

  //2
  const esOnline = navigator.onLine;

  //3
  const tamanioVisor = window.innerWidth;
  let modoVisor;

  switch (true) {
    case tamanioVisor >= 1024:
      modoVisor = 'DESKTOP';
      break;
    case tamanioVisor >= 768:
      modoVisor = 'TABLET';
      break;
    default:
      modoVisor = 'MOBILE';
  }

  return { esValidaUrl, esOnline, modoVisor };
}

/**
 * EJERCICIO 5 (Bloque 05: Storage, JSON, Cookies)
 * @param {string} idEstudio - Identificador único del estudio de ajedrez.
 * @param {Array<Object>} variantesArrayObj - Lista de variantes cargadas en la sesión.
 * @param {string} temaVisual - Nombre del tema visual preferido.
 * @returns {boolean} true si se completó el guardado en localStorage sin errores, o false en caso contrario.
 */
function guardarEstudioAjedrez(idEstudio, variantesArrayObj, temaVisual) {
  try {
    // Complete la lógica aquí

    return true;
  } catch (e) {
    return false;
  }
}

// SUITE DE PRUEBAS
console.log(
  '=== EVALUANDO SOLUCIÓN REPASO PRÁCTICO AJEDREZ (VERSIÓN EVALUACIÓN REPASO) ===',
);

const r1 = evaluarVentajaMaterial(
  { peones: 8, caballos: 2, alfiles: 2, torres: 2, damas: 1 },
  { peones: 7, caballos: 1, alfiles: 2, torres: 2, damas: 1 },
  1.2,
);

const r2 = formatearTitularPartida(
  'carlsen - nakamura en ronda final',
  'defensa siciliana',
);

const r3 = evaluarLicenciaArbitro(
  '2026-01-01T00:00:00Z',
  365,
  '2027-01-01T00:00:00Z',
);

/*const r4 = configurarTableroRetransmision('/live?partidaId=FIDE_99');

const r5 = guardarEstudioAjedrez(
  'siciliana_nadjorf',
  [{ paso: 1, mov: 'e4' }],
  'madera_oscura',
);*/

console.log(r1);

console.log('=== FIN PRUEBAS  ===');
