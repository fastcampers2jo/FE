import { IcClose } from "assets";
import styles from "./styles.module.scss";

interface IRankPop {
  children: React.ReactNode;
  title: string;
  close: () => void;
  height?: string;
}

const RankPop = ({ close, children, title, height }: IRankPop) => {
  const heights = [styles.popup, height && styles[`height${height}`]]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={styles.popupBg}>
      <div className={heights}>
        <div className={styles.popupTop}>
          <span />
          {title}
          <button type="button" onClick={close}>
            <IcClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default RankPop;
