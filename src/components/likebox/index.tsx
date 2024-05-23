import { X } from "assets";
import "./likebox.scss";

interface ILikebox {
  texts: string;
  children: string;
  classname: string;
}

const Likebox = ({ children, texts, classname }: ILikebox) => (
  <div className="product__comparison--toggle">
    <div className={`add__product__text ${classname}`}>{texts}</div>
    <div className="product__select">
      <div className="add__products">
        <div className="add__product">
          <span>{children}</span>
          <X className="product__delete" />
        </div>
        <div className="add__product">
          <span>{children}</span>
          <X className="product__delete" />
        </div>
      </div>
    </div>
  </div>
);

export default Likebox;
