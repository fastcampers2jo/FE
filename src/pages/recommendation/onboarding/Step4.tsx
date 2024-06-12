import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navber } from "components";
import { useRecommend } from "stores/useRecommend";
import { useNumber } from "hooks";
import { IcBack, Bar4, IcEdit } from "assets";
import styles from "../recommendation.module.scss";

const Step4 = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [number, onNumberChange] = useNumber("");
  const navigate = useNavigate();
  const { ageGroups, incomeGroups, setSavingGoal } = useRecommend();
  const handleInputFocus = () => {
    setIsInputActive(true);
  };
  const handleEditDelete = () => {
    setIsInputActive(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!Number.isNaN(Number(value.replace(/,/g, ""))) && Number(value.replace(/,/g, "")) >= 0) {
      setInputValue(value.replace(/,/g, "")); // 콤마 제거된 값 설정
      onNumberChange(e);
    }
  };
  useEffect(() => {
    setSavingGoal(Number(inputValue));
  }, [inputValue]);
  return (
    <section className={styles.section}>
      <article className={styles.statusbar}>
        <IcBack onClick={() => navigate(-1)} />
        <Bar4 />
        <div />
      </article>
      <article className={styles.title}>
        <em>
          매달 저축 목표금액도 <br />
          정해볼까요?
        </em>
        <div className={styles.tags}>
          <span className={styles.tag__options}>{ageGroups}</span>
          <span className={styles.tag__options}>{incomeGroups}</span>
        </div>
        <p>의 또래들은 월 평균 30만원을 저축해요!</p>
      </article>

      <section className={styles.myset__options}>
        <div className={styles.inputsection}>
          <input
            className={`${styles.inputbox} ${isInputActive ? styles.active : ""}`}
            type="text"
            placeholder="금액"
            min="0"
            inputMode="numeric"
            pattern="[0-9]*"
            onFocus={handleInputFocus}
            onBlur={handleEditDelete}
            onChange={handleChange}
            onWheel={(event) => (event.target as HTMLElement).blur()}
            value={number}
          />
          {!isInputActive && !inputValue && (
            <IcEdit className={styles.step4__icon__edit} />
          )}
          <span>만원</span>
        </div>
      </section>

      <Link
        to="/recommend-onboarding/step5"
        className={`${styles.goBtn} ${inputValue.length > 0 ? styles.active : ""}`}
      >
        계속하기
      </Link>
      <Navber />
    </section>
  );
};

export default Step4;
