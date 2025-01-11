function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const dynamicText = document.getElementById("dynamic-text");
  const cursor = document.getElementById("cursor");
  const phrases = ["I can act", "I can dance", "I can perform"]; // Array of phrases
  let currentText = "";
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeAndBackspace() {
    if (isDeleting) {
      currentText = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = phrases[phraseIndex].substring(0, charIndex + 1);
      charIndex++;
    }

    dynamicText.textContent = currentText;

    if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      // After typing, start deleting after a pause
      setTimeout(() => {
        isDeleting = true;
      }, 1000); // Delay before backspacing
    } else if (isDeleting && charIndex === 0) {
      // After deleting, switch to the next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    // Speed of typing and backspacing
    const speed = isDeleting ? 100 : 150;
    setTimeout(typeAndBackspace, speed);
  }

  // Start typing the first phrase
  typeAndBackspace();
});
