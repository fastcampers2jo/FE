import { Link, useNavigate } from "react-router-dom";
import "../recommendation.scss";
import { useState } from "react";
import { IcBack, Bar2 } from "assets";
import Navbar from "components/navber";

const Step2 = () => {
  const [selectAge, setSelectAge] = useState("");
  const [isContinueActive, setIsContinueActive] = useState(false);
  const navigate = useNavigate();

  const handleAgeSelect = (age: string) => {
    if (selectAge === age) {
      setSelectAge("");
      setIsContinueActive(false);
    } else {
      setSelectAge(age);
      setIsContinueActive(true);
    }
  };

  return (
    <div className="step2">
      <section className="recommend__statusbar">
        <IcBack className="icon__recommend" onClick={() => navigate(-1)} />
        <Bar2 className="icon__disabled" />
        <div />
      </section>
      <section className="onboarding__title">
        <div className="onboarding__title__def userInfo">하진님에 대해 알려주세요</div>
        <div className="onboarding__title__small userInfo">하진님의 또래 사용자들의 관심상품 정보를 제공해드려요!</div>
      </section>
      <section className="onboarding__userInfo">
        <div className="userAge__wrapped">
          <button
            type="button"
            className={`userAge  ${selectAge === "19세 이하" ? "active" : ""}`}
            onClick={() => handleAgeSelect("19세 이하")}
          >
            19세 이하
          </button>
          <button
            type="button"
            className={`userAge  ${selectAge === "20-24세" ? "active" : ""}`}
            onClick={() => handleAgeSelect("20-24세")}
          >
            20-24세
          </button>
          <button
            type="button"
            className={`userAge  ${selectAge === "25-29세" ? "active" : ""}`}
            onClick={() => handleAgeSelect("25-29세")}
          >
            25-29세
          </button>
        </div>
        <div className="userAge__wrapped">
          <button
            type="button"
            className={`userAge  ${selectAge === "30-34세" ? "active" : ""}`}
            onClick={() => handleAgeSelect("30-34세")}
          >
            30-34세
          </button>
          <button
            type="button"
            className={`userAge  ${selectAge === "35-39세" ? "active" : ""}`}
            onClick={() => handleAgeSelect("35-39세")}
          >
            35-39세
          </button>
          <button
            type="button"
            className={`userAge  ${selectAge === "40-44세" ? "active" : ""}`}
            onClick={() => handleAgeSelect("40-44세")}
          >
            40-44세
          </button>
        </div>
        <div className="userAge__wrapped">
          <button
            type="button"
            className={`userAge  ${selectAge === "45-49세" ? "active" : ""}`}
            onClick={() => handleAgeSelect("45-49세")}
          >
            45-49세
          </button>
          <button
            type="button"
            className={`userAge  ${selectAge === "50세 이상" ? "active" : ""}`}
            onClick={() => handleAgeSelect("50세 이상")}
          >
            50세 이상
          </button>
          <button className="userAge">{}</button>
        </div>
      </section>
      <section className="bottom-btn">
        <Link
          to="/recommend-onboarding/step3"
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

export default Step2;
