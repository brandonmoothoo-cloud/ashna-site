// Typing effect
const text = "Hello Ashna ✨";
let i = 0;
const el = document.getElementById("type");

function type() {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Glow follows finger/mouse
const glow = document.querySelector(".glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
document.addEventListener("touchmove", e => {
  glow.style.left = e.touches[0].clientX + "px";
  glow.style.top = e.touches[0].clientY + "px";
});

// Magic button effects
const btn = document.getElementById("magicBtn");
btn.onclick = () => {
  btn.innerText = "💖 You’re amazing";
  for (let i = 0; i < 40; i++) spawnHeart();
};

// Hearts
function spawnHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 24 + 16 + "px";
  heart.style.animation = "floatUp 3s linear forwards";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

// Animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

// Secret easter egg
let taps = 0;
document.body.addEventListener("click", () => {
  taps++;
  if (taps === 10) {
    document.getElementById("secret").style.opacity = 1;
  }
});
