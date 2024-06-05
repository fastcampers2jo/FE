import { Swiper, SwiperSlide } from "swiper/react";
import "./category.scss";

const Category = () => (
  <header>
    <div className="product__categories">
      <Swiper slidesPerView={7} spaceBetween={8}>
        <SwiperSlide>
          <div className="product__category active">
            <span>전체</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category">
            <span>예금</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category">
            <span>적금</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category">
            <span>파킹</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category">
            <span>CMA</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category">
            <span>ISA</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category">
            <span>연금</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category">
            <span>카드</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </header>
);

export default Category;
