// ==============================
// Scroll Reveal Animations
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, .card, .gallery-img");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});

// ==============================
// Lightbox para Galeria
// ==============================
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const imgElement = document.createElement("img");
    imgElement.src = img.src;
    lightbox.innerHTML = "";
    lightbox.appendChild(imgElement);
  });
});

lightbox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

// ==============================
// Validação de Formulário
// ==============================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // Aqui você poderia enviar para backend ou Formspree
    alert("✅ Obrigado pelo contato, " + nome + "! Sua mensagem foi enviada.");
    form.reset();
  });
}

