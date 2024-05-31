import axios from "axios";
import { getCookie } from "./cookies";

export const baseAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

baseAxios.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.error(error.message);
  }
);

baseAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response.data;
    const errorStatus = error.response.status;
    switch (errorStatus) {
      case 400:
        switch (errorMessage.result.resultMessage) {
          case "사용자 이메일을 찾을 수 없음.":
            return Promise.reject(
              new Error("이메일 또는 비밀번호를 다시 확인하세요.")
            );
          default:
            break;
        }
        break;
      case 401:
        switch (errorMessage.result.resultMessage) {
          case "유효하지 않은 패스워드.":
            return Promise.reject(
              new Error("이메일 또는 비밀번호를 다시 확인하세요.")
            );
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
);
