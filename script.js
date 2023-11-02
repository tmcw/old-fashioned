addEventListener("htmx:pushedIntoHistory", (e) => {
  for (const a of document.querySelectorAll("a")) {
    a.classList.toggle("active", a.getAttribute("href") === e.detail.path);
  }
});
