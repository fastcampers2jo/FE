import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { LogoTop, Navber, PostList, HotTopic } from "components";
import { IcBoardArr, IcEdit } from "assets";
import { getLoungeAll } from "utils/api";
import { launge } from "mock";
import "./lounge.scss";
import { useQuery } from "@tanstack/react-query";

const LoungePage = () => {
  const { data } = useQuery({
    queryKey: ["lounge"],
    queryFn: getLoungeAll,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  console.log(data);
  return (
    <div className="loungeMain">
      <LogoTop />
      <Link to="/community/newpost">
        <IcEdit className="loungeMain__icons" />
      </Link>
      <HotTopic />
      <section className="community__section">
        <Link to="/board/1" className="page__title">
          게시판 <IcBoardArr />
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
              <div
                className="lounge__product__category"
                style={{ visibility: "hidden" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <PostList data={launge} />

      <Navber />
    </div>
  );
};

export default LoungePage;
