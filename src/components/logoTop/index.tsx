import { Link } from "react-router-dom";
import { IcBell, IcLogo, IcMypage } from "assets";
import styles from "./styles.module.scss";

const LogoTOP = () => (
  <header className={styles.header}>
    <Link to="/">
      <IcLogo />
    </Link>
    <div>
      <Link to="/alarm">
        <IcBell />
      </Link>
      <Link to="/mypage">
        <IcMypage />
      </Link>
    </div>
  </header>
);

export default LogoTOP;
