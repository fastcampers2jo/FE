import { GreenDog } from "assets";
import { Link } from "react-router-dom";
import "../recommendation.scss";

const OnboardingMain = () => (
  <form className="onboardingMain">
    <section className="onboarding__title">
      <div className="onboarding__title__small">지금 추천을 위한 테스트를 받아보세요!</div>
      <div className=" onboarding__title__def">
        오직 하진님을 위한 <br />
        Chak 상품이 기다려요!
      </div>
    </section>

    <section className="mainpage__background">
      <div className="circle__wrapped">
        <GreenDog className="greendog" />
        <div className="gray__circles">
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
        </div>
        <div className="gray__circles">
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
          <div className="gray__cir" />
        </div>
      </div>
    </section>
    <section className="bottom-btn">
      <Link to="/recommend-onboarding/step1" className="onboarding--btn active">
        시작하기
      </Link>
    </section>
  </form>
);

export default OnboardingMain;
