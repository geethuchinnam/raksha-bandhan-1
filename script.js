function startGift() {

    document.getElementById("welcomeScreen").style.display = "none";

    document.getElementById("nameScreen").style.display = "block";
}


function openGift() {

    document.getElementById("nameScreen").style.display = "none";

    document.getElementById("giftScreen").style.display = "block";
}


function showSurprise() {

    const gift = document.getElementById("giftBox");

    // Gift shaking animation
    gift.animate(
        [
            { transform: "scale(1) rotate(0deg)" },
            { transform: "scale(1.15) rotate(-8deg)" },
            { transform: "scale(1.15) rotate(8deg)" },
            { transform: "scale(1.25) rotate(-5deg)" },
            { transform: "scale(0.8)" },
            { transform: "scale(0)" }
        ],
        {
            duration: 1200,
            easing: "ease-in-out"
        }
    );

    // Wait for gift animation
    setTimeout(function () {

        document.getElementById("giftScreen").style.display = "none";

        document.getElementById("finalScreen").style.display = "block";

        createHearts();

        createConfetti();

    }, 1200);
}


/* ❤️ Floating Hearts */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            Math.random() > 0.5
            ? "❤️"
            : "🌸";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const duration =
            2000 + Math.random() * 3000;

        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform: "translateY(-110vh)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(function () {

            heart.remove();

        }, duration);
    }
}


/* 🎉 Confetti */

function createConfetti() {

    const symbols = [
        "🎉",
        "✨",
        "🌸",
        "❤️",
        "🪢"
    ];

    for (let i = 0; i < 30; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-40px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.pointerEvents = "none";

        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration =
            2000 + Math.random() * 2500;

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        "translateY(110vh) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(function () {

            confetti.remove();

        }, duration);
    }
}


/* 🔄 See Again */

function restartGift() {

    document.getElementById("finalScreen").style.display = "none";

    document.getElementById("welcomeScreen").style.display = "block";
}