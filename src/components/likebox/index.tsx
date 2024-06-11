import { X } from "assets";
import "./likebox.scss";

interface ILikebox {
  texts: string;
  children: string[];
  classname: string;
  onRemove: (productName: string) => void;
}

const Likebox = ({ children, texts, classname, onRemove }: ILikebox) => (
  <div className="product__comparison--toggle">
    <div className={`add__product__text ${classname}`}>{texts}</div>
    <div className="product__select">
      <div className="add__products">
        {/* 두 개 이상의 상품이 선택된 경우 */}
        {children.length > 1 ? (
          children.map((productName, index) => (
            <div key={index} className="add__product">
              <span>{productName}</span>
              <X className="product__delete" onClick={() => onRemove(productName)} />
            </div>
          ))
        ) : (
          // 하나의 상품만 선택된 경우
          <>
            {children.map((productName, index) => (
              <div key={index} className="add__product">
                <span>{productName}</span>
                <X className="product__delete" onClick={() => onRemove(productName)} />
              </div>
            ))}
            {/* 공란으로 둘 두 번째 add__product 요소 */}
            <div className="add__product" style={{ visibility: "hidden" }} />
          </>
        )}
      </div>
    </div>
  </div>
);

export default Likebox;
