import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Slider, Navber } from "components";
import { useRecommend } from "stores/useRecommend";
import { Bar5, IcBack } from "assets";
import styles from "../recommendation.module.scss";

const Step5 = () => {
  const [sliderValue, setSliderValue] = useState(12);
  const navigate = useNavigate();
  const { setSavingEnd, savingGoal } = useRecommend();
  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };
  useEffect(() => {
    setSavingEnd(sliderValue);
  }, [sliderValue]);
  const num = savingGoal * 10000 * (sliderValue + 0.04 * sliderValue * (sliderValue + 1)) * 0.846;
  return (
    <section className={styles.section}>
      <article className={styles.statusbar}>
        <IcBack onClick={() => navigate(-1)} />
        <Bar5 />
        <div />
      </article>
      <article className={styles.title}>
        <em>
          매달 {savingGoal}만원 씩, <br />
          <span className="period__text">{sliderValue}개월</span> 동안
          저축할래요
        </em>
        <div className={styles.tags}>
          <span className={styles.tag__options}>예상 이자 연4%</span>
        </div>
        <p>추후 선택하신 상품에 따라 이자가 변동될 수 있어요</p>
      </article>
      <article className={styles.onboarding__total}>
        <em>
          {String(sliderValue * savingGoal * 10000).replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}
          <span className="small__unit">원</span>
        </em>
        <p>
          총 세후 이자{" "}
          {String(Math.floor(num)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원(연4%
          기준)
        </p>
      </article>
      <article className="onboarding__slider">
        <Slider value={sliderValue} onChange={handleSliderChange} />
      </article>
      <Link
        to="/recommend-onboarding/step6"
        className={`${styles.goBtn} ${styles.active}`}
      >
        계속하기
      </Link>
      <Navber />
    </section>
  );
};

export default Step5;
