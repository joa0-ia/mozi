/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

/* =========================
   PARALLAX
========================= */

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const heroPhoto = document.querySelector(".hero-photo");

  if (heroPhoto) {
    heroPhoto.style.transform = `translateY(${scroll * 0.12}px)`;
  }
});

/* =========================
   CONTADOR
========================= */

const startDate = new Date("2026-06-12T00:00");

function updateCounter() {
  const now = new Date();

  const difference = now.getTime() - startDate.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = days;

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

setInterval(updateCounter, 1000);

updateCounter();

/* =========================
   GALERIA / LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;

    lightbox.classList.add("active");
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
}

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

/* =========================
   CARTA
========================= */

const letterText = `
Meu amor,

eu queria que você soubesse o quanto é especial para mim.

Cada conversa, cada risada, cada abraço e cada pequeno momento ao seu lado se tornou uma memória que eu quero guardar para sempre.

Talvez eu não consiga colocar em palavras tudo aquilo que sinto, mas espero que essa pequena página consiga mostrar pelo menos uma parte.

Obrigado por existir na minha vida.

Eu te amo muito.
`;

function openLetter() {
  const modal = document.getElementById("letterModal");

  const textElement = document.getElementById("typedText");

  modal.classList.add("active");

  textElement.textContent = "";

  let index = 0;

  const typing = setInterval(() => {
    textElement.textContent += letterText[index];

    index++;

    if (index >= letterText.length) {
      clearInterval(typing);
    }
  }, 25);
}

function closeLetter() {
  document.getElementById("letterModal").classList.remove("active");
}

/* =========================
   CORAÇÕES AO CLICAR
========================= */

document.addEventListener("click", (event) => {
  if (event.target.closest(".love-button, .open-letter, .hero-photo")) {
    createHeartExplosion(event.clientX, event.clientY);
  }
});

function createHeartExplosion(x, y) {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.textContent = Math.random() > 0.5 ? "❤️" : "♡";

    heart.style.left = x + (Math.random() * 100 - 50) + "px";

    heart.style.top = y + (Math.random() * 50 - 25) + "px";

    heart.style.fontSize = 15 + Math.random() * 25 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

/* =========================
   BOTÃO FINAL
========================= */

function loveExplosion(event) {
  createHeartExplosion(event.clientX, event.clientY);

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createHeartExplosion(
        window.innerWidth / 2 + (Math.random() * 300 - 150),

        window.innerHeight / 2 + (Math.random() * 200 - 100),
      );
    }, i * 50);
  }
}
