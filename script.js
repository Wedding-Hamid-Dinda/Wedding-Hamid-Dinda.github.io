
// =============================================
// PENGATURAN UNDANGAN
// =============================================

const weddingConfig = {
    weddingDate: "2026-12-20T08:00:00+07:00",
    whatsappNumber: "6281234567890"
};


// =============================================
// NAMA TAMU OTOMATIS DARI URL
// =============================================

const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

const guestName = document.getElementById("guestName");

if (guestName) {
    guestName.textContent = guest && guest.trim()
        ? guest.trim()
        : "Tamu Undangan";
}


// =============================================
// LOADING SCREEN
// =============================================

window.addEventListener("load", () => {
    const loader = document.getElementById("pageLoader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 450);
    }
});


// =============================================
// PEMBUKAAN UNDANGAN
// =============================================

const openButton = document.getElementById("openInvitation");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

if (openButton && opening && mainContent) {

    openButton.addEventListener("click", () => {

        if (opening.classList.contains("opening-closed")) {
            return;
        }

        opening.classList.add("opening-closed");
        mainContent.classList.add("visible");

        document.body.classList.remove("locked");

        setTimeout(() => {
            mainContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 300);

    });

}


// =============================================
// ANIMASI SCROLL REVEAL
// ANIMASI AKTIF SAAT SCROLL TURUN DAN NAIK
// =============================================

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            // Aktifkan animasi saat elemen masuk layar
            entry.target.classList.add("visible");

        } else {

            // Reset animasi saat elemen keluar layar
            entry.target.classList.remove("visible");

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

// =============================================
// COUNTDOWN PERNIKAHAN
// =============================================

function updateCountdown() {

    const target = new Date(weddingConfig.weddingDate).getTime();
    const now = Date.now();

    const distance = target - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        return;
    }

    if (distance <= 0) {

        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysElement.textContent = String(days).padStart(3, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);


// =============================================
// MUSIK UND TOMBOL MUSIC TOGGLE
// =============================================

const music = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

if (music && musicToggle && musicLabel) {

    musicToggle.addEventListener("click", async () => {

        if (music.paused) {

            try {

                await music.play();

                musicToggle.classList.add("playing");
                musicLabel.textContent = "MUSIC ON";

            } catch (error) {

                console.error("Musik gagal diputar:", error);

                alert("Periksa kembali lokasi file musik di folder assets/music.");

            }

        } else {

            music.pause();

            musicToggle.classList.remove("playing");
            musicLabel.textContent = "MUSIC OFF";

        }

    });

}


// =============================================
// RSVP WHATSAPP
// =============================================

const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {

    rsvpForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const attendance = document.getElementById("attendance")?.value;
        const guestCount = document.getElementById("guestCount")?.value;
        const message = document.getElementById("message")?.value.trim();

        if (!name || !attendance) {

            alert("Mohon isi nama dan konfirmasi kehadiran.");

            return;

        }

        const text = [

            "Halo, saya ingin mengirim konfirmasi undangan pernikahan.",

            "",

            `Nama: ${name}`,
            `Konfirmasi: ${attendance}`,
            `Jumlah tamu: ${guestCount}`,
            `Ucapan: ${message || "-"}`

        ].join("\n");

        const url = `https://wa.me/${weddingConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank", "noopener");

    });

}
// =============================================
// TOMBOL BACK TO TOP
// =============================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}