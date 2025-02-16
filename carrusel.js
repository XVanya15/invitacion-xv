let currentIndex = 0;
const images = document.querySelector('.carrusel-images');
const totalImages = document.querySelectorAll('.carrusel img').length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  images.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000);
