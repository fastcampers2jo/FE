import { IcBack } from "assets";
import { useNavigate } from "react-router-dom";
import "./category.scss";

const productCategory = [
  { name: "전체" },
  { name: "예금" },
  { name: "적금" },
  { name: "파킹" },
  { name: "CMA" },
  { name: "ISA" },
  { name: "연금" },
  { name: "카드" },
];

interface ICategory {
  pagename: string;
}

const Category = ({ pagename }: ICategory) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="statusbar">
        <IcBack className="cagegory" onClick={() => navigate(-1)} />
        status bar {pagename}
      </div>

      <div className="product__categories">
        {productCategory.map((category, i) => (
          <div className="product__category" key={i}>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </header>
  );
};
export default Category;
