import { Swiper, SwiperSlide } from "swiper/react";
import "../../pages/lounge/lounge.scss";
import "swiper/css";

const HotTopic = () => (
  <form className="hottopic">
    <div className="page__title">지금 뜨는 상품</div>
    <div className="products__comparison__list">
      <Swiper
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          375: {
            spaceBetween: 328,
            slidesPerView: 2,
          },
          400: { spaceBetween: 300, slidesPerView: 2 },
          450: { spaceBetween: 250, slidesPerView: 2 },
          500: { spaceBetween: 200, slidesPerView: 2 },
          550: { spaceBetween: 150, slidesPerView: 2 },
          600: { spaceBetween: 100, slidesPerView: 2 },
        }}
      >
        <SwiperSlide>
          <div className="products__comparison">
            <div className="products__vote">
              <div className="products__vote__title">
                <div className="products__vote__title__text">
                  20대 주택청약 상품 골라주세요!!!
                  <div className="vote__num">
                    3,399명 <span>참여중</span>
                  </div>
                </div>
                <button type="button" className="vote--btn">
                  투표하기
                </button>
              </div>
            </div>
            <div className="product__comparison__wrapped">
              <div className="product">
                <div className="product__img" />
                <div className="product__info">
                  <div className="product__bank">우리은행</div>
                  <div className="product__title">청년주택청약 4% </div>
                </div>
              </div>
              <div className="product">
                <div className="product__img" />
                <div className="product__info">
                  <div className="product__bank">우리은행</div>
                  <div className="product__title">청년주택청약 4% </div>
                </div>
              </div>
            </div>
            <div className="vote__view">
              <div className="product__first">40%</div>
              <div className="product__second">60%</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="products__comparison">
            <div className="products__vote">
              <div className="products__vote__title">
                <div className="products__vote__title__text">
                  20대 주택청약 상품 골라주세요!!!
                  <div className="vote__num">
                    3,399명 <span>참여중</span>
                  </div>
                </div>
                <button type="button" className="vote--btn">
                  투표하기
                </button>
              </div>
            </div>
            <div className="product__comparison__wrapped">
              <div className="product">
                <div className="product__img" />
                <div className="product__info">
                  <div className="product__bank">우리은행</div>
                  <div className="product__title">청년주택청약 4% </div>
                </div>
              </div>
              <div className="product">
                <div className="product__img" />
                <div className="product__info">
                  <div className="product__bank">우리은행</div>
                  <div className="product__title">청년주택청약 4% </div>
                </div>
              </div>
            </div>
            <div className="vote__view">
              <div className="product__first">40%</div>
              <div className="product__second">60%</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="products__comparison">
            <div className="products__vote">
              <div className="products__vote__title">
                <div className="products__vote__title__text">
                  20대 주택청약 상품 골라주세요!!!
                  <div className="vote__num">
                    3,399명 <span>참여중</span>
                  </div>
                </div>
                <button type="button" className="vote--btn">
                  투표하기
                </button>
              </div>
            </div>
            <div className="product__comparison__wrapped">
              <div className="product">
                <div className="product__img" />
                <div className="product__info">
                  <div className="product__bank">우리은행</div>
                  <div className="product__title">청년주택청약 4% </div>
                </div>
              </div>
              <div className="product">
                <div className="product__img" />
                <div className="product__info">
                  <div className="product__bank">우리은행</div>
                  <div className="product__title">청년주택청약 4% </div>
                </div>
              </div>
            </div>
            <div className="vote__view">
              <div className="product__first">40%</div>
              <div className="product__second">60%</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </form>
);

export default HotTopic;
