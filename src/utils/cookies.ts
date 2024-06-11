import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name: string, value: string) => cookie.set(name, value);

export const getCookie = (name: string) => cookie.get(name);

export const deleteCookie = (name: string) => cookie.remove(name, { path: "/" });
