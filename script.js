const logos = document.querySelectorAll('.logo');
let currentindex = 0;

function changeLogo() {
    logos[currentindex].classList.remove('active');
    
    currentindex = (currentindex + 1) % logos.length;

    logos[currentindex].classList.add('active');
}

setInterval(changeLogo, 3000);

function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var button = document.querySelector(".action-button"); // Pilih tombol
    
    if (sidebar.style.width === "250px" || sidebar.style.width === "") {
        sidebar.style.width = "0";
        button.style.visibility = "visible"; // Tampilkan tombol
    } else {
        sidebar.style.width = "250px";
        button.style.visibility = "hidden"; // Sembunyikan tombol
    }
}

// Pindahkan variabel ke lingkup global
let track;
let images;
let totalImages;
let currentIndex = 0;

// Fungsi untuk menginisialisasi slider
document.addEventListener("DOMContentLoaded", () => {
    track = document.querySelector(".slider-track");
    images = document.querySelectorAll(".slider-image");
    totalImages = images.length;

    // Mulai auto slide
    setInterval(autoSlide, 3000); // Slide setiap 3 detik
});

// Fungsi auto-slide
function autoSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Kembali ke gambar pertama
    }
    updateSlider();
}

// Fungsi untuk tombol "Next"
function slideNext() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}

// Fungsi untuk tombol "Prev"
function slidePrev() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
}

// Fungsi untuk memperbarui posisi slider
function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Fungsi untuk menampilkan loading screen
function showLoadingScreen() {
    const loader = document.getElementById("loading-screen");
    loader.style.display = "block"; // Menampilkan loader
}

// Fungsi untuk menyembunyikan loading screen
function hideLoadingScreen() {
    const loader = document.getElementById("loading-screen");
    loader.style.display = "none"; // Menyembunyikan loader
}

window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const loadingText = document.getElementById("loading-text");

    // Array teks yang ingin ditampilkan
    const messages = ["Hal Istimewa Sedang Disiapkan...", "Hunian Lebih Cantik Hanya Dalam Sekejap...", "Kreativitas Sedang Mengalir...", "Bersiap untuk Hal yang Luar Biasa!"];
    let currentIndex = 0;

    // Fungsi untuk mengganti teks
    function changeText() {
        currentIndex = (currentIndex + 1) % messages.length; // Loop ke awal jika habis
        loadingText.textContent = messages[currentIndex];
    }

    // Ubah teks setiap 2 detik
    const interval = setInterval(changeText, 3000);

    // Hapus loading screen setelah halaman selesai dimuat
    setTimeout(() => {
        loadingScreen.style.opacity = "0"; // Fade-out effect
        loadingScreen.style.transition = "opacity 0.5s ease";

        // Hapus elemen setelah fade-out selesai
        setTimeout(() => {
            clearInterval(interval); // Hentikan interval teks
            loadingScreen.remove();
        }, 500);
    }, 7000); // Tunggu 7 detik sebelum menghapus loading screen
});

// Efek hover interaktif
document.querySelectorAll('.client-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
});

// Slider otomatis untuk klien (opsional)
let currentSlide = 0;
const slides = document.querySelectorAll('.client-card');
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 3000);
