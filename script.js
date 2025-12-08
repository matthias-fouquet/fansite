document.addEventListener("DOMContentLoaded", () => {
    /* ---------------------------
       GESTION DES AUDIOS
    --------------------------- */
    const audioButtons = document.querySelectorAll(".btn-audio");

    const audios = {
        "audio-pop": document.getElementById("audio-pop"),
        "audio-rnb": document.getElementById("audio-rnb"),
        "audio-kpop": document.getElementById("audio-kpop"),
    };

    // Associer chaque audioId à son bouton
    const buttonsByAudioId = {};
    audioButtons.forEach(button => {
        const audioId = button.getAttribute("data-audio");
        if (audioId) {
            buttonsByAudioId[audioId] = button;
        }
    });

    // Changer l'état visuel du bouton (play/pause + animation)
    function setButtonState(button, isPlaying) {
        if (!button) return;
        const img = button.querySelector("img");
        if (!img) return;

        if (isPlaying) {
            img.src = "icons/pause.png";   // nécessite icons/pause.png
            img.alt = "Mettre en pause";
            button.classList.add("is-playing");
        } else {
            img.src = "icons/play.png";
            img.alt = "Lecture";
            button.classList.remove("is-playing");
        }
    }

    // Jouer un audio depuis un point aléatoire
    function playFromRandomPosition(audioElement) {
        function startPlayback() {
            const duration = audioElement.duration;

            if (!duration || duration === Infinity) {
                audioElement.currentTime = 0;
            } else {
                audioElement.currentTime = Math.random() * duration;
            }

            audioElement.play().catch(err => {
                console.error("Erreur lecture audio :", err);
            });
        }

        if (audioElement.readyState < 1) {
            audioElement.addEventListener("loadedmetadata", startPlayback, { once: true });
            audioElement.load();
        } else {
            startPlayback();
        }
    }

    // Quand un audio se termine naturellement → remettre le bouton en play
    Object.entries(audios).forEach(([id, audio]) => {
        if (!audio) return;
        audio.addEventListener("ended", () => {
            setButtonState(buttonsByAudioId[id], false);
        });
    });

    audioButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Empêche l'ouverture du lien derrière
            event.stopPropagation();
            event.preventDefault();

            const audioId = button.getAttribute("data-audio");
            const audioElement = audios[audioId];
            if (!audioElement) return;

            // Stopper les autres sons + remettre leurs boutons en "play"
            Object.entries(audios).forEach(([id, a]) => {
                if (a && a !== audioElement) {
                    a.pause();
                    a.currentTime = 0;
                    setButtonState(buttonsByAudioId[id], false);
                }
            });

            // Si déjà en lecture, on coupe
            if (!audioElement.paused) {
                audioElement.pause();
                audioElement.currentTime = 0;
                setButtonState(button, false);
                return;
            }

            // Sinon → lecture aléatoire + passer le bouton en "pause"
            setButtonState(button, true);
            playFromRandomPosition(audioElement);
        });
    });

    /* ---------------------------
       SECTIONS CLIQUABLES
    --------------------------- */
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

    /* ---------------------------
       TOOLTIP "CLIQUEZ POUR ACCÉDER"
    --------------------------- */
    const tip = document.getElementById("hover-tip");
    const sections = document.querySelectorAll(".sect");
    let hoverTimer = null;

    if (tip) {
        sections.forEach(section => {
            section.addEventListener("mouseenter", () => {
                hoverTimer = setTimeout(() => {
                    tip.style.opacity = 1;
                }, 1500);
            });

            section.addEventListener("mouseleave", () => {
                clearTimeout(hoverTimer);
                tip.style.opacity = 0;
            });
        });

        document.addEventListener("mousemove", e => {
            tip.style.top = (e.clientY + 15) + "px";
            tip.style.left = (e.clientX + 15) + "px";
        });
    }
});