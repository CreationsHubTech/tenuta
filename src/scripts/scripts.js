$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".service-card");

    const observerOptions = {
        root: null, // Observa em relação à viewport
        rootMargin: "0px",
        threshold: 0.5, // Ativa quando 50% do elemento está visível
    };

    const flipCard = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando o card entra na viewport
                entry.target.querySelector(".card-front").style.transform = "rotateY(180deg)";
                entry.target.querySelector(".card-back").style.transform = "rotateY(0)";
            } else {
                // Quando o card sai da viewport
                entry.target.querySelector(".card-front").style.transform = "rotateY(0)";
                entry.target.querySelector(".card-back").style.transform = "rotateY(180deg)";
            }
        });
    };

    const observer = new IntersectionObserver(flipCard, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
