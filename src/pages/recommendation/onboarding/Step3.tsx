import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navber } from "components";
import { IcBack, Bar3 } from "assets";
import { useRecommend } from "stores/useRecommend";
import useAuth from "hooks/useAuth";
import styles from "../recommendation.module.scss";

const Step3 = () => {
  const { login } = useAuth();
  const [selectPay, setSelectPay] = useState("");
  const [isContinueActive, setIsContinueActive] = useState(false);
  const { setIncomeGroup, setIncomeGroups } = useRecommend();
  const navigate = useNavigate();

  const handlePaySelect = (pay: string, name:string) => {
    if (selectPay === pay) {
      setSelectPay("");
      setIsContinueActive(false);
    } else {
      setSelectPay(pay);
      setIncomeGroup(pay);
      setIncomeGroups(name);
      setIsContinueActive(true);
    }
  };
  const pay = [
    { name: "100만원 이하", value: "income100down" },
    { name: "100만원 - 200만원", value: "income100200" },
    { name: "200만원 - 300만원", value: "income200300" },
    { name: "300만원 - 400만원", value: "income300400" },
    { name: "400만원 - 500만원", value: "income400500" },
    { name: "500만원 이상", value: "income500up" },
  ];
  return (
    <section className={styles.section2}>
      <article className={styles.statusbar}>
        <IcBack onClick={() => navigate(-1)} />
        <Bar3 />
        <div />
      </article>
      <article className={styles.title}>
        <em>
          {login?.body ? login.body.name : "고객"}님의
          <br /> 월소득이 궁금해요
        </em>
        <p>
          또래 사용자의 정보로 {login?.body ? login.body.name : "고객"}이 <br />
          쉽게 상품을 탐색할 수 있게 도와드려요!
        </p>
      </article>
      <section className={styles.textBoxWrap}>
        {pay.map((item) => (
          <button
            key={item.value}
            type="button"
            className={`${selectPay === item.value ? styles.active : ""}`}
            onClick={() => handlePaySelect(item.value, item.name)}
          >
            <p>{item.name}</p>
          </button>
        ))}
      </section>
      <Link
        to="/recommend-onboarding/step4"
        className={`${styles.goBtn2} ${isContinueActive ? styles.active : ""}`}
      >
        계속하기
      </Link>
      <Navber />
    </section>
  );
};

export default Step3;
