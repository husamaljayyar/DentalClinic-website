const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");

    if (mainNav.classList.contains("active")) {
      menuBtn.innerHTML = "✕";
    } else {
      menuBtn.innerHTML = "☰";
    }
  });
}
