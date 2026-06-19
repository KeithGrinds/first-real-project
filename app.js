// =====================
// TYPEWRITER EFFECT
// =====================
const text = "TACTICAL LUXURY HEADWEAR";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();


// =====================
// HAMBURGER MENU
// =====================
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}


// =====================
// SMOOTH SCROLL
// =====================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}


// =====================
// NAV HIDE / SHOW ON SCROLL
// =====================
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.transform = "translateY(-100%)"; // hide
  } else {
    navbar.style.transform = "translateY(0)"; // show
  }

  lastScroll = currentScroll;
});
