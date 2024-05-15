import { useState } from "react";
import { TitleTop } from "components";
import { useInput } from "hooks";
import { Hide } from "assets";
import "styles/mobile.scss";

const Signup = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [id, onId] = useInput("");
  const [name, onName] = useInput("");
  const [password, onPassword] = useInput("");
  return (
    <section>
      <TitleTop>회원가입</TitleTop>
      <div className="inputWrap">
        <input
          type="text"
          placeholder="이름"
          className="input"
          onChange={onName}
          value={name}
        />
        <div>
          <input
            type="text"
            placeholder="이메일"
            className="input"
            onChange={onId}
            value={id}
          />
        </div>
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
    </section>
  );
};

export default Signup;
