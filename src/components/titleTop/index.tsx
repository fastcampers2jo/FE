import { IcBack, IcBell, IcMypage, IcSet } from "assets";
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
        {children === "알람" ? (
          <Link to="/mypage">
            <IcMypage />
          </Link>
        ) : (
          <>
            <Link to="/alarm">
              <IcBell />
            </Link>
            <Link to="/">
              <IcSet />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TitleTop;
