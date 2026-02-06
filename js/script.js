// ⭐ Crear estrellas
for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
}

// 💕 Corazones flotando
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}, 500);

// 💌 Abrir sobre
function openEnvelope() {
    document.querySelector(".envelope").classList.add("open");
    document.getElementById("card").classList.add("show");
}

// 💖 Botón Sí
function sayYes() {
    document.getElementById("response").innerText =
        "¡Sabía que dirías que sí! 💕✨";

    confetti({
        particleCount: 180,
        spread: 90,
        colors: ['#ff69b4', '#ff1493', '#ffc0cb']
    });
}

// 😈 Botón No se mueve
function moveNo(btn) {
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "vw";
    btn.style.top = Math.random() * 80 + "vh";
}
