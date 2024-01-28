// When the user scrolls down 1px from the top of the document, make the navbar transparent
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    navbar.style.backgroundColor = "rgba(51, 51, 51, 0.5)"; // This will make the navbar semi-transparent
  } else {
    navbar.style.backgroundColor = "#1A1E1F"; // This will make the navbar opaque
  }
}



let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const track = document.querySelector('.carousel-track');
let autoPlayInterval = 8000; // 8 seconds for each slide
let intervalId;

function moveSlide(step) {
  currentIndex += step;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startAutoPlay() {
  intervalId = setInterval(() => {
    moveSlide(1);
  }, autoPlayInterval);
}

startAutoPlay();

// Optional: Pause on hover
document.querySelector('.carousel').addEventListener('mouseenter', () => clearInterval(intervalId));
document.querySelector('.carousel').addEventListener('mouseleave', startAutoPlay);

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function moveToSlide(slideIndex) {
  currentIndex = slideIndex;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
  updateDots();
}

function moveSlide(step) {
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

// Initialize the carousel
moveToSlide(0); // To set the first dot as active

// ... existing autoplay setup ...

// Optional: update dots when autoplay changes slides
function startAutoPlay() {
  intervalId = setInterval(() => {
    moveSlide(1);
    updateDots(); // Update the dots to reflect the new active slide
  }, autoPlayInterval);
}










function toggleFaqAnswer(element) {
  var answer = element.nextElementSibling;
  var isActive = answer.style.display === 'block';

  // Hide the answer if it's already active
  if (isActive) {
    answer.style.display = 'none';
  } else {
    // Show the answer if it's not active
    answer.style.display = 'block';
  }
}


function toggleFaqAnswer(element) {
  // Get the answer element
  var answer = element.nextElementSibling;

  // Check if the answer is currently displayed
  var isAnswerVisible = answer.style.display === 'block';

  // Show or hide the answer
  answer.style.display = isAnswerVisible ? 'none' : 'block';

  // Rotate the arrow icon
  var arrowIcon = element.querySelector('.arrow');
  if (isAnswerVisible) {
    // If the answer is visible, rotate the icon back to its original state
    arrowIcon.classList.remove('fa-angle-up');
    arrowIcon.classList.add('fa-angle-down');
  } else {
    // If the answer is hidden, rotate the icon to indicate expansion
    arrowIcon.classList.remove('fa-angle-down');
    arrowIcon.classList.add('fa-angle-up');
  }
}
