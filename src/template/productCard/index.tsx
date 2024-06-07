import styles from "./styles.module.scss";

interface IProductType {
  productType: string;
  products: {
    title: string;
    bank: string;
  }[];
}

interface Prop {
  lists: IProductType;
  listsCount?: number;
  cardTitle: string;
}

const ProductCard = ({ lists, listsCount, cardTitle }: Prop) => (
  <div className={styles.product_card}>
    <div className={styles.product_card_title}>
      <h3>
        {cardTitle} <span>총 {lists.products.length}개 상품 보유중</span>
      </h3>
      <button>더보기 </button>
    </div>
    <ul className={styles.product_card_list}>
      {lists.products.slice(0, listsCount).map((list, i) => (
        <li key={i}>
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

export default ProductCard;
