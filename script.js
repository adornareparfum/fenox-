// FONEX — Website Interactions

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

// Sayfa açılış animasyonu
window.addEventListener("load", () => {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";

    setTimeout(() => {
        heroContent.style.transition = "all 1.2s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 200);
});

// Mouse hareketine hafif paralaks efekti
hero.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;

    hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
});

// Mouse çıkınca görseli merkeze getir
hero.addEventListener("mouseleave", () => {
    hero.style.backgroundPosition = "center";
});
