// FONEX — Interactive Experience

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

const products = document.querySelectorAll(".product-card");

const modal = document.querySelector("#productModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalCode = document.querySelector("#modalCode");
const modalDescription = document.querySelector("#modalDescription");
const modalClose = document.querySelector("#modalClose");
const modalBackdrop = document.querySelector(".modal-backdrop");

const lookbookCards = document.querySelectorAll(".lookbook-card");


// --------------------------------
// HERO AÇILIŞ ANİMASYONU
// --------------------------------

window.addEventListener("load", () => {

    if (!heroContent) return;

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(35px)";

    requestAnimationFrame(() => {

        setTimeout(() => {

            heroContent.style.transition =
                "opacity 1.4s ease, transform 1.4s cubic-bezier(.2,.65,.25,1)";

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        }, 150);

    });

});


// --------------------------------
// HERO — MOUSE PARALAX
// --------------------------------

if (hero) {

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;

        hero.style.backgroundPosition =
            `calc(50% + ${x}px) calc(50% + ${y}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        hero.style.transition =
            "background-position 1s ease";

        hero.style.backgroundPosition = "center";

    });

}


// --------------------------------
// ÜRÜNLER — GERÇEK MOUSE HAREKETİ
// --------------------------------

products.forEach((product) => {

    const image = product.querySelector(".product-image img");

    if (!image) return;


    product.addEventListener("mousemove", (event) => {

        const rect = product.getBoundingClientRect();

        const mouseX =
            (event.clientX - rect.left) / rect.width;

        const mouseY =
            (event.clientY - rect.top) / rect.height;


        const moveX =
            (mouseX - 0.5) * 18;

        const moveY =
            (mouseY - 0.5) * 18;


        image.style.transition =
            "transform .15s linear";

        image.style.transform =
            `scale(1.07) translate(${moveX}px, ${moveY}px)`;

    });


    product.addEventListener("mouseleave", () => {

        image.style.transition =
            "transform .8s cubic-bezier(.2,.65,.25,1)";

        image.style.transform =
            "scale(1) translate(0, 0)";

    });


    // --------------------------------
    // ÜRÜNE TIKLAMA
    // --------------------------------

    product.addEventListener("click", () => {

        const title =
            product.dataset.product;

        const code =
            product.dataset.code;

        const description =
            product.dataset.description;


        modalImage.src = image.src;
        modalImage.alt = title;

        modalTitle.textContent = title;
        modalCode.textContent = code;
        modalDescription.textContent = description;


        modal.classList.add("active");

        document.body.classList.add("modal-open");

    });

});


// --------------------------------
// MODAL KAPAT
// --------------------------------

function closeModal() {

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}


if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeModal);
}


// ESC TUŞU

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});


// --------------------------------
// LOOKBOOK — SCROLL PARALAX
// --------------------------------

function updateLookbook() {

    const screenHeight =
        window.innerHeight;


    lookbookCards.forEach((card) => {

        const image =
            card.querySelector("img");

        if (!image) return;


        const rect =
            card.getBoundingClientRect();


        const distance =
            (rect.top + rect.height / 2)
            - screenHeight / 2;


        const movement =
            Math.max(
                -25,
                Math.min(25, distance * -0.035)
            );


        image.style.transform =
            `scale(1.035) translateY(${movement}px)`;

    });

}


let ticking = false;

window.addEventListener("scroll", () => {

    if (!ticking) {

        window.requestAnimationFrame(() => {

            updateLookbook();

            ticking = false;

        });

        ticking = true;

    }

});


updateLookbook();


// --------------------------------
// ADORNARE BUTONU
// --------------------------------

const adornareButton =
    document.querySelector(".adornare-button");

if (adornareButton) {

    adornareButton.addEventListener("mouseenter", () => {

        adornareButton.style.letterSpacing = "3px";

    });


    adornareButton.addEventListener("mouseleave", () => {

        adornareButton.style.letterSpacing = "2px";

    });

}
