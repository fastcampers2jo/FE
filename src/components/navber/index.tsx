import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IcFit, IcHome, IcCard, IcLounge, IcLank } from "assets";
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
    { name: "홈", path: "/", src: <IcHome />, link: "home" },
    { name: "랭킹", path: "/ranking/:id", src: <IcLank />, link: "ranking" },
    { name: "맞춤상품", path: "/recommend", src: <IcFit />, link: "goods" },
    { name: "나의금융", path: "/finance", src: <IcCard />, link: "finance" },
    { name: "라운지", path: "/lounge", src: <IcLounge />, link: "lounge" },
  ];
  return (
    <div className={styles.navber}>
      {links.map((link) => (
        <button
          onClick={() => handlNave(link.path)}
          key={link.name}
          className={`${styles.button} ${location.pathname.includes(link.link) ? styles.active : ""}`}
        >
          {link.src}
          <p>{link.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
