import { LogoTop } from "components";
import Navbar from "components/navber";
import Tabs from "template/tabs";
import ProductCard from "template/productCard";
import FINANCE from "mockupData/finance";
import { useTab } from "stores/useTab";
import styles from "./styles.module.scss";

const Finance = () => {
  const { activeTab } = useTab((state) => state);
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

  const listFilter = () => {
    if (!activeTab) {
      return FINANCE;
    }
    return FINANCE.filter((item) => item.productType === activeTab);
  };

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
        {listFilter().map((product, i) => (
          <ProductCard
            key={i}
            lists={product}
            listsCount={!activeTab ? 3 : 0}
          />
        ))}
      </main>
      <Navbar />
    </>
  );
};

export default Finance;
