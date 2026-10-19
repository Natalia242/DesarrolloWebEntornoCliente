/*Crea la función procesarResumenTorneo(cadenaEntrada) que procese una cadena con la siguiente estructura:
const entrada = " TORNEO: FIDE Madrid Masters 2026 | PUNTOS: 4.5/6 | ELO_MEDIO: 2150.80 ";

• 1. Saneamiento de Cadena (String): Elimina los espacios de los extremos con trim(). Extrae el nombre del torneo
(entre 'TORNEO:' y el primer signo '|'), límpialo de espacios y conviértelo totalmente a mayúsculas con toUpperCase().
• 2. Extracción y Despiece de Puntos (String & Number): Localiza la subcadena de puntos (ej. "4.5/6") desglosándola
mediante split('/'). Parsea los puntos ganados con Number.parseFloat() y el total de partidas con Number.parseInt().
• 3. Validación de ELO Medio (Number): Extrae el valor de ELO medio ("2150.80"), conviértelo a número flotante y
verifica estrictamente que sea un valor numérico válido utilizando !Number.isNaN() y Number.isFinite().
• 4. Cálculo Matemático de Performance FIDE (Math):
a) Calcula la tasa de victoria $P = \text{puntos} / \text{totalPartidas}$.
b) Calcula el ajuste de rating FIDE $d_p = \text{Math.round}(400 \times \text{Math.log10}(P / (1 - P)))$.
c) Determina la Performance final: $\text{Performance} = \text{Math.round}(\text{eloMedio} + d_p)$.
• 5. Salida Formateada (String + toFixed): Devuelve una cadena con Template Literals que incluya el porcentaje de
victoria formateado a 1 decimal mediante .toFixed(1):
Resultado esperado: "TORNEO: FIDE MADRID MASTERS 2026 | Rendimiento: 75.0% | Performance Rating: 2341 ELO"*/

function procesarResumenTorneo(cadenaEntrada) {
  //1
  cadenaEntrada = cadenaEntrada.trim().toUpperCase();

  let cadenaDividida = cadenaEntrada.split("|")

  let nombre = cadenaDividida[0];
  nombre = nombre.replace('TORNEO:', '').trim();

  //2
  let subcadenaPuntos = cadenaDividida[1]
    .replace('PUNTOS:', '')
    .trim()
    .split('/');
  let puntosGanados = Number.parseFloat(subcadenaPuntos[0]);
  let totalPartidas = Number.parseInt(subcadenaPuntos[1]);

  //3
  let elo = Number.parseFloat(cadenaDividida[2].replace('ELO_MEDIO:', '').trim());

  if (Number.isNaN(elo) || !Number.isFinite(elo)) {
    return 'Error: ELO medio no válido';
  }

  //4
  const P = puntosGanados / totalPartidas;
  const d_p = Math.round(400 * Math.log10(P / (1 - P)));
  const performance = Math.round(elo + d_p);

  //5
  return `TORNEO: ${nombre} | Rendimiento: ${(P * 100).toFixed(1)}% | Performance Rating: ${performance} ELO`;
}

const entrada = " TORNEO: FIDE Madrid Masters 2026 | PUNTOS: 4.5/6 | ELO_MEDIO: 2150.80 ";
console.log(procesarResumenTorneo(entrada));