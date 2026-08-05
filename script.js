document.addEventListener("DOMContentLoaded", function () {
    const scene = document.getElementById("scene");
    const totalHeight = document.body.offsetHeight - window.innerHeight;

    // 1. Efek 3D Scroll
    window.addEventListener("scroll", function () {
        const scrollTop = window.pageYOffset;
        const scrollProgress = scrollTop / totalHeight;
        const zTranslate = scrollProgress * -10000;
        
        scene.style.transform = `translateZ(${zTranslate}px)`;
    });

    // 2. Fitur Otomatis Nama Tamu Undangan dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get("to");
    
    const guestBox = document.getElementById("guest-box");
    if (guestName && guestBox) {
        guestBox.innerHTML = `Kepada Yth.<br><strong>${decodeURIComponent(guestName)}</strong>`;
    }
});

// 3. Fungsi Kontrol Musik Latar
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.textContent = "▶️";
        musicText.textContent = "Putar Musik";
        musicBtn.style.animation = "none";
    } else {
        bgMusic.play().then(() => {
            musicIcon.textContent = "🎵";
            musicText.textContent = "Musik Diputar";
            musicBtn.style.animation = "pulse 2s infinite";
        }).catch(error => {
            console.log("Autoplay dicegah browser:", error);
        });
    }
    isPlaying = !isPlaying;
}