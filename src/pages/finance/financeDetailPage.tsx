import MainHomeBar from "components/homebar";
import { useLocation } from "react-router-dom";
import Navbar from "components/navber";
import styles from "./styles.module.scss";

const FinanceDetailPage = () => {
  const location = useLocation();
  const { product } = location.state;

  const stampListLength = Array.from({ length: 11 }, (_, i) => i);
  const trueStamp = Array.from({ length: product.stamp }, (_, i) => i);

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
              {product.totalAsset.toLocaleString()}
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
              <span>총 금리</span>2.2%
            </span>
          </div>
          <ul className={styles.finance_detail_page_main_rate_contents}>
            <li>
              <span>01</span>
              <div
                className={styles.finance_detail_page_main_rate_contents_text}
              >
                급여실적 또는
                <br />
                개인사업자 계좌 실적
                <br />
                보유 시
                <br />
                <button>자세히</button>
              </div>
              <div
                className={
                  styles.finance_detail_page_main_rate_contents_percent
                }
              >
                1%
              </div>
            </li>
            <li>
              <span>02</span>
              <div
                className={styles.finance_detail_page_main_rate_contents_text}
              >
                비대면 채널
                <br />
                이체 실적 보유 시
                <br />
                <button>자세히</button>
              </div>
              <div
                className={
                  styles.finance_detail_page_main_rate_contents_percent
                }
              >
                1%
              </div>
            </li>
            <li>
              <span>03</span>
              <div
                className={styles.finance_detail_page_main_rate_contents_text}
              >
                마케팅 동의시
                <br />
                <button>자세히</button>
              </div>
              <div
                className={
                  styles.finance_detail_page_main_rate_contents_percent
                }
              >
                0.2%
              </div>
            </li>
          </ul>
        </div>
      </main>
      <Navbar />
    </>
  );
};

export default FinanceDetailPage;
