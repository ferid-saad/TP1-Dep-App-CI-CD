const START_YEAR = 2002;
document.getElementById("years").textContent = new Date().getFullYear() - START_YEAR;

const root = document.documentElement;
const themeBtn = document.getElementById("theme");



function applyTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  themeBtn.textContent = dark ? "Mode clair" : "Mode sombre";
  themeBtn.setAttribute("aria-pressed", String(dark));
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(prefersDark ? "dark" : "light");

themeBtn.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

document.getElementById("print").addEventListener("click", () => window.print());

// ===== Projets =====
const projects = [
  { title: "Robot suiveur de ligne", description: "Robot pour l'atelier de robotique.", tags: ["Arduino", "C++"] },
  { title: "Serveur Windows", description: "Domaine Active Directory pour la formation.", tags: ["Windows Server"] },
  { title: "Gestion de notes", description: "Application web avec SQL Server.", tags: ["SQL Server", "JavaScript"] }
];

document.getElementById("projects-list").innerHTML = projects.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
  </article>
`).join("");
