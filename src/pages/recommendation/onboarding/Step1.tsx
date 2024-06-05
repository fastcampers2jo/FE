import { IcBack, Bar1 } from "assets";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../recommendation.scss";
import Navbar from "components/navber";

const Step1 = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [isContinueActive, setIsContinueActive] = useState(false);
  const navigate = useNavigate();

  const handleCategorySelect = (category: string) => {
    if (selectCategory === category) {
      setSelectCategory("");
      setIsContinueActive(false);
    } else {
      setSelectCategory(category);
      setIsContinueActive(true);
    }
  };

  return (
    <div className="step1">
      <section className="recommend__statusbar">
        <IcBack className="icon__recommend" onClick={() => navigate(-1)} />
        <Bar1 className="icon__disabled" />
        <div />
      </section>
      <section className="onboarding__title">
        <div className=" onboarding__title__def category">관심있는 금융상품 카테고리를 선택해주세요</div>
      </section>
      <section className="onboarding__textboxs">
        <button
          type="button"
          className={`onboarding__textbox ${selectCategory === "저축상품" ? "active" : ""}`}
          onClick={() => handleCategorySelect("저축상품")}
        >
          <div className="text">🪙 저축상품</div>
          <div className="text small"> 상품은 예금 &#8729; 적금 &#8729; 파킹 &#8729; CMA가 있어요</div>
        </button>
        <button
          type="button"
          className={`onboarding__textbox ${selectCategory === "투자상품" ? "active" : ""}`}
          onClick={() => handleCategorySelect("투자상품")}
        >
          <div className="text">📈 투자상품</div>
          <div className="text small"> 상품은...</div>
        </button>
      </section>
      <section className="bottom-btn">
        <Link
          to="/recommend-onboarding/step2"
          type="button"
          className={`onboarding--btn ${isContinueActive ? "active" : ""}`}
        >
          계속하기
        </Link>
      </section>
      <Navbar />
    </div>
  );
};

export default Step1;
