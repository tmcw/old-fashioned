import { useContext } from "hono/jsx";
import { RequestContext } from "../context";
import { getCookie } from "../cookies";
import { units } from "../units";

export function Units() {
  const requestContext = useContext(RequestContext);
  let unit = getCookie(requestContext!, "units") || "";
  if (!(unit in units)) unit = "Ml";

  return (
    <plank id="units" hx-swap-oob="true">
      <select name="unit" hx-post="/units" hx-boost="true">
        <option selected={unit === "Ml"} value="Ml">
          Units: Ml
        </option>
        <option selected={unit === "CL"} value="CL">
          Units: CL
        </option>
        <option selected={unit === "Oz"} value="Oz">
          Units: Oz
        </option>
      </select>
    </plank>
  );
}
