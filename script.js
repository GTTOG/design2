// Nút phát nhạc
const audioButton = document.getElementById("audioButton");
const audio = document.getElementById("bgmusic");
let isPlaying = false;

audioButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play().catch(err => console.log(err));
    audioButton.classList.add("playing");
    audioButton.textContent = "⏸️";
    isPlaying = true;
  } else {
    audio.pause();
    audioButton.classList.remove("playing");
    audioButton.textContent = "🎧";
    isPlaying = false;
  }
});

// Tự phát nhạc khi click lần đầu vào trang
document.body.addEventListener("click", (e) => {
  if (e.target === audioButton) return;
  if (!isPlaying) {
    audio.play().catch(err => console.log(err));
    audioButton.classList.add("playing");
    audioButton.textContent = "⏸️";
    isPlaying = true;
  }
}, { once: true });
