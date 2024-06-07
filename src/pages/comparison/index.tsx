import MainHomeBar from "components/homebar";
import { Link, useLocation } from "react-router-dom";
import "./comparision.scss";
import { Category } from "components";

/// 찜 보관 페이지, 비교하기 히스토리 페이지 ///
const ComparisonPage = () => {
  const location = useLocation();
  const currentCategoryIndex = parseInt(location.pathname.split("/")[2], 10);

  return (
    <form>
      <MainHomeBar pagename="비교히스토리" />
      <Category pageUrlName="comparison" />
      <div className="products__comparison__list">
        {currentCategoryIndex === 1 && (
          <div className="products__comparison__category">
            <div className="union">
              <div className="cir" />
            </div>
            <span>예금상품</span>
          </div>
        )}
        <div className="comparisonpage__products__comparison">
          <div className="comparisonpage__product__comparison">
            <div className="comparisonpage__product">
              <div className="comparisonpage__product__img" />
              <div className="comparisonpage__product__info">
                <div className="comparisonpage__product__bank">KDB 산업은행</div>
                <div className="comparisonpage__product__title">KDB 기업정기예금 </div>
              </div>
            </div>
            <div className="comparisonpage__product">
              <div className="comparisonpage__product__img" />
              <div className="comparisonpage__product__info">
                <div className="comparisonpage__product__bank">KDB 산업은행</div>
                <div className="comparisonpage__product__title">KDB 기업정기예금 </div>
              </div>
            </div>
          </div>
          <Link to="detail" className="comparison--btn">
            상품 비교 보러가기
          </Link>
        </div>
        <div className="comparisonpage__products__comparison">
          <div className="comparisonpage__product__comparison">
            <div className="comparisonpage__product">
              <div className="comparisonpage__product__img" />
              <div className="comparisonpage__product__info">
                <div className="comparisonpage__product__bank">KDB 산업은행</div>
                <div className="comparisonpage__product__title">KDB 기업정기예금 </div>
              </div>
            </div>
            <div className="comparisonpage__product">
              <div className="comparisonpage__product__img" />
              <div className="comparisonpage__product__info">
                <div className="comparisonpage__product__bank">KDB 산업은행</div>
                <div className="comparisonpage__product__title">KDB 기업정기예금 </div>
              </div>
            </div>
          </div>
          <Link to="/comparisondetail" className="comparison--btn">
            상품 비교 보러가기
          </Link>
        </div>
        {currentCategoryIndex === 1 && (
          <div className="products__comparison__category">
            <div className="union">
              <div className="cir" />
            </div>
            <span>적금상품</span>
          </div>
        )}
        <div className="comparisonpage__products__comparison">
          <div className="comparisonpage__product__comparison">
            <div className="comparisonpage__product">
              <div className="comparisonpage__product__img" />
              <div className="comparisonpage__product__info">
                <div className="comparisonpage__product__bank">KDB 산업은행</div>
                <div className="comparisonpage__product__title">KDB 기업정기예금 </div>
              </div>
            </div>
            <div className="comparisonpage__product">
              <div className="comparisonpage__product__img" />
              <div className="comparisonpage__product__info">
                <div className="comparisonpage__product__bank">KDB 산업은행</div>
                <div className="comparisonpage__product__title">KDB 기업정기예금 </div>
              </div>
            </div>
          </div>
          <Link to="/comparisondetail" className="comparison--btn">
            상품 비교 보러가기
          </Link>
        </div>
        <div className="comparisonpage__products__comparison">
          <div className="comparisonpage__product__comparison">
            <div className="comparisonpage__product">
              <div className="comparisonpage__product__img" />
              <div className="comparisonpage__product__info">
                <div className="comparisonpage__product__bank">KDB 산업은행</div>
                <div className="comparisonpage__product__title">KDB 기업정기예금 </div>
              </div>
            </div>
            <div className="comparisonpage__product">
              <div className="comparisonpage__product__img" />
              <div className="comparisonpage__product__info">
                <div className="comparisonpage__product__bank">KDB 산업은행</div>
                <div className="comparisonpage__product__title">KDB 기업정기예금 </div>
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
};

export default ComparisonPage;
