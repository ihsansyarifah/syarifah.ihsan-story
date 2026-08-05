// Menangkap nama tamu dari URL (Contoh link: namasitus.com/?kepada=Budi)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('kepada');
if (namaTamu) {
    document.getElementById('guest-box').innerHTML = `Kepada Yth.<br><b>${namaTamu}</b>`;
}

// Efek pergerakan kamera 3D berdasarkan guliran layar (scroll)
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const scene = document.getElementById('scene');
    scene.style.transform = `translateZ(${scrollPosition * 1.3}px)`;
});