import { SelectToggle } from "assets";
import "./productsVote.scss";

const VotingResults = () => (
  <div className="productsvote">
    <section className="vote__utils">
      <div>90명 참여중</div>
    </section>
    <section className="vote__list">
      <div className="vote__productlist">
        <div className="product__infos results">
          <div className="product__info results">
            <div>
              <SelectToggle className="vote--toggle active" />
            </div>
            <div className="product__img" />
            <div className="product__title results">
              <div className="voting__info">
                <span className="product__name">우리 첫거래우대 정기예금</span>
                <div className="voting__count">48명</div>
              </div>
              <div className="voting__percent">
                <div className="voting__track__def">
                  <div className="voting__track__active" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="vote__list">
      <div className="vote__productlist">
        <div className="product__infos results">
          <div className="product__info results">
            <div>
              <SelectToggle className="vote--toggle" />
            </div>
            <div className="product__img" />
            <div className="product__title results">
              <div className="voting__info">
                <span className="product__name">국민 전국민 정기예금</span>
                <div className="voting__count">42명</div>
              </div>
              <div className="voting__percent">
                <div className="voting__track__def">
                  <div className="voting__track__active nonselect" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="vote--toggle">
      <div className="vote__select results">다시 투표하기</div>
    </section>
  </div>
);

export default VotingResults;
