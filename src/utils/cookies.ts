import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name: string, value: string) => cookie.set(name, value, { maxAge: 60 * 60 * 3, path: "/" });

export const getCookie = (name: string) => cookie.get(name);

export const deleteCookie = (name: string) => cookie.remove(name, { path: "/" });
