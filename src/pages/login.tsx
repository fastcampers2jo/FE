import { useState } from "react";
import { LoginTop } from "components";
import { useInput } from "hooks";
import { Hide } from "assets";
import "styles/mobile.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [id, onId] = useInput("");
  const [password, onPassword] = useInput("");
  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id, password);
  };
  return (
    <section>
      <LoginTop>로그인</LoginTop>
      <form onSubmit={onLogin} className="loginForm">
        <div className="inputWrap">
          <input
            type="text"
            placeholder="이메일"
            className="input"
            onChange={onId}
            value={id}
          />
          <div>
            <input
              type={hide ? "text" : "password"}
              placeholder="비밀번호"
              className="input"
              onChange={onPassword}
              value={password}
            />
            <Hide onClick={() => setHide((prev) => !prev)} />
          </div>
        </div>
        <button type="submit">로그인</button>
      </form>
      <Link to="/signup" className="loginLink">
        회원가입
      </Link>
      <Link to="/find" className="loginLink">
        아이디 / 비밀번호 찾기
      </Link>
      <div className="sns">
        <p>간편 로그인</p>
        <button>카카오톡 ID로 로그인</button>
      </div>
    </section>
  );
};

export default Login;
