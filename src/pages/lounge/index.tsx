import { Link } from "react-router-dom";
import PostList from "components/lounge/PostList";
import "./lounge.scss";
import HotTopic from "components/lounge/HotTopic";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import LogoTOP from "components/logoTop";
import Navbar from "components/navber";
import { IcEdit, RightArrow } from "assets";

const LoungePage = () => (
  <div className="loungeMain">
    <LogoTOP />
    <Link to="/community/newpost">
      <IcEdit className="loungeMain__icons" />
    </Link>
    <HotTopic />
    <section className="community__section">
      <Link to="/community" className="page__title">
        게시판 <RightArrow className="page__title__icons" />
      </Link>
      <div className="lounge__product__categories">
        <Swiper slidesPerView={5.5} spaceBetween={42}>
          <SwiperSlide>
            <div className="lounge__product__category active">전체</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lounge__product__category">예금</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lounge__product__category">적금</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lounge__product__category">카드</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lounge__product__category">연금</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lounge__product__category">파킹</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lounge__product__category">CMA</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lounge__product__category" style={{ visibility: "hidden" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <PostList />

    <Navbar />
  </div>
);

export default LoungePage;
