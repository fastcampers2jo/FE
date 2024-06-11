import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecommend } from "stores/useRecommend";
import { Navber } from "components";
import { IcBack, Bar6 } from "assets";
import styles from "../recommendation.module.scss";

const Step6 = () => {
  const [selectMethod, setSelectMethod] = useState("");
  const [isContinueActive, setIsContinueActive] = useState(false);
  const navigate = useNavigate();
  const { setSavingType } = useRecommend();
  const handleMethodSelect = (method: string, name:string) => {
    if (selectMethod === method) {
      setSelectMethod("");
      setIsContinueActive(false);
    } else {
      setSelectMethod(method);
      setIsContinueActive(true);
      setSavingType(name);
    }
  };

  return (
    <section className={styles.section}>
      <article className={styles.statusbar}>
        <IcBack onClick={() => navigate(-1)} />
        <Bar6 />
        <div />
      </article>
      <article className={styles.title}>
        <em>
          어떤 저축 방식을 <br /> 선호하시나요?
        </em>
      </article>
      <section className={styles.textBoxWrap}>
        <button
          type="button"
          className={`onboarding__textbox ${selectMethod === "자유 저축" ? "active" : ""}`}
          onClick={() => handleMethodSelect("자유 저축", "F")}
        >
          <div className={styles.text}>💸 자유 저축</div>
          <div className={`${styles.text} ${styles.small}`}>
            원할 때마다 자유롭게 저축하고 싶어요
          </div>
        </button>
        <button
          type="button"
          className={`onboarding__textbox ${selectMethod === "정기 저축" ? "active" : ""}`}
          onClick={() => handleMethodSelect("정기 저축", "S")}
        >
          <div className={styles.text}>📅 정기 저축</div>
          <div className={`${styles.text} ${styles.small}`}>
            매달 일정 금액을 꾸준히 저축하고 싶어요
          </div>
        </button>
      </section>
      <Link
        to="/recommend/1"
        className={`${styles.goBtn} ${isContinueActive ? styles.active : ""}`}
      >
        계속하기
      </Link>
      <Navber />
    </section>
  );
};

export default Step6;
