import { EmptyHeart } from "assets";
import { Link } from "react-router-dom";

const LikePopUp = () => (
  <section className="likepopup">
    <form className="status-bar">
      <div className="home-indicator" />
    </form>
    <form className="liketpopup__section">
      <div className="liketpopup__section-1">
        <div className="like-add-text">찜하기 상품이 담겼습니다</div>
        <div className="product__infos">
          <div className="product__info">
            <div className="product__img" />
            <div className="product__title">
              <span> 우리 첫거래우대</span>
              <span>정기예금 </span>
            </div>
            <div className="product__interest">4.5%</div>
          </div>
          <Link to="/likelist/:id" className="product__comparison">
            비교하러 가기 &gt;
            <p />
          </Link>
        </div>
      </div>
      <div className="likepopup__section-2">
        <div className="like-add-text section-2">이 상품과 비슷한 다른 상품 찜하기</div>
        <div className="frame56__others">
          <div className="other">
            <div className="frame56__product">
              <div className="frame56__img section-2" />
              <div className="other__title">
                <span> 기업은행</span>
                <span>정기 예금 </span>
              </div>
            </div>
            <div className="likes__toggle">
              <div className="other-interest">
                <span>최고(기본) 금리</span>
                <div className="other-interest__text">7(2.5)%</div>
              </div>
              <EmptyHeart className="likes--btn" />

            </div>
          </div>
          <div className="other">
            <div className="frame56__product">
              <div className="frame56__img section-2" />
              <div className="other__title">
                <span> 기업은행</span>
                <span>정기 예금 </span>
              </div>
            </div>
            <div className="likes__toggle">
              <div className="other-interest">
                <span>최고(기본) 금리</span>
                <div className="other-interest__text">7(2.5)%</div>
              </div>
              <EmptyHeart className="likes--btn" />
            </div>
          </div>
          <div className="other">
            <div className="frame56__product">
              <div className="frame56__img section-2" />
              <div className="other__title">
                <span> 기업은행</span>
                <span>정기 예금 </span>
              </div>
            </div>
            <div className="likes__toggle">
              <div className="other-interest">
                <span>최고(기본) 금리</span>
                <div className="other-interest__text">7(2.5)%</div>
              </div>
              <EmptyHeart className="likes--btn" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
);

export default LikePopUp;
