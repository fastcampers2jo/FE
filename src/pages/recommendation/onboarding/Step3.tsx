import { Back, Bar3 } from "assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step3 = () => {
  const [selectPay, setSelectPay] = useState("");
  const [isContinueActive, setIsContinueActive] = useState(false);

  const navigate = useNavigate();

  const handlePaySelect = (pay: string) => {
    if (selectPay === pay) {
      setSelectPay("");
      setIsContinueActive(false);
    } else {
      setSelectPay(pay);
      setIsContinueActive(true);
    }
  };

  return (
    <div className="userpaypage">
      <section className="recommend__statusbar">
        <Back className="icon__recommend" onClick={() => navigate(-1)} />
        <Bar3 className="icon__disabled" />
      </section>
      <section className="onboarding__title">
        <div className="onboarding__title__def userpay">
          하진님의
          <br /> 월소득이 궁금해요
        </div>
        <div className="onboarding__title__small userpay">
          또래 사용자의 정보로 하진님이 <br /> 쉽게 상품을 탐색할 수 있게 도와드려요!
        </div>
      </section>

      <section className="onboarding__textboxs userpay">
        <button
          type="button"
          className={`onboarding__textbox userpay ${selectPay === "100만원 이하" ? "active" : ""}`}
          onClick={() => handlePaySelect("100만원 이하")}
        >
          <div className="text"> 100만원 이하</div>
        </button>
        <button
          type="button"
          className={`onboarding__textbox userpay ${selectPay === "100만원 - 200만원" ? "active" : ""}`}
          onClick={() => handlePaySelect("100만원 - 200만원")}
        >
          <div className="text">100만원 - 200만원</div>
        </button>
        <button
          type="button"
          className={`onboarding__textbox userpay ${selectPay === "200만원 - 300만원" ? "active" : ""}`}
          onClick={() => handlePaySelect("200만원 - 300만원")}
        >
          <div className="text">200만원 - 300만원</div>
        </button>
        <button
          type="button"
          className={`onboarding__textbox userpay ${selectPay === "300만원 - 400만원" ? "active" : ""}`}
          onClick={() => handlePaySelect("300만원 - 400만원")}
        >
          <div className="text">300만원 - 400만원</div>
        </button>
        <button
          type="button"
          className={`onboarding__textbox userpay ${selectPay === "400만원 - 500만원" ? "active" : ""}`}
          onClick={() => handlePaySelect("400만원 - 500만원")}
        >
          <div className="text">400만원 - 500만원</div>
        </button>
        <button
          type="button"
          className={`onboarding__textbox userpay ${selectPay === "500만원 이상" ? "active" : ""}`}
          onClick={() => handlePaySelect("500만원 이상")}
        >
          <div className="text">500만원 이상</div>
        </button>
      </section>
      <section className="bottom-btn">
        <Link
          to="/recommend-onboarding/step4"
          type="button"
          className={`onboarding--btn ${isContinueActive ? "active" : ""}`}
        >
          계속하기
        </Link>
      </section>
    </div>
  );
};

export default Step3;
