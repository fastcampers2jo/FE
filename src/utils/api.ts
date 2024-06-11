import { baseAxios } from "utils/instance";
import * as I from "types";
// import axios from "axios";

export const login = async (data: I.Login) => {
  const res = await baseAxios.post("/api/v1/users/login", data);
  return res.data;
};

export const signup = async (data: I.Sign) => {
  const res = await baseAxios.post("/api/v1/users/join", data);
  return res.data;
};

export const keepLogin = async () => {
  const res = await baseAxios("/api/v1/users/me");
  return res.data;
};

export const kakaoLogin = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [_1, code] = queryKey;
  const res = await baseAxios.get(`/api/login/kakao?code=${code}`);
  return res.data;
};

export const duplicateId = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [_1, email] = queryKey;
  const res = await baseAxios.get(`/api/v1/users/check-email?email=${email}`);
  return res.data;
};

export const getLikeList = async () => {
  const res = await baseAxios.get("/api/v1/liked/me");
  return res.data;
};

export const getLoungeAll = async () => {
  const res = await baseAxios.get(
    "/api/v1/lounge/all?page=0&size=1&sort=string"
  );
  return res.data;
};

export const bankAll = async ({ queryKey }: { queryKey: [string, string, number] }) => {
  const [_1, finProductType, size] = queryKey;
  const res = await baseAxios.get(
    `/api/v1/finances/list?finProductType=${finProductType}&page=0&size=${size}&sort=string`
  );
  return res.data;
};
export const recommendation = async ({
  queryKey,
}: {
  queryKey: [string, string, string, number, number, string];
}) => {
  const [_1, ageGroup, incomeGroup, savingGoal, savingEnd, savingType] = queryKey;
  const res = await baseAxios.get(
    `/api/v1/recommendation?ageGroup=${ageGroup}&incomeGroup=${incomeGroup}&savingGoal=${savingGoal}&savingStart=1&savingEnd=${savingEnd}&savingType=${savingType}&size=10`
  );
  return res.data;
};

export const like = async (data: I.Like) => {
  const res = await baseAxios.post("/api/v1/liked", data);
  return res.data;
};

export const bankBest = async ({
  queryKey,
}: {
  queryKey: [string, string, string[], number];
}) => {
  const [_1, finProductType, bankTypeList, size] = queryKey;
  const res = await baseAxios.get(
    `/api/v1/finances/list/bank?finProductType=${finProductType}&bankTypeList=${bankTypeList}&page=0&size=${size}&sort=string`
  );
  return res.data;
};
