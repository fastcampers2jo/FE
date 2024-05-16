import { Arrow } from "components/likes/LikePopUp";
import "./likes.scss";

export const LogoImg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <circle cx="13" cy="12.5" r="12.5" fill="#D9D9D9" />
  </svg>
);

export const Checkbox = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M5.5 10L8.5 13L14.5 7M5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
      stroke="#898989"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Xbox = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M14.1668 5.83301L5.8335 14.1663M5.8335 5.83301L14.1668 14.1663"
      stroke="#898989"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LikeListPage = () => (
  <section className="likelistpage">
    <div className="statusbar"> status bar (찜한 금융상품 페이지)</div>
    <Arrow className="likelistpage" />
    <form className="page__title">찜한 금융상품</form>

    <div className="product__comparison">
      <div className="service__info">비교서비스는 같은 종목 상품 2개까지 사용할 수 있습니다.</div>
      <div className="product__categories">
        <div className="product__category">예금</div>
        <div className="product__category">적금</div>
        <div className="product__category">파킹</div>
        <div className="product__category">CMA</div>
        <div className="product__category">ISA</div>
        <div className="product__category">연금</div>
      </div>

      <div className="product__select">
        <div className="utils">
          <span>전체 3개</span>
          <span>전체삭제</span>
        </div>

        <div className="product__infos">
          <div>
            <Checkbox />
            <LogoImg />
            <div className="product__info">
              <span className="product__name">우리 첫거래우대 정기예금</span>
              <span className="product__bank">우리은행</span>
              <span className="product__property">특판</span>
            </div>
          </div>
          <div className="product__interest">
            <span className="product__name">최고 4.5%</span>
            <span className="product__bank">기본 4.5%</span>
            <Xbox />
          </div>
        </div>
      </div>
    </div>
    <div className="product__comparison__btn">비교하기</div>
  </section>
);
export default LikeListPage;
