const portfolioLinks = {
  github: "https://github.com/MonarkTT/Repositorio",
  linkedin: "",
  certificates: "",
  projects: ["https://github.com/MonarkTT/sistema-gamers.git"]
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const url = portfolioLinks[element.dataset.link];
  if (url) {
    element.href = url;
  } else {
    element.href = "#";
    element.addEventListener("click", (event) => event.preventDefault());
  }
});

document.querySelectorAll("[data-project]").forEach((element) => {
  const index = Number(element.dataset.project);
  const url = portfolioLinks.projects?.[index];

  if (url) {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  } else {
    element.href = "#";
    element.addEventListener("click", (event) => event.preventDefault());
  }
});