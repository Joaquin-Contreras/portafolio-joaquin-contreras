document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalExtras = document.getElementById("modalExtras");
  const closeBtn = document.querySelector(".modal .close");

  // ======================
  // Funciones auxiliares
  // ======================

  function openModal(card) {
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDescription.textContent = card.querySelector("p").textContent;
    modalExtras.innerHTML = "";

    loadExtraContent(card);
    addBadges(card);

    modal.classList.add("show");
  }

  function closeModal() {
    modal.classList.remove("show");
  }

  function loadExtraContent(card) {
    const extraFile = card.getAttribute("data-extra");
    if (!extraFile) return;

    fetch(extraFile)
      .then((res) => res.text())
      .then((html) => {
        modalExtras.innerHTML = html;

        const canvas = modalExtras.querySelector("#confusionMatrix");
        if (canvas) drawConfusionMatrix(canvas);
      });
  }

  function addBadges(card) {
    const badges = card.querySelector(".badges").cloneNode(true);
    modalExtras.appendChild(badges);
  }

  function drawConfusionMatrix(canvas) {
    const data = [
      { x: 0, y: 0, v: 757 },
      { x: 1, y: 0, v: 26 },
      { x: 0, y: 1, v: 47 },
      { x: 1, y: 1, v: 115 },
    ];

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const DPR = window.devicePixelRatio || 1;
    canvas.width = rect.width * DPR;
    canvas.height = rect.height * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    ctx.clearRect(0, 0, rect.width, rect.height);

    const cols = 2,
      rows = 2;
    const leftPadding = 60;
    const topPadding = 20;
    const bottomPadding = 40;
    const rightPadding = 20;
    const gridW = rect.width - leftPadding - rightPadding;
    const gridH = rect.height - topPadding - bottomPadding;
    const cellW = gridW / cols;
    const cellH = gridH / rows;
    const maxV = Math.max(...data.map((d) => d.v));

    data.forEach((cell) => {
      const col = cell.x;
      const row = cell.y;
      const val = cell.v;
      const alpha = Math.max(0.06, val / maxV);
      const x = leftPadding + col * cellW;
      const y = topPadding + row * cellH;

      ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
      ctx.fillRect(x + 1, y + 1, cellW - 2, cellH - 2);

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 1, y + 1, cellW - 2, cellH - 2);

      ctx.fillStyle = alpha > 0.55 ? "#fff" : "#111";
      ctx.font = "bold 16px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(val.toString(), x + cellW / 2, y + cellH / 2);
    });

    ctx.fillStyle = "#111";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Predicted label", leftPadding + gridW / 2, rect.height - 18);
    ctx.font = "13px Arial";
    ctx.fillText("0", leftPadding + cellW / 2, rect.height - 4 - bottomPadding / 4);
    ctx.fillText("1", leftPadding + cellW / 2 + cellW, rect.height - 4 - bottomPadding / 4);

    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText("True label", leftPadding - 10, topPadding - 6);
    ctx.fillText("0", leftPadding - 12, topPadding + cellH / 2);
    ctx.fillText("1", leftPadding - 12, topPadding + cellH / 2 + cellH);

    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 1;
    ctx.strokeRect(leftPadding, topPadding, gridW, gridH);
  }

  function initParticles() {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.45 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.35,
          width: 1,
        },
        move: { enable: true, speed: 1.4, out_mode: "out" },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, resize: true },
        modes: {
          grab: { distance: 160, line_linked: { opacity: 0.6 } },
          repulse: { distance: 200 },
        },
      },
      retina_detect: true,
    });
  }

  function initFadeUp() {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  // ======================
  // Eventos
  // ======================

  const projectImages = document.querySelectorAll(".proyectos .card img.clickable, .proyectos .card a.clickeable");
  projectImages.forEach((img) =>
    img.addEventListener("click", () => openModal(img.closest(".card")))
  );

  closeBtn.onclick = closeModal;
  window.onclick = (e) => { if (e.target === modal) closeModal(); };

  // Init extras
  initParticles();
  initFadeUp();
});
