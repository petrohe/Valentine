const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".buttons");

let noCount = 0;

// move the No button
function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  noCount++;
  noBtn.innerText = `Nice try (${noCount}) 😏`;
}

// desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// mobile touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// if she somehow clicks No
noBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      font-size:32px;
      color:white;
      text-align:center;
      padding:20px;
    ">
      Okay okay 😅<br/>
      I’ll take that as a maybe…<br/><br/>
      But you’re still kinda amazing 💖
    </div>
  `;
});

// YES button celebration
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      font-size:40px;
      color:white;
      text-align:center;
      flex-direction:column;
    ">
      YAYYYYY 🎉💖<br/>
      Best Valentine ever 🥰
    </div>
  `;

  confettiExplosion();
});

// CONFETTI 🎉
function confettiExplosion() {
  for (let i = 0; i
