import { Bell, Mypage } from "assets";
import { Link } from "react-router-dom";
import PostList from "components/lounge/PostList";
import "./lounge.scss";
import HotTopic from "components/lounge/HotTopic";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const LoungePage = () => (
  <div className="loungeMain">
    <div className="logobar">
      <span className="logotext">Logo </span>
      <div className="icons">
        <Bell className="bell" />
        <Mypage className="mypage" />
      </div>
    </div>
    <HotTopic />
    <section className="community__section">
      <Link to="/community" className="page__title">
        게시판
      </Link>
      <div className="product__categories">
        <Swiper slidesPerView={6} spaceBetween={45}>
          <SwiperSlide>
            <div className="product__category active">전체</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product__category">예금</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product__category">적금</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product__category">카드</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product__category">연금</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product__category">파킹</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product__category">CMA</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product__category" style={{ visibility: "hidden" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <PostList />
  </div>
);

export default LoungePage;
