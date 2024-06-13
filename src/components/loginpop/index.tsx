import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePopup } from "stores/usePopup";
import styles from "./styles.module.scss";

const LoginPop = () => {
  const navigate = useNavigate();

  const { closeLoginPopup, loginPopup } = usePopup();
  const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    closeLoginPopup();
  };
  const onLogin = useCallback(() => {
    navigate("/login");
    closeLoginPopup();
  }, []);
  useEffect(() => {
    if (loginPopup) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [loginPopup]);
  return (
    <div className={styles.wrap}>
      <div className={styles.pop}>
        <div className={styles.popTop}>
          <p>로그인 후 이용이 가능합니다.</p>
          <em>
            로그인 페이지로 <span>이동</span>하시겠습니까?
          </em>
        </div>
        <div className={styles.popBtm}>
          <button type="button" onClick={closeLoginPopup}>
            아니오
          </button>
          <button type="button" onClick={onLogin}>
            네
          </button>
        </div>
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

export default LoginPop;
