import { Back, Bell, Setting } from "assets";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface ITop {
  children: string;
  icon?: string;
}

const titleTop = ({ children, icon }: ITop) => (
  <div className={styles.loginTop}>
    <Back onClick={() => window.history.back()} />
    <h2>{children}</h2>
    {icon === "mypage" ? (
      <div className={styles.mypage}>
        <Link to="/">
          <Bell />
        </Link>
        <Link to="/">
          <Setting />
        </Link>
      </div>
    ) : (
      <div className={styles.nobox} />
    )}
  </div>
);

export default titleTop;
