import { Fragment, useEffect, useState } from "react";
import MainHomeBar from "components/homebar";
import { useLocation } from "react-router-dom";
import Navbar from "components/navber";
import styles from "./styles.module.scss";

const FinanceDetailPage = () => {
  const location = useLocation();
  const { product } = location.state;

  const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);
  const [rateSum, setRateSum] = useState(0);

  const MYRATELIST = [
    {
      text: "급여실적 또는\n개인사업자 계좌 실적\n보유 시",
      percentage: 1,
    },
    {
      text: "비대면 채널\n이체 실적 보유 시",
      percentage: 1,
    },
    {
      text: "마케팅 동의시",
      percentage: 0.2,
    },
  ];

  useEffect(() => {
    const calculateSum = () => {
      const total = checkedIndexes.reduce(
        (acc, index) => acc + MYRATELIST[index].percentage,
        0
      );
      setRateSum(total);
    };

    calculateSum();
  }, [checkedIndexes]);

  const stampListLength = Array.from({ length: 11 }, (_, i) => i);
  const trueStamp = Array.from({ length: product.stamp }, (_, i) => i);

  const rateChecked = (index: number) => {
    setCheckedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <>
      <MainHomeBar pagename="나의 상품" />
      <section className={styles.finance_detail_page}>
        <div className={styles.finance_detail_page_title}>
          <span className={styles.finance_detail_page_title_text}>
            <img
              src={product.bankLogo}
              alt={`${product.bank} 로고`}
            />
            <span>{product.bank}</span>
            <span> {product.title}</span>
          </span>
          <span className={styles.finance_detail_page_title_cnt}>
            {stampListLength.length - product.stamp}회 남았습니다
          </span>
        </div>
        <ul className={styles.finance_detail_page_stamp}>
          {trueStamp.map((list, i) => (
            <li
              key={i}
              className={
                i === trueStamp.length - 1 ? styles.onCurrentStamp : ""
              }
            >
              {list + 1}
              <img
                src="/src/assets/greendog.svg"
                alt=""
              />
            </li>
          ))}
          {Array.from(
            { length: stampListLength.length - trueStamp.length },
            (_, i) => i
          ).map((empty, j) => (
            <li key={j}>{empty + (trueStamp.length + 1)}</li>
          ))}
        </ul>
        <div className={styles.finance_detail_page_total_asset}>
          <h3>
            지금까지 <span /> 모인 자산은
          </h3>
          <h4>
            총 {product.totalAsset.toLocaleString()}
            <span className={styles.won}>원</span>
            <span>세전</span>
          </h4>
        </div>
      </section>
      <main className={styles.finance_detail_page_main}>
        <div className={styles.finance_detail_page_main_payments}>
          <div>
            <div>
              {(product.totalAsset * (rateSum / 100)).toLocaleString()}
              <span className={styles.won}>원</span>
            </div>
            <div>예상누적 이자</div>
          </div>
          <div>
            <div>
              {product.monthlyPayment.toLocaleString()}
              <span className={styles.won}>원</span>
            </div>
            <div>매달 납입금</div>
          </div>
        </div>
        <div className={styles.finance_detail_page_main_rate}>
          <div className={styles.finance_detail_page_main_rate_title}>
            나의 금리
            <span>
              <span>총 금리</span>
              {rateSum}%
            </span>
          </div>
          <ul className={styles.finance_detail_page_main_rate_contents}>
            {MYRATELIST.map((list, k) => (
              <li key={k}>
                <span>0{k + 1}</span>
                <div
                  className={styles.finance_detail_page_main_rate_contents_text}
                >
                  {list.text.split("\n").map((line, l) => (
                    <Fragment key={l}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                  <button>자세히</button>
                </div>
                <div
                  className={`${styles.finance_detail_page_main_rate_contents_percent} ${checkedIndexes.includes(k) && styles.checked}`}
                >
                  {list.percentage}%
                  <div
                    className={
                      styles.finance_detail_page_main_rate_contents_percent_switch
                    }
                  >
                    <input
                      type="checkbox"
                      id={`switch${k}`}
                      defaultChecked={checkedIndexes.includes(k)}
                      onClick={() => rateChecked(k)}
                    />
                    <label htmlFor={`switch${k}`}>Toggle</label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Navbar />
    </>
  );
};

export default FinanceDetailPage;
