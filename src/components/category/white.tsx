import { Swiper, SwiperSlide } from "swiper/react";
import "./category.scss";

const CategoryWhite = () => (
  <header>
    <div className="product__categories white">
      <Swiper slidesPerView={7} spaceBetween={8}>
        <SwiperSlide>
          <div className="product__category active white">
            <span>전체</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category white">
            <span>예금</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category white">
            <span>적금</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category white">
            <span>파킹</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category white">
            <span>CMA</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category white">
            <span>ISA</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category white">
            <span>연금</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__category white">
            <span>카드</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </header>
);

export default CategoryWhite;
