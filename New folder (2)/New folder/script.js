// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.querySelector("ul").classList.toggle("show");
});

// Dark/Light Mode
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Smooth Scroll for Nav Links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    navMenu.querySelector("ul").classList.remove("show");
  });
});

// Search Function
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", e => {
  e.preventDefault();
  const query = document.getElementById("search").value.toLowerCase();
  const sections = document.querySelectorAll("section");
  let found = false;

  sections.forEach(sec => {
    if (sec.textContent.toLowerCase().includes(query)) {
      sec.scrollIntoView({ behavior: "smooth" });
      sec.style.background = "rgba(255,255,0,0.1)";
      found = true;
      setTimeout(() => sec.style.background = "transparent", 1500);
    }
  });

  if (!found) alert("No matching section found!");
});

// Fade-in Animation
const sections = document.querySelectorAll(".fade-section");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) section.classList.add("visible");
  });
});
// Back to Top Button
const backToTop = document.getElementById("back-to-top");
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});
// Form Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  alert("Form submitted successfully!");
});



// Tooltip Functionality
const tooltipElements = document.querySelectorAll("[data-tooltip]");
tooltipElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = el.getAttribute("data-tooltip");
    document.body.appendChild(tooltip);

    const rect = el.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY}px`;
  });

  el.addEventListener("mouseleave", () => {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) tooltip.remove();
  });
});
// Image Carousel
const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
let currentIndex = 0;
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

nextBtn.addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add("active");
});
// Pause carousel on hover
carousel.addEventListener("mouseenter", () => {
  clearInterval(carouselInterval);
});
carousel.addEventListener("mouseleave", () => {
  carouselInterval = setInterval(() => {
    nextBtn.click();
  }, 3000);
});

let carouselInterval = setInterval(() => {
  nextBtn.click();
}, 3000);
// Initialize carousel interval
carouselInterval;
// Pointer Cursor Toggle
const pointerToggle = document.getElementById("pointer-toggle");
pointerToggle.addEventListener("click", () => {
  document.body.classList.toggle("pointer-events-none");
});
// Toggle pointer cursor    
    if (document.body.classList.contains("pointer-events-none")) {
      pointerToggle.textContent = "Enable Pointer";
    } else {
      pointerToggle.textContent = "Disable Pointer";
    }
    