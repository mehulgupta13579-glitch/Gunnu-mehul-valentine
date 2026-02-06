document.addEventListener("DOMContentLoaded", () => {

  // OPEN IT → story page
  const openBtn = document.getElementById("openBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = "story.html";
      }, 500);
    });
  }

  // Floating hearts
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
    }, 600);
  }

});