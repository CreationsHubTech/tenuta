document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".service-card");

    // Detecta se está no mobile
    const isMobile = () => window.innerWidth <= 768;

    // Função para aplicar animação no hover (desktop)
    const setupHoverEffects = () => {
        cards.forEach((card) => {
            const cardFront = card.querySelector(".card-front");
            const cardBack = card.querySelector(".card-back");

            if (cardFront && cardBack) {
                card.addEventListener("mouseenter", () => {
                    cardFront.style.transform = "rotateY(180deg)";
                    cardBack.style.transform = "rotateY(0)";
                });

                card.addEventListener("mouseleave", () => {
                    cardFront.style.transform = "rotateY(0)";
                    cardBack.style.transform = "rotateY(180deg)";
                });
            }
        });
    };

    // Função para aplicar animação no scroll (mobile)
    const setupScrollEffects = () => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const flipCard = (entries) => {
            entries.forEach((entry) => {
                const cardFront = entry.target.querySelector(".card-front");
                const cardBack = entry.target.querySelector(".card-back");

                if (cardFront && cardBack) {
                    if (entry.isIntersecting) {
                        cardFront.style.transform = "rotateY(180deg)";
                        cardBack.style.transform = "rotateY(0)";
                    } else {
                        cardFront.style.transform = "rotateY(0)";
                        cardBack.style.transform = "rotateY(180deg)";
                    }
                }
            });
        };

        const observer = new IntersectionObserver(flipCard, observerOptions);

        cards.forEach((card) => {
            observer.observe(card);
        });
    };

    // Adiciona os comportamentos conforme o tipo de dispositivo
    const applyBehaviors = () => {
        if (isMobile()) {
            setupScrollEffects(); // Mobile: scroll
        } else {
            setupHoverEffects(); // Desktop: hover
        }
    };

    applyBehaviors();

    // Reaplica comportamentos ao redimensionar a janela
    window.addEventListener("resize", () => {
        cards.forEach((card) => {
            // Remove transformações para evitar comportamentos inesperados
            const cardFront = card.querySelector(".card-front");
            const cardBack = card.querySelector(".card-back");
            if (cardFront && cardBack) {
                cardFront.style.transform = "rotateY(0)";
                cardBack.style.transform = "rotateY(180deg)";
            }
        });

        // Remove eventos existentes
        cards.forEach((card) => {
            card.replaceWith(card.cloneNode(true));
        });

        // Aplica os novos comportamentos
        applyBehaviors();
    });
});
