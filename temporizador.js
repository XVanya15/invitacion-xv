const countDownDate = new Date("May 3, 2025 18:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "¡La fecha ha llegado!";
  }
}, 1000);
