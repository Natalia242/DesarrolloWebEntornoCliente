/*En la plataforma web de ajedrez, cuando un jugador entra a una sala de torneo privada desde una URL con query string
(ej. /sala?id=804&jugador=Kasparov&elo=2812), queremos validar la entrada, guardar la sesión de forma temporal y
programar un temporizador de desconexión automática por inactividad.
Crea la función iniciarSesionSalaTorneo(urlPrueba, minutosExpiracion) que ejecute los siguientes pasos:
1. Extracción BOM: Extrae los parámetros id, jugador y elo inspeccionando la URL recibida o window.location.search
mediante métodos de String (indexOf, slice, split).
2. Persistencia Temporal: Serializa el objeto de usuario resultante ({ id, jugador, elo: Number(elo), loginTime:
Date.now() }) con JSON.stringify() y guárdalo en sessionStorage bajo la clave 'fide_sesion_activa'.
3. Temporizador Asíncrono: Mide las dimensiones del viewport con window.innerWidth/innerHeight para clasificar el
dispositivo. Programa un setTimeout() de minutosExpiracion * 60 * 1000 ms que, al cumplirse, elimine la clave con
sessionStorage.removeItem('fide_sesion_activa') y ejecute una redirección limpia a '/lobby' mediante
window.location.replace().
4. Retorno: Devuelve el objeto de sesión creado para poder verificarlo.*/

function iniciarSesionSalaTorneo(urlPrueba, minutosExpiracion) {
  let url = urlPrueba || window.location.search;

  const posicion = url.indexOf('?');
  url = url.slice(posicion + 1);

  const parametros = {};

  for (let elemento of url.split('&')) {
    const parametroSeparado = elemento.split('=');
    //parametros[clave] = valor;
    parametros[parametroSeparado[0]] = parametroSeparado[1];
  }

  console.log(parametros);

  const { id, jugador, elo } = parametros;

  const sesion = { id, jugador, elo: Number(elo), loginTime: Date.now() };

  //sessionStorage.setItem(clave, valor)
  sessionStorage.setItem('fide_sesion_activa', JSON.stringify(sesion));

  const ancho = window.innerWidth;
  const alto = window.innerHeight; //No se utiliza en este caso

  let dispositivo;

  switch (true) {
    case ancho >= 1024:
      dispositivo = 'DESKTOP';
      break;
    case ancho >= 600:
      dispositivo = 'TABLET';
      break;
    default:
      dispositivo = 'MOBILE';
  }

  setTimeout(() => {
    sessionStorage.removeItem('fide_sesion_activa');
    window.location.replace('/lobby');
    }, minutosExpiracion * 60 * 1000);

  return sesion;

}

iniciarSesionSalaTorneo(
  '/sala?id=804&jugador=Kasparov&elo=2812',
  0.25,
);