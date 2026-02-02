const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".buttons");

// function to move the button
function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// mobile touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // stops accidental tap
  moveNoButton();
});

// YES button celebration
document.getElementById("yesBtn").addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      font-size:40px;
      color:white;
      text-align:cente

