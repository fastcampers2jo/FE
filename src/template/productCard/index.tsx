import { useTab } from "stores/useTab";
import styles from "./styles.module.scss";

interface IProductType {
  productType: string;
  productTitle: string;
  products: {
    title: string;
    bank: string;
  }[];
}

interface Prop {
  lists: IProductType;
  listsCount?: number;
}

const ProductCard = ({ lists, listsCount }: Prop) => {
  const { activeTab, setActiveTab } = useTab();
  const productListFilter = () =>
    listsCount ? lists.products.slice(0, listsCount) : lists.products;

  const moreProducts = (productType: string) => {
    setActiveTab(productType);
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_title}>
        <h3>
          {lists.productTitle}
          <span>총 {lists.products.length}개 상품 보유중</span>
        </h3>
        {!activeTab && (
          <button onClick={() => moreProducts(lists.productType)}>
            더보기
          </button>
        )}
      </div>
      <ul className={styles.product_card_list}>
        {productListFilter().map((list, i) => (
          <li
            key={i}
            className={!activeTab ? styles.all : ""}
          >
            <img
              className={styles.product_card_list_bank_logo}
              src="./src/assets/bank05.svg"
              alt={`${list.bank} 로고`}
            />
            <div className={styles.product_card_list_contents}>
              <h4>{list.bank}</h4>
              <p>{list.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
