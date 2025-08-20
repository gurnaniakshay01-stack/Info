// script.js

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thanks! We'll get back to you soon.");
  }
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    document.querySelector("header").classList.toggle("dark");
    document.querySelectorAll("section").forEach((s) =>
      s.classList.toggle("dark")
    );
    document.querySelector("footer").classList.toggle("dark");
  }
  
// Smooth Scroll Animation
let startTime = null;
const duration = 1000; // match transition duration
const startPosition = window.pageYOffset;
const distance = 500;

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animatescroll(currentTime) {
  if (startTime === null) startTime = currentTime;
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);
  const easedProgress = easeInOutCubic(progress);
  const newPosition = startPosition + distance * easedProgress;

  window.scrollTo(0, newPosition);

  if (elapsedTime < duration) {
    window.requestAnimationFrame(animatescroll);
  }
}

// Page Fade In & Scroll Trigger
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("visible");

  setTimeout(() => {
    window.requestAnimationFrame(animatescroll);
  }, 1000); // scroll starts after fade-in completes
});

// Fade Out on Page Unload (refresh/close)
window.addEventListener("beforeunload", (e) => {
  document.body.classList.remove("visible");
  document.body.classList.add("fade-out");

  e.preventDefault();
  e.returnValue = '';
});

// // Smooth scroll on load
// let startTime = null;
// const duration = 1000;
// const startPosition = window.pageYOffset;
// const distance = 500;

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animatescroll(currentTime) {
  if (startTime === null) startTime = currentTime;
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);
  const easedProgress = easeInOutCubic(progress);
  const newPosition = startPosition + distance * easedProgress;

  window.scrollTo(0, newPosition);

  if (elapsedTime < duration) {
    window.requestAnimationFrame(animatescroll);
  }
}

// Handle fade-in on load and scroll animation setup
document.addEventListener("DOMContentLoaded", () => {
  // Fade in body
  requestAnimationFrame(() => {
    document.body.classList.add("visible");
  });

  // Smooth scroll after fade-in
  setTimeout(() => {
    window.requestAnimationFrame(animatescroll);
  }, 1000);

  // Automatically apply scroll-fade class to all child elements of body
  const bodyChildren = document.body.querySelectorAll("body *");
  bodyChildren.forEach(el => {
    if (!el.classList.contains('no-scroll-fade')) {
      el.classList.add("scroll-fade");
    }
  });

  // Observe scroll-fade elements
  const animatedItems = document.querySelectorAll(".scroll-fade");

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedItems.forEach(item => {
    scrollObserver.observe(item);
  });
});

// Fade out on unload
window.addEventListener("beforeunload", (e) => {
  document.body.classList.remove("visible");
  document.body.classList.add("fade-out");
  e.preventDefault();
  e.returnValue = '';
});

// // Fade out on link clicks
// document.querySelectorAll("a").forEach(link => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     document.body.classList.remove("visible");
//     document.body.classList.add("fade-out");

//     setTimeout(() => {
//       window.location.href = href;
//     }, 1000);
//   });
// });