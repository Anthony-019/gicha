const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});


// Fade in on scroll
const welcomeSection = document.querySelector('.welcome');

window.addEventListener('scroll', () => {
  const sectionTop = welcomeSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint) {
    welcomeSection.classList.add('active');
  }
});

// home section
  document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.querySelector(".home");

    // Array of background image paths
    const backgrounds = [
      "assets/homebg1.jpg",
      "assets/homebg2.jpg",
      "assets/homebg3.jpg",
     "assets/homebg4.jpg"
    ];

    let bgIndex = 0;

    // Function to update background image
    function changeBackground() {
      if (homeSection) {
        homeSection.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
        bgIndex = (bgIndex + 1) % backgrounds.length;
      }
    }

    // Set initial background and start the interval
    changeBackground();
    setInterval(changeBackground, 4000); // Change every 6 seconds
  });

// about section

  ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 1500,
    delay: 200
  });

  ScrollReveal().reveal('.about-img img', { origin: 'left' });
  ScrollReveal().reveal('.about-content', { origin: 'right' });

// services section
// Scroll reveal for service cards
document.addEventListener("DOMContentLoaded", () => {
  const srElements = document.querySelectorAll(".sr-fade, .sr-zoom, .sr-flip, .sr-rotate");

  const observerOptions = {
    threshold: 0.2
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("sr-show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  srElements.forEach(el => {
    revealOnScroll.observe(el);
  });
});


