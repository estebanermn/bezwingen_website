const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let index = 0;

function showSlide(i) {
  if (i < 0) index = slides.length - 1;
  else if (i >= slides.length) index = 0;
  else index = i;

  const offset = -index * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

next.addEventListener("click", () => showSlide(index + 1));
prev.addEventListener("click", () => showSlide(index - 1));

// Cambio automático cada 4s
setInterval(() => showSlide(index + 1), 4000);

// Inicial
showSlide(index);

// Inicializar posición
showSlide(0);

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ----- Carrusel horizontal de productos ----- */
const prodContainer = document.querySelector(".productos-container");
const prodNext = document.querySelector(".prod-next");
const prodPrev = document.querySelector(".prod-prev");

prodNext.addEventListener("click", () => {
  prodContainer.scrollBy({ left: 300, behavior: "smooth" });
});

prodPrev.addEventListener("click", () => {
  prodContainer.scrollBy({ left: -300, behavior: "smooth" });
});
