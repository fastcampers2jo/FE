import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

const layout = () => (
  <div className={styles.main}><Outlet /></div>
);

export default layout;
