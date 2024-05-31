import { RightArrow } from "assets";
import "../../pages/lounge/lounge.scss";

const HotTopic = () => (
  <form className="hottopic">
    <div className="page__title">
      지금 뜨거운 게시글 <RightArrow className="arrow--right" />
    </div>
    <div className="products__comparison__list">
      <div className="products__comparison">
        <div className="product__comparison__wrapped">
          <div className="product__comparison">
            <div className="product">
              <div className="product__img" />
              <div className="product__info">
                <div className="product__bank">KDB 산업은행</div>
                <div className="product__title">KDB정기예금 </div>
              </div>
            </div>
            <div className="product__interest">최고 연 3.60%</div>
          </div>
        </div>
        <p>VS</p>
        <div className="product__comparison__wrapped">
          <div className="product__comparison">
            <div className="product">
              <div className="product__img" />
              <div className="product__info">
                <div className="product__bank">KDB 산업은행</div>
                <div className="product__title">KDB정기예금 </div>
              </div>
            </div>
            <div className="product__interest">최고 연 3.60%</div>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default HotTopic;
