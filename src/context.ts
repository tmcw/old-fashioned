import { createContext } from "hono/jsx";
import { Context } from "hono";

export const RequestContext = createContext<Context | null>(null);
