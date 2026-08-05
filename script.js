// FITUR 1: BUKA BUKU & MAINKAN MUSIK
function bukaUndangan() {
    // Sembunyikan Cover
    document.getElementById('cover').classList.add('hidden');
    // Tampilkan Isi
    document.getElementById('main-content').classList.remove('hidden');
    
    // Mainkan Audio
    var audio = document.getElementById("bgMusic");
    audio.play();
    
    // Scroll otomatis ke atas
    window.scrollTo(0, 0);
}

// FITUR 2: KONTROL AUDIO (ON/OFF)
function toggleAudio() {
    var audio = document.getElementById("bgMusic");
    var btn = document.getElementById("audio-control");
    
    if (audio.paused) {
        audio.play();
        btn.innerHTML = "🎵";
    } else {
        audio.pause();
        btn.innerHTML = "🔇";
    }
}

// FITUR 3: SALIN NOMOR REKENING
function salinRekening() {
    var norek = document.getElementById("norek").innerText;
    navigator.clipboard.writeText(norek).then(function() {
        alert("Nomor Rekening Mandiri berhasil disalin: " + norek);
    });
}

// FITUR 4: COUNTDOWN (HITUNG MUNDUR)
// Tanggal Tujuan: 20 Desember 2026, 08:00:00 WIB
var countDownDate = new Date("Dec 20, 2026 08:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Hitung Hari, Jam, Menit, Detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan ke dalam HTML
    document.getElementById("hari").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("jam").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("menit").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("detik").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // Jika waktu habis
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<b>Acara Sedang Berlangsung / Telah Selesai. Terima kasih atas doa restunya.</b>";
    }
}, 1000);