import { LogoTop } from "components";
import "./recommendation.scss";
import { Link } from "react-router-dom";
import CategoryWhite from "components/category/white";
import Navbar from "components/navber";
import { FloatingHeart, IcSmallLove, IcSmallNotLove } from "assets";
import { useState } from "react";

/// / 기본 맞춤추천 페이지 (추천받은 상품이 있는경우)////

const RecommendationPage = () => {
  const [isLikeActive, setIsLikeActive] = useState<boolean[]>([]);

  const onLike = (index: number) => {
    setIsLikeActive((prevState) => {
      const newLikeActive = [...prevState];
      newLikeActive[index] = !newLikeActive[index];
      return newLikeActive;
    });
  };

  return (
    <form className="recommendationpage">
      <LogoTop />

      <Link to="/likelist/:id">
        <FloatingHeart className="floating__heart" />
      </Link>
      <div className="recommendationpage__title">
        하진님에게 <span className="bold">추천</span>하는
        <span className="bold">Chak 상품</span>
      </div>
      <CategoryWhite pageUrlName="recommend" />

      <div className="products__likelist__wrapped ">
        <div className="product__likelist recommend">
          <div className="product__infos">
            <Link to="/productdetail/:id">
              <div className="product__info">
                <div className="product__img" />
                <div className="product__title">
                  <span className="product__bankname">우리은행</span>
                  <span className="product__name">우리 첫거래우대 정기예금</span>
                  <span className="product__property">특판</span>
                  <span className="product__property">첫거래우대</span>
                  <span className="product__property">방문판매</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="product__interest">
            <div className="interest__info">
              <span className="interest__max">최고 4.5%</span>
              <span className="interest__def">기본 4.5%</span>
            </div>
            <button type="button" onClick={() => onLike(0)}>
              {isLikeActive[0] ? (
                <IcSmallLove className="recommend__icons__heart" />
              ) : (
                <IcSmallNotLove className="recommend__icons__heart" />
              )}
            </button>
          </div>
        </div>
        <div className="product__likelist recommend">
          <div className="product__infos">
            <Link to="productdetail/:id">
              <div className="product__info">
                <div className="product__img" />
                <div className="product__title">
                  <span className="product__bankname">우리은행</span>
                  <span className="product__name">우리 첫거래우대 정기예금</span>
                  <span className="product__property">특판</span>
                  <span className="product__property">첫거래우대</span>
                  <span className="product__property">방문판매</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="product__interest">
            <div className="interest__info">
              <span className="interest__max">최고 4.5%</span>
              <span className="interest__def">기본 4.5%</span>
            </div>
            <button type="button" onClick={() => onLike(0)}>
              {isLikeActive[0] ? (
                <IcSmallLove className="recommend__icons__heart" />
              ) : (
                <IcSmallNotLove className="recommend__icons__heart" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Link to="/recommend-onboarding/main" className="recommendation--btn">
        새로운 상품 추천받기
      </Link>
      <Navbar />
    </form>
  );
};

export default RecommendationPage;
