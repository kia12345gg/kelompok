// ==========================
// SMOOTH SCROLL (Memastikan tautan jangkar menggunakan scroll halus)
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSelector = this.getAttribute("href");
        const target = document.querySelector(targetSelector);
        
        if (target) { // Pastikan elemen target ditemukan sebelum mencoba scroll
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ==========================
// STICKY NAVBAR + SHADOW (Menambahkan kelas setelah scrolling 50px)
// ==========================
const navbar = document.querySelector(".navbar");

if (navbar) { // Hanya tambahkan listener jika elemen .navbar ada
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("nav-scrolled");
        } else {
            navbar.classList.remove("nav-scrolled");
        }
    });
}

// ==========================
// BACK TO TOP BUTTON (Membuat dan menampilkan tombol untuk kembali ke atas)
// ==========================
const btnTop = document.createElement("button");
btnTop.innerText = "↑";
btnTop.classList.add("btn-top");
document.body.appendChild(btnTop);

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) { // Menampilkan tombol setelah scroll 400px
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }
});

// ==========================
// ANIMATION ON SCROLL (Menambahkan kelas 'show' saat elemen masuk ke viewport)
// ==========================
const elements = document.querySelectorAll(".section, .card, .hero-text");

function showOnScroll() {
    // Menghitung batas pemicu (tinggi jendela - 100px buffer)
    const triggerPoint = window.innerHeight - 100;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < triggerPoint) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll(); // Panggil saat pemuatan untuk menampilkan elemen yang sudah terlihat