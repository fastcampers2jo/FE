import { Link } from "react-router-dom";
import "./likepopup.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const LikePopUp = () => (
  <section className="likepopup">
    <div className="statusbar">
      <div className="home-indicator" />
    </div>
    <div className="liketpopup__section">
      <div className="liketpopup__productinfo">
        <div className="product__img" />
        <div className="likepopup__text">
          <span>우리은행 정기예금</span>이 <br /> 찜하기 상품이 담겼습니다
        </div>
      </div>
      <Link to="/likelist/1" className="product__comparison">
        바로가기
      </Link>
    </div>
    <div className="likepopup__other">
      20세 사회초년생이 <br /> 함께보면 좋은 정기예금 상품
      <div className="productdetail__other__slider">
        <Swiper loop spaceBetween={10} slidesPerView={1.7}>
          <SwiperSlide>상품정보 가져오기</SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
);

export default LikePopUp;
