import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPop } from "components";
import { usePopup } from "stores/usePopup";
import useAuth from "hooks/useAuth";
import { IcFAB } from "assets";
import styles from "./styles.module.scss";

const Fab = () => {
  const navigate = useNavigate();
  const { loginPopup, openLoginPopup } = usePopup();
  const { login } = useAuth();

  const onBtn = useCallback(() => {
    if (!login) return openLoginPopup();
    navigate("/likelist/1");
  }, [login, navigate, openLoginPopup]);

  return (
    <div className={styles.fab}>
      <IcFAB onClick={onBtn} />
      {loginPopup && <LoginPop />}
    </div>
  );
};

export default Fab;
