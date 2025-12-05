const tip = document.getElementById("hover-tip");
const sections = document.querySelectorAll(".sect");

let hoverTimer = null;

// Quand la souris entre dans une section
sections.forEach(section => {

    section.addEventListener("mouseenter", () => {
        // démarre un timer de 1500ms
        hoverTimer = setTimeout(() => {
            tip.style.opacity = 1;
        }, 1500);
    });

    // Quand la souris quitte la section
    section.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimer); // empêche l'apparition si pas fini
        tip.style.opacity = 0;    // si déjà affiché → cacher
    });
});

// Suit la souris
document.addEventListener("mousemove", e => {
    tip.style.top = (e.clientY + 15) + "px";
    tip.style.left = (e.clientX + 15) + "px";
});
