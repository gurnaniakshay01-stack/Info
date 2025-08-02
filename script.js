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
  