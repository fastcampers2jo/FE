import { IcCheckInput, PlusGreen, SelectToggle, X } from "assets";
import "./productsVote.scss";

const PostVote = () => (
  <>
    <div className="postvote">
      <section className="postvote__utils">
        <div>
          <IcCheckInput className="postvote__icons__check" />
          복수선택
        </div>
        <span>투표 항목 추가</span>
        <X className="postvote__icons__x" />
      </section>
      <section className="vote__products__add">
        <PlusGreen className="postvote__icons__plus" />
        <div className="vote__products__add__info">
          찜한 상품 목록에서항목을 추가해보세요.
          <br />
          (최대 3개까지 추가 가능)
        </div>
      </section>
    </div>
    <div className="postvote ">
      <section className="postvote__utils select">
        <div>
          <IcCheckInput className="postvote__icons__check" />
          복수선택
        </div>
        <X className="postvote__icons__x" />
      </section>
      <section className="vote__list newpostvote">
        <div className="vote__productlist newpostvote">
          <div className="product__infos newpostvote">
            <div className="product__info newpostvote">
              <div>
                <SelectToggle className="vote--toggle" />
              </div>
              <div className="product__img newpostvote" />
              <div className="product__title newpostvote">
                <span className="product__bankname">우리은행</span>
                <span className="product__name">우리 첫거래우대 정기예금</span>
              </div>
            </div>
          </div>
        </div>
        <div className="vote__productlist newpostvote">
          <div className="product__infos newpostvote">
            <div className="product__info newpostvote">
              <div>
                <SelectToggle className="vote--toggle" />
              </div>
              <div className="product__img newpostvote" />
              <div className="product__title newpostvote">
                <span className="product__bankname">우리은행</span>
                <span className="product__name">우리 첫거래우대 정기예금</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default PostVote;
