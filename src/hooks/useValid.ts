import React, { useCallback } from "react";

interface IVaild {
  email: string;
  password: string;
  name?: string;
  confirmPassword?: string;
  errorEmail: boolean;
  errorPassword: boolean;
  errorName?: boolean;
  errorConfirmPassword?: boolean;
}

const useValid = <T extends IVaild>(
  value: T,
  setValue: React.Dispatch<React.SetStateAction<T>>
) => {
  // 이메일 걸러주기
  const changeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const isEmail = e.target.value.replace(/[^a-zA-Z0-9.@]/g, "");
      setValue((prev) => ({
        ...prev,
        email: isEmail,
        errorEmail:
          value.email.includes("@daum.ne")
          || value.email.includes("@gmail.co")
          || value.email.includes("@naver.co"),
      }));
    },
    [value.email, value.errorEmail]
  );
  // 패스워드 걸러주기.
  const pwValid = /^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*]).{8,}$/;
  const changePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const Error = pwValid.test(value.password);
      setValue((prev) => ({
        ...prev,
        password: e.target.value,
        errorPassword: Error,
      }));
    },
    [value.password, value.errorPassword]
  );
  // 패스워드 확인
  const changePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue((prev) => ({
        ...prev,
        confirmPassword: e.target.value,
        errorConfirmPassword: value.password === e.target.value,
      }));
    },
    [value.password]
  );
  // 이름 확인
  const changeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nameVaild = /^[가-힣]{2,30}$/.test(e.target.value);
      setValue((prev) => ({
        ...prev,
        name: e.target.value,
        errorName: nameVaild,
      }));
    },
    [value.password, value.errorPassword]
  );
  return {
    changeEmail,
    changePassword,
    changePasswordCheck,
    changeName,
  };
};

export default useValid;
