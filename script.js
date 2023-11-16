addEventListener("htmx:pushedIntoHistory", (e) => {
  for (const a of document.querySelectorAll("a")) {
    a.classList.toggle("active", a.getAttribute("href") === e.detail.path);
  }
});

addEventListener("keyup", (event) => {
  const target = event.target;
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
  if (event.key === "j" || event.key === "k") {
    const next = document.querySelector(
      event.key === "j"
        ? ".recipe.active + .recipe"
        : ".recipe:has(+ .recipe.active)",
    );
    next?.click();
    next?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
