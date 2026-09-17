const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const products = document.querySelectorAll(".product");
const lookbookItems = document.querySelectorAll(".lookbook-item");


// SAYFA AÇILIŞI

window.addEventListener("load", () => {

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";

    setTimeout(() => {

        heroContent.style.transition =
            "opacity 1.4s ease, transform 1.4s cubic-bezier(.2,.65,.25,1)";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";

    }, 150);

});


// HERO HAFİF PARALAKS

if (hero) {

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 8;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 8;

        hero.style.backgroundPosition =
            `calc(50% + ${x}px) calc(50% + ${y}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        hero.style.transition =
            "background-position 1s ease";

        hero.style.backgroundPosition = "center";

    });

}


// ÜRÜNLER — MOUSE HAREKETİ

products.forEach((product) => {

    product.addEventListener("mousemove", (event) => {

        const rect = product.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        product.style.transform =
            `translate(${x * 2}px, ${y * 2}px)`;

    });

    product.addEventListener("mouseleave", () => {

        product.style.transition =
            "transform .7s cubic-bezier(.2,.65,.25,1)";

        product.style.transform =
            "translate(0, 0)";

    });

});


// LOOKBOOK — SCROLL HAREKETİ

function animateLookbook() {

    const screenHeight = window.innerHeight;

    lookbookItems.forEach((item) => {

        const image = item.querySelector("img");

        if (!image) return;

        const rect = item.getBoundingClientRect();

        const distance =
            (rect.top + rect.height / 2 - screenHeight / 2)
            / screenHeight;

        const movement =
            Math.max(-15, Math.min(15, distance * -15));

        image.style.transform =
            `scale(1.025) translateY(${movement}px)`;

    });

}

window.addEventListener("scroll", animateLookbook);

animateLookbook();


// MENÜ TIKLAMALARI

document.querySelectorAll("nav a").forEach((link) => {

    link.addEventListener("click", () => {

        document.body.style.cursor = "wait";

        setTimeout(() => {
            document.body.style.cursor = "default";
        }, 500);

    });

});
