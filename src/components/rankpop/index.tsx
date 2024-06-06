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
  const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    close();
  };
  return (
    <div className={styles.popupWrap}>
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
      <div
        className={styles.popupBg}
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => onClose(e)}
        role="button"
        tabIndex={0}
        aria-label="Close Popup"
      />
    </div>
  );
};

export default RankPop;
