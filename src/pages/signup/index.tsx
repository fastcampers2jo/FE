import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Input } from "components";
import { IcBack, IcLoginIcon } from "assets";
import { useValid } from "hooks";
import { duplicateId, signup } from "utils/api";
import styles from "./styles.module.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [logins, setLogins] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    errorEmail: false,
    errorPassword: false,
    errorName: false,
    errorConfirmPassword: false,
    duplicateId: false,
  });
  const { changeEmail,
    changePassword,
    changePasswordCheck,
    changeName } = useValid(logins, setLogins);
  const { mutate } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      navigate("/login");
    },
  });
  const onSign = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate({
        email: logins.email,
        password: logins.password,
        name: logins.name,
      });
    },
    [logins.email, logins.password, logins.name]
  );
  // 제거
  const onClear = useCallback(
    (v: string) => {
      if (v === "email") return setLogins({ ...logins, email: "" });
      if (v === "password") return setLogins({ ...logins, password: "" });
      if (v === "confirmPassword") return setLogins({ ...logins, confirmPassword: "" });
      if (v === "name") return setLogins({ ...logins, name: "" });
    },
    [logins.email, logins.password, logins.name, logins.confirmPassword]
  );
  const { data, refetch } = useQuery({
    queryKey: ["duplicate", logins.email],
    queryFn: duplicateId,
    enabled: logins.duplicateId,
  });
  const onDuplicate = () => {
    setLogins({ ...logins, duplicateId: true });
    refetch().then(() => {
      setLogins((current) => ({ ...current, duplicateId: false }));
    });
  };
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <button onClick={() => navigate(-1)}>
          <IcBack />
        </button>
        <strong>회원가입</strong>
        <div />
      </header>
      <section>
        <div className={styles.mid}>
          <p>
            ChaK과 함께
            <br /> 똑똑한 생활을 시작해봐요!
          </p>
          <IcLoginIcon />
        </div>
        <form onSubmit={onSign} className={styles.form}>
          <div>
            <span>이름</span>
            <Input
              type="text"
              placeholder="이름을 입력해주세요."
              onChange={changeName}
              value={logins.name}
              name="name"
              onClear={() => onClear("name")}
            />
          </div>
          <div>
            <span>이메일</span>
            <Input
              type="email"
              placeholder="이메일을 입력해주세요."
              onChange={changeEmail}
              value={logins.email}
              name="emails"
              onClick={onDuplicate}
              onClear={() => onClear("email")}
              duplicateCode={data?.body && data.body?.taken}
              errorCode={logins.errorEmail}
              error={
                !logins.errorEmail && logins.email.length > 0
                  ? "올바른 이메일 형식이 아닙니다."
                  : ""
              }
            />
          </div>
          <div>
            <span>비밀번호</span>
            <Input
              type="password"
              placeholder="8자리 이상 영대 · 소문자, 숫자, 특수문자 조합"
              onChange={changePassword}
              value={logins.password}
              name="password"
              onClear={() => onClear("password")}
            />
          </div>
          <div>
            <span>비밀번호 확인</span>
            <Input
              type="password"
              placeholder="8자리 이상 영대 · 소문자, 숫자, 특수문자 조합"
              onChange={changePasswordCheck}
              value={logins.confirmPassword}
              name="confirmPassword"
              onClear={() => onClear("confirmPassword")}
              errorCode={logins.errorConfirmPassword}
              error={
                !logins.errorConfirmPassword
              && logins.confirmPassword.length > 0
                  ? "비밀번호가 일치하지 않습니다."
                  : "비밀번호가 일치합니다."
              }
            />
          </div>
          <div className={styles.button}>
            <Button
              type="submit"
              height="56"
              disabled={
                !(
                  logins.errorPassword
                && logins.errorEmail
                && logins.errorConfirmPassword
                && logins.errorName
                && logins.duplicateId
                )
              }
            >
              회원가입
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
