document.addEventListener("DOMContentLoaded", () => {

  // Continue → question page
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = "question.html";
      }, 500);
    });
  }

  // Floating hearts (same as index)
  const heartsBox = document.getElementById("hearts");
  if (heartsBox) {
    setInterval(() => {
      const heart = document.createElement("span");
      heart.textContent = "💗";
      heart.className = "heart";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 3 + "s";

      heartsBox.appendChild(heart);

      setTimeout(() => heart.remove(), 7000);
    }, 650);
  }

});