import { Bar5, IcBack } from "assets";
import { Slider } from "components";
import Navbar from "components/navber";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step5 = () => {
  const [sliderValue, setSliderValue] = useState(12);
  const navigate = useNavigate();

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <div className="step5">
      <section className="recommend__statusbar">
        <IcBack className="icon__recommend" onClick={() => navigate(-1)} />
        <Bar5 className="icon__disabled" />
        <div />
      </section>
      <section className="onboarding__title period">
        <div className="onboarding__title__def">
          매달 30만원 씩, <br />
          <span className="period__text">{sliderValue}개월</span> 동안 저축할래요
        </div>
        <div className="tags">
          <div className="tag__options">예상 이자 연4%</div>
        </div>
        <div className="onboarding__title__small">추후 선택하신 상품에 따라 이자가 변동될 수 있어요</div>
      </section>
      <section className="onboarding__total">
        <div className=" onboarding__title__def ">
          9,900,000<span className="small__unit">원</span>
        </div>
        <div className="onboarding__total__info">총 세후 이자 243,890원(연4% 기준)</div>
      </section>
      <section className="onboarding__slider">
        <Slider value={sliderValue} onChange={handleSliderChange} />
      </section>

      <section className="bottom-btn">
        <Link to="/recommend-onboarding/step6" type="button" className="onboarding--btn active">
          계속하기
        </Link>
      </section>
      <Navbar />
    </div>
  );
};

export default Step5;
