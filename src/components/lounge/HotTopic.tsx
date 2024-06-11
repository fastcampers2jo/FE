/* eslint-disable no-lone-blocks */
/* eslint-disable operator-linebreak */
import { Swiper, SwiperSlide } from "swiper/react";
import "../../pages/lounge/lounge.scss";
import "swiper/css";
import { Link } from "react-router-dom";
import { lounge } from "mock";

const HotTopic = () => {
  const truncate = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return `${str.slice(0, maxLength)}...`;
    }
    return str;
  };

  return (
    <div className="hottopic">
      <div className="page__title">지금 뜨는 상품</div>
      <div className="products__comparison__list__hottopic">
        <Swiper loop spaceBetween={316} slidesPerView={2}>
          {lounge.map((post) => {
            const totalVotes = post.product.reduce((sum, product) => sum + product.voteCount, 0);
            const getVotePercentage = (voteCount: number) => (totalVotes === 0 ? 0 : (voteCount / totalVotes) * 100);

            return (
              <SwiperSlide key={post.id}>
                <div className="products__comparison">
                  <div className="products__vote">
                    <div className="products__vote__title">
                      <div className="products__vote__title__text">
                        {truncate(post.post[0].title, 17)}
                        <div className="vote__num">
                          {post.post[0].inquiry}명 <span>참여중</span>
                        </div>
                      </div>
                      <Link to={`/community/${post.id}`} className="vote--btn">
                        투표하기
                      </Link>
                    </div>
                  </div>
                  <div className="product__comparison__wrapped">
                    <div className="product">
                      <div className="product__img" />
                      <div className="product__info">
                        <div className="product__bank">{post.product[0].bank_name}</div>
                        <div className="product__title">
                          {truncate(post.product[0].title, 8)}
                          <div className="product__title rate">
                            {post.product[0].def_rate}%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="product__img" />
                      <div className="product__info">
                        <div className="product__bank">{post.product[1].bank_name}</div>
                        <div className="product__title">
                          {truncate(post.product[1].title, 8)}
                          <div className="product__title rate">
                            {post.product[1].def_rate}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vote__view__wrapper">
                    <div className="vote__view">
                      <div
                        className={`vote__bar__section ${getVotePercentage(post.product[0].voteCount) > getVotePercentage(post.product[1].voteCount) ? "active" : ""}`}
                        style={{ width: `${getVotePercentage(post.product[0].voteCount)}%` }}
                      >
                        <span className="vote__text">{getVotePercentage(post.product[0].voteCount).toFixed(0)}%</span>
                      </div>
                      <div
                        className={`vote__bar__section ${getVotePercentage(post.product[1].voteCount) > getVotePercentage(post.product[0].voteCount) ? "active" : ""}`}
                        style={{ width: `${getVotePercentage(post.product[1].voteCount)}%` }}
                      >
                        <span className="vote__text">{getVotePercentage(post.product[1].voteCount).toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HotTopic;

{ /* // <SwiperSlide>
    //   <div className="products__comparison">
    //     <div className="products__vote">
    //       <div className="products__vote__title">
    //         <div className="products__vote__title__text">
    //           20대 주택청약 상품 골라주세요!!!
    //           <div className="vote__num">
    //             3,399명 <span>참여중</span>
    //           </div>
    //         </div>
    //         <button type="button" className="vote--btn">
    //           투표하기
    //         </button>
    //       </div>
    //     </div>
    //     <div className="product__comparison__wrapped">
    //       <div className="product">
    //         <div className="product__img" />
    //         <div className="product__info">
    //           <div className="product__bank">우리은행</div>
    //           <div className="product__title">청년주택청약 4% </div>
    //         </div>
    //       </div>
    //       <div className="product">
    //         <div className="product__img" />
    //         <div className="product__info">
    //           <div className="product__bank">우리은행</div>
    //           <div className="product__title">청년주택청약 4% </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="vote__view">
    //       <div className="product__first">40%</div>
    //       <div className="product__second">60%</div>
    //     </div>
    //   </div>
    // </SwiperSlide> */ }
