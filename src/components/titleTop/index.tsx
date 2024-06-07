import { useCallback } from "react";
import { IcBack, IcBell, IcMypage, IcSet } from "assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

interface ITop {
  children: string;
}

const TitleTop = ({ children }: ITop) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onNavigate = useCallback(() => {
    if (location.pathname.includes("/board")) return navigate("/lounge");
    if (location.pathname.includes("/searchboard")) return navigate("/board/1");
    navigate(-1);
  }, [children]);
  return (
    <div className={styles.loginTop}>
      <button onClick={onNavigate}>
        <IcBack />
      </button>
      <h2>{children}</h2>
      <div className={styles.mypage}>
        {children !== "알림" && children !== "마이페이지" && (
          <>
            <Link to="/alarm">
              <IcBell />
            </Link>
            <Link to="/mypage">
              <IcMypage />
            </Link>
          </>
        )}
        {children === "알림" && (
          <Link to="/mypage">
            <IcMypage />
          </Link>
        )}
        {children === "마이페이지" && (
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
