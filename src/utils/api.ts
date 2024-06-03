import { baseAxios } from "utils/instance";
import * as I from "types";

export const login = async (data: I.Login) => {
  const res = await baseAxios.post("/api/v1/users/login", data);
  return res.data;
};

export const signup = async (data: I.Sign) => {
  const res = await baseAxios.post("/api/v1/users/join", data);
  return res.data;
};

export const keepLogin = async () => {
  const res = await baseAxios.get("/api/v1/users/me");
  return res.data;
};

export const kakaoLogin = async () => {
  const res = await baseAxios.get("/api/login/kakao");
  return res.data;
};
