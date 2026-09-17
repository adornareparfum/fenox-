// FONEX — Premium Interactions

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const lookbookImages = document.querySelectorAll(".lookbook-image");
const productCards = document.querySelectorAll(".product-card");

// Sayfa açılış animasyonu
window.addEventListener("load", () => {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(35px)";

    setTimeout(() => {
        heroContent.style.transition =
            "opacity 1.2s ease, transform 1.2s cubic-bezier(0.2, 0.65, 0.25, 1)";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 200);
});


// Hero — çok hafif mouse hareketi
hero.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 5;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 5;

    hero.style.backgroundPosition =
        `calc(50% + ${x}px) calc(50% + ${y}px)`;
});


// Mouse hero'dan çıkınca merkeze dön
hero.addEventListener("mouseleave", () => {
    hero.style.transition = "background-position 0.8s ease";
    hero.style.backgroundPosition = "center";
});


// Scroll — Lookbook görsellerine hafif hareket
window.addEventListener("scroll", () => {

    const windowHeight = window.innerHeight;

    lookbookImages.forEach((image) => {

        const rect = image.getBoundingClientRect();

        const center =
            rect.top + rect.height / 2;

        const distance =
            (center - windowHeight / 2) / windowHeight;

        const movement =
            Math.max(-18, Math.min(18, distance * -18));

        image.querySelector("img").style.transform =
            `scale(1.02) translateY(${movement}px)`;
    });

});


// Ürün kartları — mouse hareketine çok hafif tepki
productCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        card.style.transform =
            `translate(${x * 3}px, ${y * 3}px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transition =
            "transform 0.6s cubic-bezier(0.2, 0.65, 0.25, 1)";

        card.style.transform =
            "translate(0, 0)";
    });

});
