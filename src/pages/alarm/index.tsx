import { IcAlarmFinance } from "assets";
import { TitleTop } from "components";
import styles from "./styles.module.scss";

const Alarm = () => (
  <section className={styles.section}>
    <TitleTop>알람</TitleTop>
    <button className={styles.article}>
      <div className={styles.imgbox}>
        <img src={IcAlarmFinance} alt="금융상품" />
      </div>
      <div className={styles.textbox}>
        <p>
          &quot;KDB 정기예금은 어떠세요&quot; 글에 고양이최고님이 댓글을
          달았어요.
        </p>
        <span>1시간 전</span>
      </div>
    </button>
  </section>
);

export default Alarm;
