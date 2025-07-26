function updateClocks() {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrDeg = hr * 30 + min * 0.5;

  document.getElementById("secondHand").style.transform = `rotate(${secDeg}deg)`;
  document.getElementById("minuteHand").style.transform = `rotate(${minDeg}deg)`;
  document.getElementById("hourHand").style.transform = `rotate(${hrDeg}deg)`;

  const timeStr = now.toLocaleTimeString();
  const dateStr = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  document.getElementById("digitalTime").textContent = timeStr;
  document.getElementById("digitalDate").textContent = dateStr;
}

setInterval(updateClocks, 1000);
updateClocks();

// Theme toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
