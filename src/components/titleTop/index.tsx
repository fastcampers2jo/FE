import { IcBack, IcBell, IcSet } from "assets";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

interface ITop {
  children: string;
}

const TitleTop = ({ children }: ITop) => {
  const navigate = useNavigate();
  return (
    <div className={styles.loginTop}>
      <button onClick={() => navigate(-1)}>
        <IcBack />
      </button>
      <h2>{children}</h2>
      <div className={styles.mypage}>
        <Link to="/alarm">
          <IcBell />
        </Link>
        <Link to="/">
          <IcSet />
        </Link>
      </div>
    </div>
  );
};

export default TitleTop;
