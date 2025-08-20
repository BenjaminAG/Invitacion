
// --------- Countdown ----------
function updateCountdown() {
  const target = new Date(window.EVENT_ISO).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById('contador').textContent = "¡Es hoy!";
    return;
  }
  const s = 1000, m = s*60, h = m*60, d = h*24;
  const days = Math.floor(diff / d);
  const hours = Math.floor((diff % d) / h);
  const minutes = Math.floor((diff % h) / m);
  const seconds = Math.floor((diff % m) / s);

  document.getElementById('contador').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// --------- Confetti (verde/blanco/rojo) ----------
(function confetti() {
  const container = document.getElementById('confetti');
  const colors = ['#1d8f2a', '#ffffff', '#e01919'];
  for (let i = 0; i < 80; i++) {
    const span = document.createElement('span');
    const size = 6 + Math.random()*8;
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.left = Math.random()*100 + 'vw';
    span.style.top = (-10 - Math.random()*30) + 'vh';
    span.style.background = colors[Math.floor(Math.random()*colors.length)];
    const duration = 3 + Math.random()*4;
    const delay = Math.random()*3;
    span.style.animation = `fall ${duration}s linear ${delay}s infinite`;
    container.appendChild(span);
  }
})();

// Keyframes for confetti falling (added at runtime to avoid repeating CSS for each piece)
(function addConfettiKeyframes() {
  const style = document.createElement('style');
  style.textContent = `@keyframes fall { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(110vh) rotate(360deg); } }`;
  document.head.appendChild(style);
})();

// --------- Música (autoplay friendly) ----------
const audio = document.getElementById('bgm');
const btnPlay = document.getElementById('btnPlay');
btnPlay.addEventListener('click', async () => {
  try {
    await audio.play();
    btnPlay.textContent = '⏸ Pausar';
    btnPlay.onclick = () => { audio.pause(); btnPlay.textContent = '▶ Música'; };
  } catch (e) {
    console.log('Playback blocked:', e);
  }
});

// --------- Álbum de fotos (simple carrusel auto-scroll) ----------
const album = document.getElementById('album');
let scrollPos = 0;
function autoScrollAlbum() {
  if (!album) return;
  scrollPos += 1;
  if (scrollPos >= album.scrollWidth - album.clientWidth) scrollPos = 0;
  album.scrollTo({ left: scrollPos, behavior: 'smooth' });
}
setInterval(autoScrollAlbum, 2000);

// Para sustituir por tus fotos locales, coloca archivos en /static/img/album y lista aquí:

const albumPhotos = [
  '/static/img/album/foto1.jpg',
  '/static/img/album/foto3.jpg',
  '/static/img/album/foto2.jpg',
];
const albumEl = document.getElementById('album');
albumEl.innerHTML = '';
albumPhotos.forEach(src => {
  const im = document.createElement('img');
  im.src = src; im.alt = 'Foto';
  albumEl.appendChild(im);
});
