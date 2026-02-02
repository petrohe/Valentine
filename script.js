const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".buttons");

noBtn.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

document.getElementById("yesBtn").addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      font-size:40px;
      color:white;
      text-align:center;
    ">
      YAYYYY 💕🥰<br/>Best Valentine ever.
    </div>
  `;
});
