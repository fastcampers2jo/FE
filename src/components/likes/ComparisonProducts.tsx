import { Link } from "react-router-dom";
import "./comparisonComponent.scss";

interface Description {
  id_description: number;
  description: string;
  rate: number;
  active: boolean;
}

interface TotalInterestProps {
  totalInterest1: number | string;
  totalInterest2: number | string;
  activeDescriptions1: Description[];
  activeDescriptions2: Description[];
  defRate1: number;
  defRate2: number;
  commaWithTotalAmount1: number | string;
  commaWithTotalAmount2: number | string;
  commaWithTotalInt1: number | string;
  commaWithTotalInt2: number | string;
}

const ComparisonProducts = ({
  defRate1,
  defRate2,
  activeDescriptions1,
  activeDescriptions2,
  totalInterest1,
  totalInterest2,
  commaWithTotalAmount1,
  commaWithTotalAmount2,
  commaWithTotalInt1,
  commaWithTotalInt2,
}: TotalInterestProps) => (
  <form className="mycomparison">
    <div className="mycomparison__title">Chak 비교해본</div>
    <div className="my__title">
      나의
      <div className="greenbar" />
      실수령액은
    </div>
    <div className="products__wrapped">
      <div className="products">
        <div className="product">
          {commaWithTotalAmount1} <div className="smallfont">원</div>
        </div>
      </div>
      <div className="products">
        <div className="product">
          {commaWithTotalAmount2} <div className="smallfont">원</div>
        </div>
      </div>
    </div>

    <div className="sub__title">나의 금리를 확인하세요!</div>

    <div className="my__checks__wrapped">
      <div className="my__checks">
        <div>{totalInterest1}%</div>

        <div className="my__check">
          <div className="checklist">기본</div>
          <div>{defRate1}%</div>
        </div>
        {activeDescriptions1.map((desc, index) => (
          <div className="my__check" key={index}>
            <div className="checklist">{desc.description}</div>
            <div>{desc.rate}%</div>
          </div>
        ))}
      </div>
      <div className="my__checks">
        <div>{totalInterest2}%</div>

        <div className="my__check">
          <div className="checklist">기본</div>
          <div>{defRate2}%</div>
        </div>
        {activeDescriptions2.map((desc, index) => (
          <div className="my__check" key={index}>
            <div className="checklist">{desc.description}</div>
            <div>{desc.rate}%</div>
          </div>
        ))}
      </div>
    </div>

    <div className="sub__title">이자 </div>
    <div className="my__interests">
      <div className="my__interest">
        {commaWithTotalInt1} <span>원</span>
      </div>
      <div className="my__interest">
        {commaWithTotalInt2} <span>원</span>
      </div>
    </div>
    <div className="productdetail__more">
      <Link to="/productdetail/:id" className="detail">
        자세히보기
      </Link>
      <Link to="/productdetail/:id" className="detail">
        자세히보기
      </Link>
    </div>
  </form>
);

export default ComparisonProducts;
