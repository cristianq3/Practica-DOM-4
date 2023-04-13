/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero. */
function obtenerFechayHora() {
  let fechaActual = new Date();

  let diasSemanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let parrafoFecha = document.querySelector(".fecha");
  let parrafoHora = document.querySelector("#hora");

  parrafoFecha.innerHTML = `${
    diasSemanas[fechaActual.getDay()]
  } ${fechaActual.getDate()} de ${
    meses[fechaActual.getMonth()]
  } de ${fechaActual.getFullYear()} `;

  let horas = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();

  let ampm = horas >= 12 ? "PM" : "AM";

  horas = horas % 12 || 12;

  if (segundos < 10) {
    segundos = `0${segundos}`;
  }

  if (minutos < 10) {
    minutos = `0${minutos}`;
  }

  if (horas < 10) {
    horas = `0${horas}`;
  }

  parrafoHora.innerHTML = `${horas}:${minutos}:${segundos} ${ampm}`;
  parrafoHora.className = "display-1 text-center hora";
}

setInterval(obtenerFechayHora, 1000);
