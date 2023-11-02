/** @jsxImportSource npm:hono/jsx */
import { Context } from "npm:hono@3.8.1";

const production = Deno.env.get("NODE_ENV") === "production";

export function styleSytem() {
  function StyleTag() {
    const style = Deno.readTextFileSync("./style.css");
    return (
      <style
        {...(production ? {} : {
          ["hx-get"]: "/style",
          ["hx-trigger"]: "every 2s",
        })}
        dangerouslySetInnerHTML={{ __html: style }}
      />
    );
  }

  const styleWatch = Deno.watchFs("./style.css");
  let styleVersionOld = 0;
  let styleVersionNew = 0;
  (async () => {
    for await (const _evt of styleWatch) styleVersionNew++;
  })();

  const styleRoute = (c: Context) => {
    if (!c.req.header("HX-Request")) {
      c.status(400);
      return c.text("Only HTMX-accessible");
    }
    if (styleVersionNew !== styleVersionOld) {
      styleVersionOld = styleVersionNew;
      c.header("HX-Reswap", "outerHTML");
      return c.html(<StyleTag />);
    }
    c.header("HX-Reswap", "none");
    c.status(204);
    return c.body(null);
  };

  return { styleRoute, StyleTag };
}
