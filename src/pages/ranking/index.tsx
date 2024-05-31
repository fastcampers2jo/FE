import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navber, LogoTop, BankBox } from "components";
import { fakedata } from "mock/handlers";
import { useRank } from "stores/useRank";
import styles from "./styles.module.scss";

const Ranking = () => {
  const location = useLocation();
  const [tap, setTap] = useState(1);
  const tapName = ["전체 베스트", "은행별 베스트"];
  const navs = [
    { name: "예금" },
    { name: "적금" },
    { name: "파킹" },
    { name: "CMA" },
    { name: "ISA" },
    { name: "연금" },
    { name: "카드" },
  ];
  const { setAfterAge, setBeforeAge, setBeforeTime, setAfterTime } = useRank();
  const onTap = useCallback(
    (num: number) => {
      setTap(num);
      if (tap !== num) {
        setAfterAge("전체");
        setBeforeAge("전체");
        setAfterTime("실시간");
        setBeforeTime("실시간");
      }
    },
    [tap]
  );
  return (
    <>
      <LogoTop />
      <section>
        <article className={styles.banner} />
        <nav className={styles.nav}>
          {navs.map((nav, i) => (
            <Link
              to={`/ranking/${i + 1}`}
              key={i}
              className={`${location.pathname.split("/")[2] === String(i + 1) ? styles.tapActive : ""}`}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <article className={styles.article}>
          <div className={styles.tap}>
            {tapName.map((name, i) => (
              <button
                type="button"
                onClick={() => onTap(i + 1)}
                className={`${tap === i + 1 && styles.tapActive}`}
              >
                {name}
              </button>
            ))}
          </div>
          {tap === 1 && <BankBox data={fakedata} />}
          {tap === 2 && <BankBox data={fakedata} />}
        </article>
      </section>
      <Navber />
    </>
  );
};

export default Ranking;
