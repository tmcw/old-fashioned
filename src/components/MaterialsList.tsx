import { useContext } from "hono/jsx";
import { materialType } from "../material_type.ts";
import { RequestContext } from "../context.ts";
import { getMaterialIds } from "../data.ts";

export function MaterialsList() {
  const c = useContext(RequestContext);
  const mats = getMaterialIds(c);

  return (
    <plank id="materials-list" hx-swap-oob="true">
      <h3>Materials</h3>

      <div>
        Select{" "}
        <button hx-post="/material" hx-swap="none" name="all" value="true">
          All
        </button>{" "}
        <button hx-post="/material" hx-swap="none" name="all" value="false">
          None
        </button>
      </div>

      {Object.values(materialType).map((group) => {
        return (
          <material-group>
            <material-group-name>{group.name}</material-group-name>
            {group.links.map((mat) => {
              // Possibly wait until loaded to toggle fully?
              return (
                <form hx-post="/material" hx-trigger="change" hx-swap="none">
                  <label>
                    <input type="hidden" name="name" value={mat.id} />
                    <input
                      type="checkbox"
                      checked={mats.has(mat.id)}
                      name="included"
                    />
                    {mat.name}
                  </label>
                </form>
              );
            })}
          </material-group>
        );
      })}
    </plank>
  );
}
