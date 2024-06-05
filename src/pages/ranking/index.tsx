import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRank } from "stores/useRank";
import { Navber, LogoTop, BankBox, RankPop, Button, Fab } from "components";
import { fakedata, bankList, navs } from "mock";
import {
  IcBankCheck,
  IcBankDelet,
} from "assets";
import styles from "./styles.module.scss";

const Ranking = () => {
  const { bankPopup, openBankPopup, closeBankPopup } = useRank();
  const location = useLocation();
  const [tap, setTap] = useState(1);
  const [age, setAge] = useState("전체");
  const [time, setTime] = useState("실시간");
  const tapName = ["전체 베스트", "은행별 베스트"];
  const onTap = useCallback(
    (num: number) => {
      setTap(num);
      if (tap !== num) {
        setAge("전체");
        setTime("실시간");
      }
    },
    [tap]
  );
  const [bank, setBank] = useState<{ name: string; id: number }[]>([]);
  const [banklength, setBanklength] = useState(0);
  const onBank = useCallback(
    (bankName: string, i: number) => {
      if (bank.some((name) => name.name === bankName)) {
        setBank(bank.filter((name) => name.name !== bankName));
      } else {
        setBank([...bank, { name: bankName, id: i }]);
      }
    },
    [bank]
  );
  const onSeletBank = useCallback(() => {
    closeBankPopup();
    setBanklength(bank.length);
  }, [bank]);
  const onBankDelet = useCallback(
    (e: React.MouseEvent<HTMLOrSVGElement>) => {
      e.stopPropagation();
      setBank([]);
      setBanklength(0);
    },
    [bank, banklength]
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
                {banklength > 0 ? `${banklength}개 선택` : "은행 선택"}
                {banklength > 0 && <IcBankDelet onClick={onBankDelet} />}
              </button>
            )}
          </div>
          {tap === 1 && (
            <BankBox
              data={fakedata}
              age={age}
              setAge={setAge}
              time={time}
              setTime={setTime}
            />
          )}
          {tap === 2 && (
            <BankBox
              data={fakedata}
              age={age}
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
            {bankList.map((banks, i) => (
              <button
                key={banks.name}
                onClick={() => onBank(banks.name, i)}
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
