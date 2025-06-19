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

// Cursor tracking on device mockup
document.querySelector(".device-mockup")?.addEventListener("mousemove", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;

  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});

document
  .querySelector(".device-mockup")
  ?.addEventListener("mouseleave", (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateY(-15deg)";
  });

// Initialize first section as visible
document.querySelector(".hero-section").classList.add("visible");
