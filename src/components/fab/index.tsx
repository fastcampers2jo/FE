import { useNavigate } from "react-router-dom";
import { IcFAB } from "assets";
import styles from "./styles.module.scss";

const Fab = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.fab}>
      <IcFAB onClick={() => navigate("/likelist/1")} />
    </div>
  );
};

export default Fab;
