import { IcBack, Bar4, IcEdit } from "assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step4 = () => {
  // const [isContinueActive, setIsContinueActive] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleEditDelete = () => {
    setIsInputActive(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!Number.isNaN(Number(value)) && Number(value) >= 0) {
      setInputValue(value);
    }
  };

  return (
    <div className="onboarding__myset">
      <section className="recommend__statusbar">
        <IcBack className="icon__recommend" onClick={() => navigate(-1)} />
        <Bar4 className="icon__disabled" />
      </section>
      <section className="onboarding__title">
        <div className=" onboarding__title__def">
          매달 저축 목표금액도 <br />
          정해볼까요?
        </div>
        <div className="tags">
          <div className="tag__options">20-24세</div>
          <div className="tag__options">소득 100만원 이하</div>
        </div>
        <div className="onboarding__title__small">
          의 또래들은 월 평균 30만원을 저축해요!
        </div>
      </section>

      <section className="myset__options">
        <div className="inputsection">
          <input
            className={`inputbox  ${isInputActive ? "active" : ""}`}
            type="number"
            placeholder="금액"
            min="0"
            inputMode="numeric"
            pattern="[0-9]*"
            onFocus={handleInputFocus}
            onBlur={handleEditDelete}
            onChange={handleChange}
            onWheel={(event) => (event.target as HTMLElement).blur()}
            value={inputValue}
          />
          {!isInputActive && !inputValue && <IcEdit className="edit" />}
          <span>만원</span>
        </div>
      </section>

      <section className="bottom-btn">
        <Link
          to="/recommend-onboarding/step5"
          type="button"
          className={`onboarding--btn ${inputValue ? "active" : ""}`}
        >
          계속하기
        </Link>
      </section>
    </div>
  );
};

export default Step4;
