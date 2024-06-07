import { LogoTop } from "components";
import Navbar from "components/navber";
import Tabs from "template/tabs";
import ProductCard from "template/productCard";
import FINANCE from "mockupData/finance";
import styles from "./styles.module.scss";

const Finance = () => {
  const TABS = [
    {
      name: "전체",
      value: "",
    },
    {
      name: "적금",
      value: "installment",
    },
    {
      name: "예금",
      value: "deposit",
    },
  ];

  return (
    <>
      <LogoTop />
      <section className={styles.section}>
        <article className={styles.section01}>
          <p>
            <span>하진님이 모은 상품은</span>
          </p>
          <Tabs lists={TABS} />
        </article>
      </section>
      <main className={styles.main}>
        <ProductCard
          cardTitle="예금"
          lists={FINANCE[0]}
          listsCount={3}
        />
      </main>
      <Navbar />
    </>
  );
};

export default Finance;
