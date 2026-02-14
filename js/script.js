/* ⭐ Estrellas */
for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
}

/* 💕 Corazones */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}, 500);

/* 💌 Tarjetas */
let currentCard = 0;
const totalCards = 5;

function openEnvelope() {
    document.querySelector(".envelope").classList.add("open");
    showCard(0);
}

function showCard(index) {
    document.querySelectorAll(".card").forEach(card =>
        card.classList.remove("show")
    );
    document.getElementById(`card${index}`).classList.add("show");
}

function nextCard() {
    if (currentCard < totalCards - 1) {
        currentCard++;
        showCard(currentCard);
    }
}

/* 🎉 CONFETI desde el botón */
function sayYes() {
    document.getElementById("response").innerText =
        "¡Sabía que dirías que sí! 💕✨";

    const btn = document.querySelector(".yes");
    const rect = btn.getBoundingClientRect();

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = rect.top / window.innerHeight;

    confetti({
        particleCount: 150,
        spread: 80,
        startVelocity: 45,
        angle: 90,
        origin: { x, y },
        colors: ['#ff69b4', '#ff1493', '#ffb6c1', '#ffffff']
    });
}

/* ❌ Ocultar NO */
function hideNo(btn) {
    btn.style.display = "none";
}

