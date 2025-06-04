import Cookies from 'js-cookie';

export type CookieOptions = {
  expires?: number;
  path?: string;
  secure?: boolean;
};

export const setCookie = (name: string, value: string, options?: CookieOptions): void => {
  Cookies.set(name, value, options);
};

export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

export const removeCookie = (name: string, options?: Pick<CookieOptions, 'path'>): void => {
  Cookies.remove(name, options);
};