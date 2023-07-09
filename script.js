//Visiter Counter App
const visiterLink = document.getElementById('visiter-link');
const visiterCount = document.getElementById('visiter-count');
let count = 0;
visiterLink.addEventListener('click', () => {
  count++;
  updatevisiterCount();
});
function updatevisiterCount() {
  visiterCount.textContent = `${count} visiters`;
}

//Countdown Timer
const countdownTimer = document.getElementById('countdown-timer');
const countdownDate = new Date('2023-07-10').getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  countdownTimer.innerHTML = `
    <div>${days} days</div>
    <div>${hours} hours</div>
    <div>${minutes} minutes</div>
    <div>${seconds} seconds</div>
  `;
  if (timeRemaining < 0) {
    countdownTimer.innerHTML = 'Timer has ended!';
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

//Slideshow or Image Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.destination-card img');
console.log(slides); 
function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}
setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);
