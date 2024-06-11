import { GreenDog } from "assets";
import { Link } from "react-router-dom";
import { Navber } from "components";
import useAuth from "hooks/useAuth";
import styles from "../recommendation.module.scss";

const OnboardingMain = () => {
  const { login } = useAuth();
  return (
    <section className={styles.sections}>
      <article className={styles.title}>
        <p>지금 추천을 위한 테스트를 받아보세요!</p>
        <em>
          오직 {login?.body ? login.body.name : "고객"}님을 위한 <br />
          Chak 상품이 기다려요!
        </em>
      </article>

      <div className={styles.circleWrapped}>
        <GreenDog className={styles.greendog} />
        <div className={styles.graycircles}>
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
        </div>
        <div className={styles.graycircles}>
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
          <div className={styles.graycir} />
        </div>
      </div>
      <Link
        to="/recommend-onboarding/step1"
        className={`${styles.goBtn} ${styles.active}`}
      >
        시작하기
      </Link>
      <Navber />
    </section>
  );
};

export default OnboardingMain;
