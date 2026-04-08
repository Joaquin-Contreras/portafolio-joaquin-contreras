/* =========================================
   TRANSLATIONS (i18n)
   ========================================= */
const translations = {
  es: {
    "nav.about":      "Sobre mí",
    "nav.projects":   "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills":     "Habilidades",
    "nav.contact":    "Contacto",

    "hero.badge":       "Data Engineer",
    "hero.tagline":     "Transformo datos en decisiones estratégicas. Especializado en data engineering, machine learning y cloud computing para resolver problemas reales de negocio.",
    "hero.download_cv": "Descargar CV",

    "about.title": "Sobre mí",
    "about.text":  "Soy Data Engineer en Teradata con experiencia en diseño de pipelines de datos, integración con servicios cloud y aplicación de modelos de machine learning a problemas reales de negocio. Me apasiona construir soluciones escalables y optimizar procesos. Actualmente profundizo en AWS, Spark, GCP y el ecosistema de LLMs aplicado a datos.",

    "projects.title":       "Proyectos",
    "projects.see_more":    "Ver más",
    "projects.churn.title": "Customer Churn Prediction",
    "projects.churn.desc":  "Modelo de clasificación para predecir la baja de clientes en una empresa de telecomunicaciones.",
    "projects.dbt.title":   "Procesamiento con DBT",
    "projects.dbt.desc":    "Pipeline DBT para construir Datamarts orientados a análisis de negocios específicos.",
    "projects.pyspark.title": "ETL Pipeline con PySpark",
    "projects.pyspark.desc":  "ETL completo: extracción desde la API de TMDB, procesamiento con Spark y almacenamiento en MySQL.",

    "experience.title":           "Experiencia",
    "experience.current":         "Actual",
    "experience.teradata.title":  "Data Engineer – Teradata",
    "experience.teradata.date":   "Sep 2025 – Presente",
    "experience.teradata.li1":    "Diseño y mantenimiento de pipelines de datos en entornos cloud (AWS, GCP).",
    "experience.teradata.li2":    "Desarrollo de procesos ETL con Python y SQL a escala.",
    "experience.teradata.li3":    "Integración de LLMs en flujos de procesamiento de datos.",
    "experience.teradata.li4":    "Tecnologías: Python, SQL, Spark, AWS, GCP, Git.",
    "experience.shalion.title":   "Científico de Datos – Shalion",
    "experience.shalion.date":    "Feb 2023 – Mar 2024",
    "experience.shalion.li1":     "Automatización de reportes con Power BI, reduciendo un 50% el tiempo de entrega.",
    "experience.shalion.li2":     "Queries avanzadas en SQL y gestión de bases de datos PostgreSQL en GCP.",
    "experience.shalion.li3":     "Mejora de pipelines ETL y monitoreo de calidad de datos.",
    "experience.shalion.li4":     "Tecnologías: Python, SQL, PostgreSQL, Power BI, GCP, Git.",

    "skills.title":                    "Formación y Habilidades",
    "skills.education.title":          "Educación",
    "skills.education.degree":         "Lic. en Ciencias de Datos",
    "skills.education.university":     "Universidad CAECE (UCAECE)",
    "skills.education.year":           "2024 – Actualidad",
    "skills.tech.title":               "Stack Técnico",
    "skills.languages.title":          "Idiomas",
    "skills.languages.spanish":        "Español",
    "skills.languages.spanish_level":  "Nativo",
    "skills.languages.english":        "Inglés",
    "skills.languages.english_level":  "Intermedio (B2)",

    "contact.title":              "Contacto",
    "contact.info":               "Información de contacto",
    "contact.location":           "Buenos Aires, Argentina",
    "contact.form.name":          "Tu nombre",
    "contact.form.email":         "Tu email",
    "contact.form.subject":       "Asunto",
    "contact.form.message":       "Tu mensaje",
    "contact.form.send":          "Enviar mensaje",
    "contact.form.success":       "¡Gracias! Tu mensaje fue enviado. Te responderé pronto.",
    "contact.form.error":         "Hubo un error. Por favor, intentá de nuevo.",

    "footer.copy": "© 2025 Joaquín Contreras · Portfolio Personal",
  },

  en: {
    "nav.about":      "About",
    "nav.projects":   "Projects",
    "nav.experience": "Experience",
    "nav.skills":     "Skills",
    "nav.contact":    "Contact",

    "hero.badge":       "Data Engineer",
    "hero.tagline":     "I turn data into strategic decisions. Specialized in data engineering, machine learning, and cloud computing to solve real business problems.",
    "hero.download_cv": "Download CV",

    "about.title": "About me",
    "about.text":  "I'm a Data Engineer at Teradata with experience in data pipeline design, cloud service integration, and applying machine learning models to real business problems. I'm passionate about building scalable solutions and optimizing processes. Currently deepening my knowledge in AWS, Spark, GCP, and the LLM ecosystem applied to data.",

    "projects.title":       "Projects",
    "projects.see_more":    "See more",
    "projects.churn.title": "Customer Churn Prediction",
    "projects.churn.desc":  "Classification model to predict customer churn in a telecom company.",
    "projects.dbt.title":   "Data Processing with DBT",
    "projects.dbt.desc":    "DBT pipeline to build business-oriented Datamarts for specific analytics use cases.",
    "projects.pyspark.title": "ETL Pipeline with PySpark",
    "projects.pyspark.desc":  "Full ETL: extraction from the TMDB API, processing with Spark, and storage in MySQL.",

    "experience.title":           "Experience",
    "experience.current":         "Current",
    "experience.teradata.title":  "Data Engineer – Teradata",
    "experience.teradata.date":   "Sep 2025 – Present",
    "experience.teradata.li1":    "Design and maintenance of data pipelines in cloud environments (AWS, GCP).",
    "experience.teradata.li2":    "Development of ETL processes with Python and SQL at scale.",
    "experience.teradata.li3":    "Integration of LLMs into data processing workflows.",
    "experience.teradata.li4":    "Technologies: Python, SQL, Spark, AWS, GCP, Git.",
    "experience.shalion.title":   "Data Scientist – Shalion",
    "experience.shalion.date":    "Feb 2023 – Mar 2024",
    "experience.shalion.li1":     "Automated weekly reports with Power BI, reducing delivery time by 50%.",
    "experience.shalion.li2":     "Advanced SQL queries and PostgreSQL database management on GCP.",
    "experience.shalion.li3":     "Improved ETL pipelines and data quality monitoring.",
    "experience.shalion.li4":     "Technologies: Python, SQL, PostgreSQL, Power BI, GCP, Git.",

    "skills.title":                    "Education & Skills",
    "skills.education.title":          "Education",
    "skills.education.degree":         "B.S. in Data Science",
    "skills.education.university":     "CAECE University (UCAECE)",
    "skills.education.year":           "2024 – Present",
    "skills.tech.title":               "Tech Stack",
    "skills.languages.title":          "Languages",
    "skills.languages.spanish":        "Spanish",
    "skills.languages.spanish_level":  "Native",
    "skills.languages.english":        "English",
    "skills.languages.english_level":  "Intermediate (B2)",

    "contact.title":              "Contact",
    "contact.info":               "Contact information",
    "contact.location":           "Buenos Aires, Argentina",
    "contact.form.name":          "Your name",
    "contact.form.email":         "Your email",
    "contact.form.subject":       "Subject",
    "contact.form.message":       "Your message",
    "contact.form.send":          "Send message",
    "contact.form.success":       "Thanks! Your message was sent. I'll get back to you soon.",
    "contact.form.error":         "Something went wrong. Please try again.",

    "footer.copy": "© 2025 Joaquín Contreras · Personal Portfolio",
  },
};

/* =========================================
   I18N ENGINE
   ========================================= */
let currentLang = localStorage.getItem("lang") || "es";

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // html lang attribute
  document.documentElement.lang = lang;

  // Toggle button label (show the OTHER language)
  document.getElementById("langLabel").textContent = lang === "es" ? "EN" : "ES";

  currentLang = lang;
  localStorage.setItem("lang", lang);
}

function toggleLanguage() {
  applyTranslations(currentLang === "es" ? "en" : "es");
}

/* =========================================
   NAVBAR: scroll behavior + burger
   ========================================= */
function initNavbar() {
  const navbar  = document.getElementById("navbar");
  const burger  = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  // Scrolled state
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Burger toggle
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu on link click (mobile)
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // Language toggle button
  document.getElementById("langToggle").addEventListener("click", toggleLanguage);
}

/* =========================================
   MODAL (project cards)
   ========================================= */
function initModal() {
  const modal       = document.getElementById("projectModal");
  const modalTitle  = document.getElementById("modalTitle");
  const modalDesc   = document.getElementById("modalDescription");
  const modalExtras = document.getElementById("modalExtras");
  const closeBtn    = modal.querySelector(".close");

  function openModal(card) {
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDesc.textContent  = card.querySelector("p").textContent;
    modalExtras.innerHTML  = "";

    const extraFile = card.getAttribute("data-extra");
    if (extraFile) {
      fetch(extraFile)
        .then((r) => r.text())
        .then((html) => {
          modalExtras.innerHTML = html;
          const canvas = modalExtras.querySelector("#confusionMatrix");
          if (canvas) drawConfusionMatrix(canvas);
        })
        .catch(() => {});
    }

    const badges = card.querySelector(".badges");
    if (badges) modalExtras.appendChild(badges.cloneNode(true));

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  // Clickable images and "Ver más" links
  document.querySelectorAll(".proyectos .card img.clickable, .proyectos .card a.clickeable").forEach((el) => {
    el.addEventListener("click", () => openModal(el.closest(".card")));
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

/* =========================================
   CONFUSION MATRIX (canvas)
   ========================================= */
function drawConfusionMatrix(canvas) {
  const data = [
    { x: 0, y: 0, v: 757 },
    { x: 1, y: 0, v: 26  },
    { x: 0, y: 1, v: 47  },
    { x: 1, y: 1, v: 115 },
  ];

  const ctx  = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const DPR  = window.devicePixelRatio || 1;
  canvas.width  = rect.width  * DPR;
  canvas.height = rect.height * DPR;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const leftPadding   = 60, topPadding    = 20;
  const bottomPadding = 40, rightPadding  = 20;
  const gridW  = rect.width  - leftPadding - rightPadding;
  const gridH  = rect.height - topPadding  - bottomPadding;
  const cellW  = gridW / 2;
  const cellH  = gridH / 2;
  const maxV   = Math.max(...data.map((d) => d.v));

  data.forEach(({ x, y, v }) => {
    const alpha = Math.max(0.06, v / maxV);
    const px = leftPadding + x * cellW;
    const py = topPadding  + y * cellH;

    ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
    ctx.fillRect(px + 1, py + 1, cellW - 2, cellH - 2);

    ctx.strokeStyle = "#fff";
    ctx.lineWidth   = 2;
    ctx.strokeRect(px + 1, py + 1, cellW - 2, cellH - 2);

    ctx.fillStyle    = alpha > 0.55 ? "#fff" : "#111";
    ctx.font         = "bold 16px Arial";
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(v.toString(), px + cellW / 2, py + cellH / 2);
  });

  ctx.fillStyle    = "#555";
  ctx.font         = "13px Arial";
  ctx.textAlign    = "center";
  ctx.fillText("Predicted label", leftPadding + gridW / 2, rect.height - 10);
  ctx.fillText("0", leftPadding + cellW / 2, rect.height - 4 - bottomPadding / 4);
  ctx.fillText("1", leftPadding + cellW / 2 + cellW, rect.height - 4 - bottomPadding / 4);

  ctx.textAlign    = "right";
  ctx.textBaseline = "middle";
  ctx.fillText("True label", leftPadding - 10, topPadding - 6);
  ctx.fillText("0", leftPadding - 12, topPadding + cellH / 2);
  ctx.fillText("1", leftPadding - 12, topPadding + cellH / 2 + cellH);

  ctx.strokeStyle = "#ccc";
  ctx.lineWidth   = 1;
  ctx.strokeRect(leftPadding, topPadding, gridW, gridH);
}

/* =========================================
   CONTACT FORM (AJAX via formsubmit)
   ========================================= */
function initContactForm() {
  const form   = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const t = translations[currentLang];

    try {
      const res = await fetch("https://formsubmit.co/ajax/joacontre0@gmail.com", {
        method: "POST",
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        status.className  = "form-status";
        status.textContent = t["contact.form.success"];
      } else {
        throw new Error();
      }
    } catch {
      status.className   = "form-status error";
      status.textContent = t["contact.form.error"];
    }
  });
}

/* =========================================
   PARTICLES
   ========================================= */
function initParticles() {
  if (typeof particlesJS === "undefined") return;
  particlesJS("particles-js", {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.35 },
      size: { value: 2.5, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1.2, out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "grab" }, resize: true },
      modes: { grab: { distance: 160, line_linked: { opacity: 0.5 } } },
    },
    retina_detect: true,
  });
}

/* =========================================
   FADE-IN ON SCROLL
   ========================================= */
function initFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.08 }
  );
  document.querySelectorAll("section").forEach((s) => observer.observe(s));
}

/* =========================================
   BOOT
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  initNavbar();
  initModal();
  initContactForm();
  initParticles();
  initFadeIn();
});
