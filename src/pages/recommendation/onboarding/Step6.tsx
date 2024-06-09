import { IcBack, Bar6 } from "assets";
import Navbar from "components/navber";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step6 = () => {
  const [selectMethod, setSelectMethod] = useState("");
  const [isContinueActive, setIsContinueActive] = useState(false);
  const navigate = useNavigate();

  const handleMethodSelect = (method: string) => {
    if (selectMethod === method) {
      setSelectMethod("");
      setIsContinueActive(false);
    } else {
      setSelectMethod(method);
      setIsContinueActive(true);
    }
  };

  return (
    <div className="step6">
      <section className="recommend__statusbar">
        <IcBack className="icon__recommend" onClick={() => navigate(-1)} />
        <Bar6 className="icon__disabled" />
        <div />
      </section>
      <section className="onboarding__title">
        <div className="onboarding__title__def method">
          어떤 저축 방식을 <br /> 선호하시나요?
        </div>
      </section>
      <section className="onboarding__textboxs">
        <button
          type="button"
          className={`onboarding__textbox ${selectMethod === "자유 저축" ? "active" : ""}`}
          onClick={() => handleMethodSelect("자유 저축")}
        >
          <div className="text">💸 자유 저축</div>
          <div className="text small">원할 때마다 자유롭게 저축하고 싶어요</div>
        </button>
        <button
          type="button"
          className={`onboarding__textbox ${selectMethod === "정기 저축" ? "active" : ""}`}
          onClick={() => handleMethodSelect("정기 저축")}
        >
          <div className="text">📅 정기 저축</div>
          <div className="text small">매달 일정 금액을 꾸준히 저축하고 싶어요</div>
        </button>
      </section>

      <section className="bottom-btn">
        <Link to="/recommend/:id" type="button" className={`onboarding--btn ${isContinueActive ? "active" : ""}`}>
          Chak 맞는 상품 보기
        </Link>
      </section>
      <Navbar />
    </div>
  );
};

export default Step6;
