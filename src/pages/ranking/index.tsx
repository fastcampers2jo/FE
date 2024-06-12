import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { bankAll, bankBest } from "utils/api";
import { useRank } from "stores/useRank";
import { Navber, LogoTop, BankBox, RankPop, Button, Fab } from "components";
import { bankList, navs } from "mock";
import { IcBankCheck, IcBankDelet, IcRanking } from "assets";
import styles from "./styles.module.scss";

const Ranking = () => {
  const { bankPopup, openBankPopup, closeBankPopup } = useRank();
  const location = useLocation();
  const [tap, setTap] = useState(1);
  const [age, setAge] = useState("전체");
  const [time, setTime] = useState("실시간");
  const tapName = ["전체 베스트", "은행별 베스트"];
  const [bank, setBank] = useState<{ emun: string; name: string }[]>([]);
  const [seletBank, setSeltBank] = useState<boolean>(false);
  const param = useParams();
  const emuns = bank.map((v) => v.emun);
  const { data: list } = useQuery({
    queryKey: [
      "bankall",
      param.id === "1" ? "DEPOSIT" : "SAVING",
      param.id === "1" ? 10 : 20,
    ],
    queryFn: bankAll,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  const { data: best } = useQuery({
    queryKey: [
      "bankBest",
      param.id === "1" ? "DEPOSIT" : "SAVING",
      emuns,
      param.id === "1" ? 10 : 20,
    ],
    queryFn: bankBest,
    enabled: seletBank,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  const onTap = useCallback(
    (num: number) => {
      setTap(num);
      if (tap !== num) {
        setAge("전체");
        setTime("실시간");
        setBank([]);
      }
    },
    [tap]
  );
  const onBank = useCallback(
    (emun: string, name: string) => {
      if (bank.some((Emuns) => Emuns.name === name)) {
        setBank(bank.filter((id) => id.name !== name));
      } else {
        setBank([...bank, { emun, name }]);
      }
    },
    [bank]
  );
  const onSeletBank = useCallback(() => {
    closeBankPopup();
    setSeltBank(true);
  }, [bank]);
  const onBankDelet = useCallback(
    (e: React.MouseEvent<HTMLOrSVGElement>) => {
      e.stopPropagation();
      setBank([]);
    },
    [bank]
  );
  useEffect(() => {
    setBank([]);
  }, [param.id]);

  return (
    <>
      <LogoTop />
      <section>
        <Link to="/recommend-onboarding/main" className={styles.banner}>
          <p>
            나에게 ChaK 맞는
            <br /> <span>상품 추천</span> 받으러가기
            <IcRanking />
          </p>
        </Link>
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
          <div className={styles.tapWrap}>
            <div className={styles.tap}>
              {tapName.map((name, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => onTap(i + 1)}
                  className={`${tap === i + 1 && styles.tapActive}`}
                >
                  {name}
                </button>
              ))}
            </div>
            {tap === 2 && (
              <button
                type="button"
                onClick={openBankPopup}
                className={styles.bankSelet}
              >
                {bank.length > 0 ? `${bank.length}개 선택` : "은행 선택"}
                {bank.length > 0 && <IcBankDelet onClick={onBankDelet} />}
              </button>
            )}
          </div>
          {tap === 1 && (
            <BankBox
              data={list?.body}
              age={age}
              setAge={setAge}
              time={time}
              setTime={setTime}
            />
          )}
          {tap === 2 && (
            <BankBox
              data={best ? best.body : list?.body}
              age={age}
              tap={tap}
              bank={emuns}
              setAge={setAge}
              time={time}
              setTime={setTime}
            />
          )}
        </article>
      </section>
      <Navber />
      {bankPopup && (
        <RankPop title="은행 선택" height="638" close={closeBankPopup}>
          <div className={styles.bankWrap}>
            {bankList.map((banks) => (
              <button
                key={banks.name}
                onClick={() => onBank(banks.Enum, banks.name)}
                className={
                  bank.some((item) => item.name === banks.name) ? styles.on : ""
                }
                type="button"
              >
                {bank.some((item) => item.name === banks.name) && (
                  <IcBankCheck />
                )}
                <div>{banks.src}</div>
                <span>{banks.name}</span>
              </button>
            ))}
            {bank.length > 0 && (
              <div className={styles.bankBtn}>
                <Button type="button" disabled={false} onClick={onSeletBank}>
                  {String(bank.length)}개 은행상품 결과보기
                </Button>
              </div>
            )}
          </div>
        </RankPop>
      )}
      <Fab />
    </>
  );
};

export default Ranking;
