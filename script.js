// JavaScript Toggle Galeri
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleGallery");
  const gallerySection = document.getElementById("gallerySection");

  let visible = true;

  toggleBtn.addEventListener("click", () => {
    if (visible) {
      gallerySection.classList.remove("fade-in");
      gallerySection.classList.add("fade-out");
      setTimeout(() => {
        gallerySection.style.display = "none";
      }, 700);
      visible = false;
    } else {
      gallerySection.style.display = "flex";
      gallerySection.classList.remove("fade-out");
      gallerySection.classList.add("fade-in");
      visible = true;
    }
  });
});
