import jsCookie from "js-cookie";

export const getCookie = (name: string) => jsCookie.get(name);
export const setCookie = (
  name: string,
  value: string,
  options?: Cookies.CookieAttributes,
) => jsCookie.set(name, value, options);
export const removeCookie = (name: string) => jsCookie.remove(name);
