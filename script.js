document.addEventListener("DOMContentLoaded", () => {
    const audioButtons = document.querySelectorAll(".btn-audio");

    const audios = {
        "audio-pop": document.getElementById("audio-pop"),
        "audio-rnb": document.getElementById("audio-rnb"),
        "audio-kpop": document.getElementById("audio-kpop"),
    };

    audioButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            event.preventDefault();

            const audioId = button.getAttribute("data-audio");
            const audioElement = audios[audioId];
            if (!audioElement) return;

            // Pause les autres
            Object.values(audios).forEach(a => {
                if (a && a !== audioElement) {
                    a.pause();
                    a.currentTime = 0;
                }
            });

            if (!audioElement.paused) {
                audioElement.pause();
                audioElement.currentTime = 0;
                return;
            }

            audioElement.currentTime = 0;
            audioElement.play().catch(err => {
                console.error("Erreur lecture audio :", err);
            });
        });
    });

    // Rendre les 3 sections cliquables
    const sectionLinks = {
        ".sect1": "pop_pages/pop.html",
        ".sect2": "rnb_pages/rnb.html",
        ".sect3": "k-pop_pages/k-pop.html",
    };

    Object.entries(sectionLinks).forEach(([selector, url]) => {
        const section = document.querySelector(selector);
        if (!section) return;

        section.addEventListener("click", () => {
            window.location.href = url;
        });
    });
});
