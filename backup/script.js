// Reserved for future interactivity
console.log("CubeTech Innovations site loaded");

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Team Carousel Functionality
let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.team-card');
const dots = document.querySelectorAll('.dot');
const totalSlides = Math.ceil(cards.length / 4); // Assuming 4 cards per slide

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;
  updateCarousel();
}

function updateCarousel() {
  const slideWidth = 260 + 24; // card width + gap
  track.style.transform = `translateX(-${currentSlide * slideWidth * 4}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Touch/Swipe Support
let startX = 0;
let endX = 0;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;
  if (Math.abs(diff) > 50) { // Minimum swipe distance
    if (diff > 0) {
      moveSlide(1); // Swipe left, move to next
    } else {
      moveSlide(-1); // Swipe right, move to previous
    }
  }
}

// Initialize carousel
updateCarousel();
