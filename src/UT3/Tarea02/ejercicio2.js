/*Desarrolla la función gestionarMonitorSalaTorneo(urlPrueba) que realice una auditoría integral del entorno del cliente:

• Desglose de Parámetros URL (location.search): A partir de urlPrueba o window.location.href (ej.
  'http://localhost/game?sala=402&jugador=Jugador1#ronda1'), extrae los parámetros de consulta tras el signo '?' y
  construye un objeto con las parejas clave-valor (ej. { sala: '402', jugador: 'Jugador1' }).
• Estado de Red y Registro de Pulso (navigator.onLine / Date): Comprueba si navigator.onLine es true. Genera una marca
  de tiempo con la fecha y hora actual formateada en español mediante new Date().toLocaleString('es-ES').
• Adaptabilidad Responsive (window.innerWidth): Evalúa window.innerWidth y asigna la categoría: 'DESKTOP' (≥ 1024px),
  'TABLET' (600px - 1023px) o 'MOBILE' (< 600px).
• Protección de Salida Segura (confirm / location.replace): Si el jugador está fuera de línea (online === false), lanza una
  alerta de confirmación con window.confirm('Sin conexión. ¿Deseas reconectar con el Lobby?'). Si el usuario acepta, ejecuta
  la redirección limpia window.location.replace('/lobby').

// Salida de retorno esperada:
{ parametrosUrl: { sala: '402', jugador: 'Jugador1' }, online: true, modoPantalla: 'DESKTOP',
registroPulso: '18/10/2026, 14:00:00' }*/

function gestionarMonitorSalaTorneo(urlPrueba) {
  const url = (urlPrueba || window.location.href).trim().split('?')[1];

  let parametros = url.split('#')[0].split('&');

  let parametrosUrl = {}; // Para guardar clave-valor

  parametros.forEach((parametro) => {
    const [clave, valor] = parametro.split('=');
    parametrosUrl[clave] = valor;
  });

  const online = navigator.onLine;
  const registroPulso = new Date().toLocaleString('es-ES');

  let modoPantalla =
    window.innerWidth >= 1024
      ? 'DESKTOP'
      : window.innerWidth >= 600
        ? 'TABLET'
        : 'MOBILE';

  if (online === false)
    if (window.confirm('Sin conexión. ¿Deseas reconectar con el Lobby?'))
      window.location.replace('/lobby');

  // Se puede usar un solo if y && para que quede mejor, pero es lo mismo.
  //if (online === false && window.confirm('Sin conexión. ¿Deseas reconectar con el Lobby?')) window.location.replace('/lobby');

  return { parametrosUrl, online, modoPantalla, registroPulso };
}

console.log(
  gestionarMonitorSalaTorneo(
    'http://localhost/game?sala=402&jugador=Jugador1#ronda1',
  ),
);