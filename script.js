document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery img");

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="Cake Preview">
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const closeLightbox = lightbox.querySelector(".lightbox-close");

  galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      lightboxImage.src = image.src;
      lightbox.style.display = "flex";
    });
  });

  closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.textContent =
      "Thank you for contacting us. We will get back to you shortly.";

    contactForm.reset();
  });
});