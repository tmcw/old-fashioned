/** @jsxImportSource hono/jsx */

const style = `:root {
  --main-bg-color: #faf7f4;
  --active-bg-color: #f0ede9;
  --main-text-color: #333;
  --main-link-color: #330;
  --hover-text-color: #111;
  --secondary-text-color: #888;
}

@media (prefers-color-scheme: dark) {
  :root {
    --main-bg-color: #2e2e2e;
    --active-bg-color: #444;
    --main-text-color: #eee;
    --main-link-color: #eef;
    --secondary-text-color: #888;
    --hover-text-color: #fff;
  }
  img {
    filter: invert();
  }
}

a {
  color: var(--main-link-color);
}

p {
  line-height: 2;
}

body {
  font-family: "IBM Plex Mono", sans-serif;
  font-size: 13px;
  background: var(--main-bg-color);
  line-height: 1.4;
  color: var(--main-text-color);
}

.recipe {
  text-decoration: none;
  display: block;
  padding: 15px;
  border-radius: 5px;
  color: var(--main-text-color);
  transition: 400ms background-color;
}

.recipe name {
  display: flex;
  align-items: center;
  gap: 4px;
  padding-bottom: 5px;
  font-weight: normal;
  text-decoration: underline;
  font-style: italic;
}

.recipe.active {
  background-color: var(--active-bg-color);
}

.missing {
  color: var(--secondary-text-color);
}

[itemprop="recipeIngredient"] .missing-trigger {
  display: none;
}

[itemprop="recipeIngredient"]:hover .missing-trigger {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
}

button {
  padding: 1px 10px;
  font-size: 10px;
  border: none;
  background: var(--active-bg-color);
  font-family: inherit;
  border-radius: 2px;
}

button:hover {
  box-shadow: 0 0 0 1px var(--hover-text-color);
}

.recipe:hover {
  color: var(--hover-text-color);
}

ul.ingredients {
  margin: 0;
  padding: 10px 0 10px 20px;
  list-style-type: "- ";
}

ul.ingredients li {
  padding: 4px 0;
}

form {
  padding: 0;
  margin: 0;
}

summary {
  list-style-type: "+";
  padding: 2px;
  text-transform: uppercase;
  font-weight: bold;
}

details[open] summary {
  list-style-type: "-";
}

/**
 * Overall page structure
 */
@media (min-width: 720px) {
  columns {
    display: grid;
    grid-template-columns: 280px 280px 1fr;
    height: 100vh;
  }

  body {
    margin: 0;
  }

  #material-list {
    order: 0;
  }

  #recipes-list {
    order: 1;
  }

  #recipe-detail {
    order: 2;
  }

  summary {
    list-style-type: none;
    pointer-events: none;
  }

  details[open] summary {
    list-style-type: none;
  }
}

material-group-name {
  font-weight: bold;
  display: block;
  padding: 10px 2px 2px 2px;
}

#recipes-list {
  padding: 10px;
  overflow-y: auto;
}

#recipe-detail {
  padding: 20px;
  overflow-y: auto;
}

#recipe-detail h1 {
  font-size: 14px;
  font-weight: bold;
}

#recipe-detail h2 {
  margin-top: 40px;
  font-size: 14px;
  font-weight: bold;
}

#recipe-detail p {
  max-width: 720px;
}

#materials-list {
  padding: 10px;
  overflow-y: auto;
}

#materials-list label {
  display: block;
  padding: 4px 0;
}

glass {
  display: flex;
  align-items: center;
  gap: 4px;
}

#units {
  position: absolute;
  top: 10px;
  right: 10px;
}

#units select {
  font-family: inherit;
  background: var(--main-bg-color);
  color: var(--main-text-color);
}`;

export function StyleTag() {
  return (
    <style
      dangerouslySetInnerHTML={{ __html: style }}
    >
    </style>
  );
}
