import { SelectToggle } from "assets";
import "./productsVote.scss";

const ProductsVote = () => (
  <div className="productsvote">
    <section className="vote__utils">
      <div>90명 참여중</div>
      <div>단일선택</div>
    </section>
    <section className="vote__list">
      <div className="vote__productlist">
        <div className="product__infos">
          <div className="product__info">
            <div>
              <SelectToggle className="vote--toggle active" />
            </div>
            <div className="product__img" />
            <div className="product__title">
              <span className="product__bankname">우리은행</span>
              <span className="product__name">우리 첫거래우대 정기예금</span>
            </div>
          </div>
        </div>

        <div className="product__interest">
          <div className="interest__info">
            <span className="interest__max">최고 4.5%</span>
            <span className="interest__def">기본 4.5%</span>
          </div>
        </div>
      </div>
      <div className="vote__productlist">
        <div className="product__infos">
          <div className="product__info">
            <div>
              <SelectToggle className="vote--toggle " />
            </div>
            <div className="product__img" />
            <div className="product__title">
              <span className="product__bankname">국민은행</span>
              <span className="product__name">국민 전국민 정기예금</span>
            </div>
          </div>
        </div>

        <div className="product__interest">
          <div className="interest__info">
            <span className="interest__max">최고 4.5%</span>
            <span className="interest__def">기본 4.5%</span>
          </div>
        </div>
      </div>
    </section>
    <section className="vote--toggle">
      <div className="vote__select">투표하기</div>
      <div className="vote__select preview">결과 미리보기</div>
    </section>
  </div>
);

export default ProductsVote;
