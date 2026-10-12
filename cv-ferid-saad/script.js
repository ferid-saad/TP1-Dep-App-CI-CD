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
