import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Fit, Finance, Lank, Lounge, Home } from "assets";
import styles from "./styles.module.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handlNave = useCallback(
    (link: string) => {
      navigate(`${link}`);
    },
    [navigate]
  );
  const links = [
    { name: "홈", path: "/", img: <Home /> },
    { name: "랭킹", path: "/login", img: <Lank /> },
    { name: "맞춤상품", path: "/goods", img: <Fit /> },
    { name: "나의금융", path: "/finance", img: <Finance /> },
    { name: "라운지", path: "/lounge", img: <Lounge /> },
  ];
  return (
    <div className={styles.navber}>
      {links.map((link) => (
        <button
          onClick={() => handlNave(link.path)}
          key={link.name}
          className={`${styles.button} ${location.pathname === link.path ? styles.active : ""}`}
        >
          {link.img}
          <p>{link.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
