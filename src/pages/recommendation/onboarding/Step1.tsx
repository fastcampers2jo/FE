import { useState } from "react";
import { IcBack, Bar1 } from "assets";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "components/navber";
import styles from "../recommendation.module.scss";

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
    <section className={styles.section}>
      <article className={styles.statusbar}>
        <IcBack onClick={() => navigate(-1)} />
        <Bar1 />
        <div />
      </article>
      <article className={styles.title}>
        <em>
          관심있는 금융상품
          <br /> 카테고리를 선택해주세요
        </em>
      </article>
      <article className={styles.onboarding__textboxs}>
        <button
          type="button"
          className={`${styles.onboarding__textbox} ${selectCategory === "저축상품" ? styles.active : ""}`}
          onClick={() => handleCategorySelect("저축상품")}
        >
          <div className={styles.text}>🪙 저축상품</div>
          <div className={`${styles.text} ${styles.small}`}>
            상품은 예금 &#8729; 적금 &#8729; 파킹 &#8729; CMA가 있어요
          </div>
        </button>
        <button
          type="button"
          className={`${styles.onboarding__textbox} ${selectCategory === "투자상품" ? styles.active : ""}`}
          onClick={() => handleCategorySelect("투자상품")}
        >
          <div className={styles.text}>📈 투자상품</div>
          <div className={`${styles.text} ${styles.small}`}> 상품은...</div>
        </button>
      </article>
      <Link
        to="/recommend-onboarding/step2"
        className={`${styles.goBtn} ${isContinueActive ? styles.active : ""}`}
      >
        계속하기
      </Link>
      <Navbar />
    </section>
  );
};

export default Step1;
