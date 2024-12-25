import Cookies from "js-cookie";

export const getCookie = (name: string) => Cookies.get(name);
export const setCookie = (
  name: string,
  value: string,
  options?: Cookies.CookieAttributes,
) => Cookies.set(name, value, options);
export const removeCookie = (name: string) => Cookies.remove(name);