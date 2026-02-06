document.addEventListener("DOMContentLoaded", () => {

  // soft floating hearts (lighter than other pages)
  const heartsBox = document.getElementById("hearts");
  if (heartsBox) {
    setInterval(() => {
      const heart = document.createElement("span");
      heart.textContent = "💗";
      heart.className = "heart";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 5 + Math.random() * 3 + "s";
      heart.style.opacity = "0.6";

      heartsBox.appendChild(heart);

      setTimeout(() => heart.remove(), 8000);
    }, 900);
  }

});
document.addEventListener("DOMContentLoaded", () => {

  const music = document.getElementById("bgMusic");

  if (music && localStorage.getItem("playMusic") === "yes") {
    music.volume = 0.6;

    music.play().then(() => {
      // music started 🎶
      localStorage.removeItem("playMusic");
    }).catch(() => {
      // fallback: first touch will start it
      document.addEventListener("click", () => music.play(), { once: true });
      document.addEventListener("touchstart", () => music.play(), { once: true });
    });
  }

});
// Resume music if browser pauses it
document.addEventListener("visibilitychange", () => {
  const music = document.getElementById("bgMusic");
  if (music && document.visibilityState === "visible") {
    music.play().catch(() => {});
  }
});