// Smooth scrolling function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

// Interactive functions
function downloadGuide() {
  alert("Free guide download would be triggered here!");
}

function connectWithUs() {
  alert("Contact form or meeting scheduler would open here!");
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Parallax effect on floating logos
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const logos = document.querySelectorAll(".logo-item");

  logos.forEach((logo, index) => {
    const speed = (index + 1) * 0.1;
    logo.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Initialize first section as visible
document.querySelector(".hero-section").classList.add("visible");

// Navigation functionality
let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;

function navigateSection(direction) {
  currentSection += direction;
  
  if (currentSection < 0) {
    currentSection = totalSections - 1;
  } else if (currentSection >= totalSections) {
    currentSection = 0;
  }
  
  sections[currentSection].scrollIntoView({
    behavior: 'smooth'
  });
}

// Update current section based on scroll position
function updateCurrentSection() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = index;
    }
  });
}

// Listen for scroll events to update current section
window.addEventListener('scroll', updateCurrentSection);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    navigateSection(-1);
  } else if (e.key === 'ArrowRight') {
    navigateSection(1);
  }
});