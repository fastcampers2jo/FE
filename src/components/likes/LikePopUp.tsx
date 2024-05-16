import { Link } from "react-router-dom";

interface ArrowProps {
  className?: string;
}

export const Arrow = ({ className }: ArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="10"
    viewBox="0 0 12 15"
    fill="none"
    className={`arrow ${className}`}
  >
    <path d="M10.6445 1.69922L2.64453 7.69922L10.6445 13.6992" stroke="gray" strokeWidth="1" />
  </svg>
);

const LikePopUp = () => (
  <section className="likepopup">
    <form className="status-bar">
      <div className="home-indicator" />
    </form>
    <form className="liketpopup__section">
      <div className="liketpopup__section-1">
        <div className="like-add-text">찜하기 상품이 담겼습니다</div>
        <div className="frame56__product">
          <div className="product__info">
            <div className="frame56__img" />
            <div className="frame56__title">
              <span> 우리 첫거래우대</span>
              <span>정기예금 </span>
            </div>
            <div className="frame56__interest">4.5%</div>
          </div>
          <Link to="/likelist" className="frame56__comparison">
            비교하러 가기
            <p />
            <Arrow className="likepopup" />
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
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path
                  d="M14.6651 8.51786L10.5441 12.9291C9.42413 14.1279 7.52323 14.1279 6.40327 12.9291L2.28228 8.51786C0.572573 6.68775 0.572573 3.72055 2.28228 1.89044C3.99199 0.0603296 6.76398 1.33425 8.47368 3.16436C10.1834 1.33425 12.9554 0.0603296 14.6651 1.89044C16.3748 3.72055 16.3748 6.68775 14.6651 8.51786Z"
                  stroke="#575757"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="likes--btn"
                />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path
                  d="M14.6651 8.51786L10.5441 12.9291C9.42413 14.1279 7.52323 14.1279 6.40327 12.9291L2.28228 8.51786C0.572573 6.68775 0.572573 3.72055 2.28228 1.89044C3.99199 0.0603296 6.76398 1.33425 8.47368 3.16436C10.1834 1.33425 12.9554 0.0603296 14.6651 1.89044C16.3748 3.72055 16.3748 6.68775 14.6651 8.51786Z"
                  stroke="#575757"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="likes--btn"
                />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path
                  d="M14.6651 8.51786L10.5441 12.9291C9.42413 14.1279 7.52323 14.1279 6.40327 12.9291L2.28228 8.51786C0.572573 6.68775 0.572573 3.72055 2.28228 1.89044C3.99199 0.0603296 6.76398 1.33425 8.47368 3.16436C10.1834 1.33425 12.9554 0.0603296 14.6651 1.89044C16.3748 3.72055 16.3748 6.68775 14.6651 8.51786Z"
                  stroke="#575757"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="likes--btn"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
);

export default LikePopUp;
