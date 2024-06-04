import { Category } from "components";
import "./recommendation.scss";
import { Link } from "react-router-dom";

/// / 기본 맞춤추천 페이지 (추천받은 상품이 있는경우)////

const RecommendationPage = () => (
  <form className="recommendationpage">
    <Category pagename="맞춤추천" />
    <div className="recommendationpage__title">
      하진님에게 <span className="bold">추천</span>하는
      <span className="bold">Chak 상품</span>
    </div>
    <Link to="/recommend-onboarding/main" className="recommendation--btn">
      새로운 상품 추천받기
    </Link>
  </form>
);

export default RecommendationPage;
