window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('navbar-scrolled', 'shadow');
    } else {
        nav.classList.remove('navbar-scrolled', 'shadow');
    }
});

// Initialize carousel
// const myCarousel = new bootstrap.Carousel('#heroCarousel', {
//   interval: 5000,
//   pause: 'hover',
//   ride: 'carousel'
// });
















// Prime Land & Plots

// Function to check if element is in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.snap-section').forEach(section => {
    observer.observe(section);
});
















// gallery image slider

// Lightbox Gallery
const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');
const nextBtn = document.querySelector('.lightbox-next');
const prevBtn = document.querySelector('.lightbox-prev');

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        showImage(index);
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'Escape') closeBtn.click();
});





















// download model
// Brochure Download Form
document.addEventListener("DOMContentLoaded", function () {

  const nameInput = document.getElementById("userName");
  const phoneInput = document.getElementById("userPhone");
  const emailInput = document.getElementById("userEmail");
  const downloadBtn = document.getElementById("downloadBtn");
  const form = document.getElementById("downloadForm");

  function validateForm() {
    const nameValid = nameInput.value.trim().length > 2;

    const phoneRegex = /^[0-9]{10}$/;   // EXACTLY 10 digits
    const phoneValid = phoneRegex.test(phoneInput.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(emailInput.value);

    if (nameValid && phoneValid && emailValid) {
      downloadBtn.disabled = false;
    } else {
      downloadBtn.disabled = true;
    }
  }

  nameInput.addEventListener("input", validateForm);
  phoneInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);

 form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!downloadBtn.disabled) {

    const pdfUrl = "assets/UTTAR GAURIPUR - PROJECT PLAN.pdf";

    // 🔹 1. Trigger Download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Lakeview_Township_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 🔹 2. Open PDF in NEW TAB
    window.open(pdfUrl, "_blank");

    // 🔹 3. Close Modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("downloadModal")
    );
    modal.hide();

    // 🔹 4. Reset Form
    form.reset();
    downloadBtn.disabled = true;
  }
});



});

