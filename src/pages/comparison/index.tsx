import { Category } from "components";
import { Link } from "react-router-dom";

/// 찜 보관 페이지, 비교하기 히스토리 페이지 ///
const ComparisonPage = () => (
  <form>
    <Category pagename="찜보관(비교하기 히스토리)페이지" />
    <div className="products__comparison__list">
      <div className="products__category">
        <div className="union">
          <div className="cir" />
        </div>
        <span>예금상품</span>
      </div>
      <div className="products__comparison">
        <div className="product__comparison">
          <div className="product">
            <div className="product__img" />
            <div className="product__info">
              <div className="product__bank">KDB 산업은행</div>
              <div className="product__title">KDB 기업정기예금 </div>
            </div>
          </div>
          <div className="product">
            <div className="product__img" />
            <div className="product__info">
              <div className="product__bank">KDB 산업은행</div>
              <div className="product__title">KDB 정기예금 </div>
            </div>
          </div>
        </div>
        <Link to="/comparisondetail" className="comparison--btn">
          상품 비교 보러가기
        </Link>
      </div>
      <div className="products__comparison">
        <div className="product__comparison">
          <div className="product">
            <div className="product__img" />
            <div className="product__info">
              <div className="product__bank">KDB 산업은행</div>
              <div className="product__title">KDB 기업정기예금 </div>
            </div>
          </div>
          <div className="product">
            <div className="product__img" />
            <div className="product__info">
              <div className="product__bank">KDB 산업은행</div>
              <div className="product__title">KDB 정기예금 </div>
            </div>
          </div>
        </div>
        <Link to="/comparisondetail" className="comparison--btn">
          상품 비교 보러가기
        </Link>
      </div>

      <div className="products__category">
        <div className="union">
          <div className="cir" />
        </div>
        <span>적금상품</span>
      </div>
      <div className="products__comparison">
        <div className="product__comparison">
          <div className="product">
            <div className="product__img" />
            <div className="product__info">
              <div className="product__bank">KDB 산업은행</div>
              <div className="product__title">KDB 기업정기예금 </div>
            </div>
          </div>
          <div className="product">
            <div className="product__img" />
            <div className="product__info">
              <div className="product__bank">KDB 산업은행</div>
              <div className="product__title">KDB 정기예금 </div>
            </div>
          </div>
        </div>
        <Link to="/comparisondetail" className="comparison--btn">
          상품 비교 보러가기
        </Link>
      </div>
    </div>
  </form>
);

export default ComparisonPage;
