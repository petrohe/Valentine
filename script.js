const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".buttons");

let noCount = 0;

// ensure No button starts somewhere valid
noBtn.style.left = "0px";
noBtn.style.top = "0px";

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  noCount++;
  noBtn.textContent = `Nice try (${noCount}) 😏`;
}

// DESKTOP: move on hover
noBtn.addEventListener("mouseenter", moveNoButton);

// MOBILE: move on touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// YES button
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      flex-direction:column;
      background:linear-gradient(135deg,#ff9a9e,#fad0c4);
      color:white;
      text-align:center;
      font-size:40px;
    ">
      YAYYYYY 🎉💖<br/>
      Best Valentine ever 🥰
    </div>
  `;

  confetti();
});

// CONFETTI
function confetti() {
  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.width = "8px";
    c.style.height = "8px";
    c.style.backgroundColor = randomColor();
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    c.style.opacity = Math.random();
    c.style.transition = "top 2s ease-out, opacity 2s";
    document.body.appendChild(c);

    setTimeout(() => {
      c.style.top = "110vh";
      c.style.opacity = "0";
    }, 50);

    setTimeout(() => c.remove(), 2000);
  }
}

function randomColor() {
  const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0", "#f72585"];
  return colors[Math.floor(Math.random() * colors.length)];
}
