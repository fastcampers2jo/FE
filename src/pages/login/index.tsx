import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button, Input } from "components";
import { IcBack, IcKakao, IcLoginIcon } from "assets";
import { useMessage } from "stores/useMessage";
import { useValid } from "hooks";
import { setCookie } from "utils/cookies";
import { login } from "utils/api";
import styles from "./styles.module.scss";

const Login = () => {
  const navigation = useNavigate();
  const [logins, setLogins] = useState({
    email: "",
    password: "",
    errorEmail: false,
    errorPassword: false,
  });
  const { changeEmail, changePassword } = useValid(logins, setLogins);
  const { setMessage, message } = useMessage((state) => state);
  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookie("token", data.body.token);
      navigation("/");
    },
    onError: (err) => {
      setMessage(err.message);
    },
  });
  const onLogin = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate({ email: logins.email, password: logins.password });
    },
    [logins.email, logins.password]
  );
  // 제거
  const onClear = useCallback(
    (v: string) => {
      if (v === "email") return setLogins({ ...logins, email: "" });
      if (v === "password") return setLogins({ ...logins, password: "" });
    },
    [logins.email, logins.password]
  );
  const onkakao = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  };
  return (
    <div className={styles.wrap}>
      <header>
        <button onClick={() => navigation(-1)} className={styles.back}>
          <IcBack />
        </button>
        <em className={styles.title}>로그인</em>
        <IcLoginIcon />
        <span className={styles.span}>맞춤형 금융상품을 딱 맞춰서,</span>
        <strong className={styles.strong}>
          ChaK에 오신 걸<br /> 환영합니다
        </strong>
      </header>
      <section>
        <form onSubmit={onLogin} className={styles.loginForm}>
          <div>
            <Input
              type="email"
              placeholder="이메일"
              onChange={changeEmail}
              value={logins.email}
              name="email"
              onClear={() => onClear("email")}
              error={
                !logins.errorEmail && logins.email.length > 0
                  ? "올바른 이메일 형식이 아닙니다."
                  : ""
              }
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="비밀번호"
              onChange={changePassword}
              value={logins.password}
              name="password"
              onClear={() => onClear("password")}
              error={message}
            />
          </div>
          <Button
            type="submit"
            disabled={!(logins.password.length > 7 && logins.errorEmail)}
          >
            로그인
          </Button>
        </form>
        <div className={styles.link}>
          <Link to="/findId">아이디 찾기</Link>
          <Link to="/findPw">비밀번호 찾기</Link>
          <Link to="/signup">회원가입</Link>
        </div>
        <div className={styles.sns}>
          <hr />
          <p>간편 로그인</p>
          <button type="button" onClick={onkakao}>
            <IcKakao />
            카카오로 로그인
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
