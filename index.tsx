/** @jsxImportSource npm:hono/jsx */
import { Context, Hono } from "npm:hono@3.8.1";
import { HtmlEscapedString } from "npm:hono@3.8.1/src/utils/html";
import { JSXNode } from "npm:hono@3.8.1/jsx";

let list: string[] = ["Cookies", "Bread"];

type Component<
  A extends { c: Context; index?: number | string } = {
    c: Context;
    index?: number | string;
  },
> = (args: A) => Promise<HtmlEscapedString | null>;

function NameInput({ c }: { c: Context }) {
  return (
    <div>
      Add item?
      <form
        hx-post={path(list_display)}
        hx-swap="outerHTML"
        hx-target={selector(list_display)}
      >
        <input name="name" autocomplete="off" />
      </form>
    </div>
  );
}

async function list_item({ c, l, i }: { c: Context; l: string; i: number }) {
  // TODO: this data-component shouldn't really be there.
  if (c.req.method === "DELETE") {
    const body = await c.req.parseBody();
    list = list.filter((l) => l !== body.name);
    c.res.headers.set("HX-Retarget", `#list_item_${i}`);
    return null;
  }
  return (
    <div>
      {l}
      <button name="name" value={list[i]} hx-delete={path(list_item, i)}>
        Remove
      </button>
    </div>
  );
}

async function list_display({ c }: { c: Context }) {
  if (c.req.method === "POST") {
    const body = await c.req.parseBody();
    list.push(String(body.name));
  }
  // TODO: this data-component shouldn't really be there.
  return (
    <div data-component="list_display">
      {await Promise.all(
        list.map((l, i) => {
          return list_item({ c, l, i });
        }),
      )}
    </div>
  );
}

async function index({ c }: { c: Context }) {
  return (
    <html>
      <body>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        {await list_display({ c })}
        <NameInput c={c} />
      </body>
    </html>
  );
}

const components: Component[] = [index, list_display, list_item];

function path(component: Component, index = undefined) {
  if (index === undefined) {
    return `/components/${component.name}`;
  } else {
    return `/components/${component.name}/${index}`;
  }
}

function selector(component: Component) {
  return `[data-component="${component.name}"]`;
}

const app = new Hono();

components.forEach((component) => {
  app.all(path(component), async (c) => {
    const j = await component({ c });
    return c.html(j || "");
  });
  app.all(`${path(component)}/:index`, async (c) => {
    const i = c.req.param("index");
    const j = await component({ c, i });
    if (j?.props) {
      j.props.id = `${component.name}_${i}`;
    }
    return c.html(j || "");
  });
  if (component.name === "index") {
    // TODO: do this in a less dumb way
    app.get(`/`, async (c) => {
      const j = await component({ c });
      return c.html(j || "");
    });
  }
});

Deno.serve(app.fetch);
