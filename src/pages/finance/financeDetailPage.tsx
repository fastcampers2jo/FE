import MainHomeBar from "components/homebar";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

const FinanceDetailPage = () => {
  const location = useLocation();
  const { product } = location.state;

  const numbers = Array.from({ length: 11 }, (_, i) => i);

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
            3회 남았습니다
          </span>
        </div>
        <ul className={styles.finance_detail_page_stamp}>
          {numbers.map((list, i) => (
            <li key={i}>{list + 1}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FinanceDetailPage;
