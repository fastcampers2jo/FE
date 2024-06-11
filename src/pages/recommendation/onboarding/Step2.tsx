import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navber } from "components";
import useAuth from "hooks/useAuth";
import { useRecommend } from "stores/useRecommend";
import { IcBack, Bar2 } from "assets";
import styles from "../recommendation.module.scss";

const Step2 = () => {
  const [selectAge, setSelectAge] = useState("");
  const [isContinueActive, setIsContinueActive] = useState(false);
  const navigate = useNavigate();
  const { setAgeGroup, setAgeGroups } = useRecommend();
  const { login } = useAuth();
  const handleAgeSelect = (age: string, name:string) => {
    if (selectAge === age) {
      setSelectAge("");
      setIsContinueActive(false);
    } else {
      setSelectAge(age);
      setAgeGroup(age);
      setAgeGroups(name);
      setIsContinueActive(true);
    }
  };
  const age = [
    { name: "19세 이하", value: "group19under" },
    { name: "20-24세", value: "group2024" },
    { name: "25-29세", value: "group2529" },
    { name: "30-34세", value: "group3034" },
    { name: "35-39세", value: "group3539" },
    { name: "40-44세", value: "group4044" },
    { name: "45-49세", value: "group4549" },
    { name: "50세 이상", value: "group50up" },
  ];
  return (
    <section className={styles.section}>
      <article className={styles.statusbar}>
        <IcBack onClick={() => navigate(-1)} />
        <Bar2 />
        <div />
      </article>
      <article className={styles.title}>
        <em>{login?.body ? login.body.name : "고객"}님에 대해 알려주세요</em>
        <p>
          {login?.body ? login.body.name : "고객"}님의 또래 사용자들의
          <br /> 관심상품 정보를 제공해드려요!
        </p>
      </article>
      <article className={styles.ageInfo}>
        {age.map((ages) => (
          <button
            key={ages.value}
            type="button"
            className={`${selectAge === ages.value ? styles.activeAge : ""} ${styles.ageBtn}`}
            onClick={() => handleAgeSelect(ages.value, ages.name)}
          >
            {ages.name}
          </button>
        ))}
      </article>
      <Link
        to="/recommend-onboarding/step3"
        className={`${styles.goBtn} ${isContinueActive ? styles.active : ""}`}
      >
        계속하기
      </Link>
      <Navber />
    </section>
  );
};

export default Step2;
