import { IcPrep } from "assets";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Prep = () => (
  <section className={styles.section}>
    <IcPrep />
    <em>페이지를 준비중입니다</em>
    <p>
      현재 페이지를 준비 중이에요! <br /> 조금만 기다려 주세요. 감사합니다.
    </p>
    <Link to="/">홈으로 가기</Link>
  </section>
);

export default Prep;
