/*1 Crea esPantallaMovil(). Consulta window.innerWidth y retorna true
si el ancho de la ventana es inferior a 768px, o false si es igual o superior.*/

function esPantallaMovil() {
  return window.innerWidth < 768;
}

/*2 Crea verificarEstadoRed(). Retorna un objeto con las propiedades online
(obtenida de navigator.onLine) e idioma (obtenida de navigator.language).*/

function verificarEstadoRed() {
  return {online: navigator.onLine, idioma: navigator.language};
}

/*3 Crea extraerlaSalaUrl(urlPrueba). Extrae y devuelve el valor del parámetro
nquery ?sala= de la URL recibida usando indexOf() y slice().*/

function extraerlaSalaUrl(urlPrueba) {
  const PARAMETRO = '?sala=';

  urlPrueba = urlPrueba.replace(' ', ''); //Por si se ha colado un espacio en la url

  let inicio = urlPrueba.indexOf(PARAMETRO) + PARAMETRO.length;

  let final =
    urlPrueba.indexOf('&', inicio) !== -1
      ? urlPrueba.indexOf('&', inicio)
      : urlPrueba.length;

  return urlPrueba.slice(inicio, final);
}

//console.log(extraerlaSalaUrl('https://ejemplo.com?sala=101'));

/*4 Crea confirmarOfertaTablas(). Muestra un diálogo emergente con
window.confirm('¿Aceptas la oferta de tablas del rival?') y retorna la decisión booleana del usuario.*/

function confirmarOfertaTablas() {
  return window.confirm('¿Aceptas la oferta de tablas del rival?');
}

/*5 Crea programarAlertaApuro(segundosAviso, callbackAlerta). Programa la ejecución
de callbackAlerta tras los segundos indicados convirtiendo a milisegundos con setTimeout().*/

function programarAlertaApuro(segundosAviso, callbackAlerta) {
  setTimeout(callbackAlerta, segundosAviso * 1000);
}

/*6 Crea iniciarRelojBlitz(segundosIniciales, callbackTick, callbackFin). Inicia un intervalo con
setInterval() cada 100 ms decementando el tiempo. Al llegar a 0, detiene con clearInterval() y ejecuta callbackFin().*/

function iniciarRelojBlitz(segundosIniciales, callbackTick, callbackFin) {
  const intervalo = setInterval(() => {

    segundosIniciales = segundosIniciales - 0.1;

    if (segundosIniciales <= 0) {
      clearInterval(intervalo);
      callbackFin();
      return;
    }

    callbackTick(segundosIniciales);
  }, 100);
}