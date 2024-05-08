import { baseAxios } from "utils/instance";

export const login = async () => {
  const res = await baseAxios.post("/api/login");
  return res;
};
