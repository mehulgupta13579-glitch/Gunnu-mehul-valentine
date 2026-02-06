document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     YES → FINAL PAGE
  ====================== */
  const yesBtn = document.getElementById("yesBtn");
  let navigating = false;

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      if (navigating) return;
      navigating = true;

      // prevent double tap
      yesBtn.style.pointerEvents = "none";

      // smooth exit
      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = "final.html";
      }, 400);
    });
  }

  /* ======================
     NO BUTTON ESCAPE 😈
     (YES position stays FIXED)
  ====================== */
  const noBtn = document.getElementById("noBtn");
  const btnArea = document.getElementById("btnArea");

  let escapeActivated = false;

  function moveNoButton() {
    const maxX = btnArea.clientWidth - noBtn.offsetWidth;
    const maxY = btnArea.clientHeight - noBtn.offsetHeight;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  }

  if (noBtn && btnArea) {

    // initial lock
    const rect = noBtn.getBoundingClientRect();
    const areaRect = btnArea.getBoundingClientRect();

    noBtn.style.position = "absolute";
    noBtn.style.left = rect.left - areaRect.left + "px";
    noBtn.style.top = rect.top - areaRect.top + "px";

    // DESKTOP
    btnArea.addEventListener("mousemove", (e) => {
      const btnRect = noBtn.getBoundingClientRect();

      const near =
        e.clientX > btnRect.left - 40 &&
        e.clientX < btnRect.right + 40 &&
        e.clientY > btnRect.top - 40 &&
        e.clientY < btnRect.bottom + 40;

      if (near) moveNoButton();
    });

    // MOBILE 😈🔥
    noBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      moveNoButton();
    });

  }
  /* ======================
     FLOATING HEARTS ❤️
  ====================== */
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

yesBtn.addEventListener("click", () => {
  if (navigating) return;
  navigating = true;

  localStorage.setItem("playMusic", "yes"); // 🔥 THIS LINE

  document.body.classList.add("page-exit");

  setTimeout(() => {
    window.location.href = "final.html";
  }, 400);
});

// 🎵 Music on YES click
const yesBtn = document.getElementById("yesBtn");
const bgMusic = document.getElementById("bgMusic");

if (yesBtn && bgMusic) {
  yesBtn.addEventListener("click", () => {
    bgMusic.play().then(() => {
      setTimeout(() => {
        window.location.href = "final.html";
      }, 700);
    }).catch(() => {
      window.location.href = "final.html";
    });
  });
}