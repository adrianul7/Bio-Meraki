let slideIndex = 0;
const slides = document.querySelector('.carousel-images');
const totalSlides = slides.children.length;

function moveSlide(direction) {
  slideIndex += direction;
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function toggleInfo(featureId) {
  const info = document.getElementById(featureId);
  info.style.display = info.style.display === "block" ? "none" : "block";
}

function toggleFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  form.style.display = form.style.display === "block" ? "none" : "block";
}

function submitFeedback() {
  alert('¡Gracias por tu opinión! La revisaremos pronto.');
  document.getElementById('feedbackForm').style.display = 'none';
}