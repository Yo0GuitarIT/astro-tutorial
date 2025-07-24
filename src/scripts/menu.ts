(() => {
  const hamburger = document.querySelector(".hamburger");
  if (!hamburger) return;
  hamburger.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    if (!navLinks) return;
    navLinks.classList.toggle("expanded");
  });
})();
