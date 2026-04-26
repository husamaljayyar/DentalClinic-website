const toggleMenu = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.onclick = () => {
      mainNav.classList.toggle("active");
      menuToggle.innerHTML = mainNav.classList.contains("active") ? "✕" : "☰";
    };
  }
};

toggleMenu();
