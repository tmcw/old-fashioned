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

let scrolls = new Map();

addEventListener("htmx:oobBeforeSwap", function (evt) {
  const ids = [];
  evt.detail.fragment.childNodes.forEach(function (childNode) {
    ids.push(childNode.id);
  });

  scrolls = new Map(ids.map((id) => {
    return [id, document.getElementById(id)?.scrollTop];
  }));
});

addEventListener("htmx:oobAfterSwap", function (evt) {
  for (let [id, scroll] of scrolls) {
    document.getElementById(id).scrollTop = scroll;
  }
});
