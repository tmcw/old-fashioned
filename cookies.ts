import { getCookie as _getCookie, setCookie as _setCookie } from "hono/cookie";
import { Context } from "hono";

/**
 * We're leaning hard on cookies here, which makes some of this
 * a little difficult! If we sent a POST with some mutation,
 * we're sending back a cookie that updates the cookiestate,
 * then we also want to immediately render UI with that cookiestate.
 * But the current request doesn't have the cookie.
 *
 * So, we have this, which tracks inflight cookies too.
 */
const InflightCookies = new WeakMap<Context, Map<string, string>>();

function getInflight(c: Context) {
  return InflightCookies.get(c) || new Map();
}

/** Set a cookie and keep track of it inflight */
export function setCookie(c: Context, key: string, value: string) {
  const inflight = getInflight(c);
  inflight.set(key, value);
  InflightCookies.set(c, inflight);
  _setCookie(c, key, value);
}

/** Get a cookie from the request or optionally from inflight */
export function getCookie(c: Context, key: string): string | undefined {
  const inflight = getInflight(c);
  if (inflight.has(key)) {
    return inflight.get(key);
  }
  return _getCookie(c, key);
}
