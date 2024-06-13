import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginPop } from "components";
import useAuth from "hooks/useAuth";
import { usePopup } from "stores/usePopup";
import { IcFit, IcHome, IcLounge, IcLank, IcCards } from "assets";
import styles from "./styles.module.scss";

const Navber = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginPopup, openLoginPopup } = usePopup();
  const { login } = useAuth();

  const handlNave = useCallback(
    (link: string) => {
      if (link === "/finance" || link === "/recommend-onboarding/main") {
        if (!login) return openLoginPopup();
      }
      navigate(`${link}`);
    },
    [login, navigate, openLoginPopup]
  );
  const links = [
    { name: "홈", path: "/", src: <IcHome />, link: "" },
    { name: "랭킹", path: "/ranking/1", src: <IcLank />, link: "ranking" },
    {
      name: "맞춤상품",
      path: "/recommend-onboarding/main",
      src: <IcFit />,
      link: "recommend",
    },
    { name: "나의금융", path: "/finance", src: <IcCards />, link: "finance" },
    { name: "라운지", path: "/lounge/1", src: <IcLounge />, link: "lounge" },
  ];
  return (
    <div className={styles.navber}>
      {links.map((link) => (
        <button
          onClick={() => handlNave(link.path)}
          key={link.name}
          className={`${styles.button} 
          ${
            (location.pathname.split("/")[1] === "search" &&
              link.name === "홈") ||
            (location.pathname.includes("recommend") &&
              link.name === "맞춤상품") ||
            (location.pathname.split("/")[1] === "" && link.name === "홈") ||
            (location.pathname.split("/")[1] === "board" &&
              link.name === "라운지") ||
            location.pathname.split("/")[1] === link.link
              ? styles.active
              : ""
          }`}
        >
          {link.src}
          <p>{link.name}</p>
        </button>
      ))}
      {loginPopup && <LoginPop />}
    </div>
  );
};

export default Navber;
