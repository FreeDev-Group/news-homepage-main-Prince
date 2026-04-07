// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.querySelector(".menu-close");
const mobileBackdrop = document.querySelector(".mobile-menu-backdrop");
const mobileLinks = document.querySelectorAll(".mobile-link");

function openMenu() {
  mobileMenu.classList.add("active");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

// Toggle menu on hamburger click
menuToggle.addEventListener("click", () => {
  if (mobileMenu.classList.contains("active")) {
    closeMenu();
    return;
  }

  openMenu();
});

menuClose.addEventListener("click", closeMenu);
mobileBackdrop.addEventListener("click", closeMenu);

// Close menu when clicking on a link
mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnToggle &&
    mobileMenu.classList.contains("active")
  ) {
    closeMenu();
  }
});

// Close menu on escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.classList.contains("active")) {
    closeMenu();
  }
});
