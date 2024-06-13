/* eslint-disable no-restricted-globals */
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { HotTopic, LoginPop, LogoTop, Navber, PostList } from "components";
import { IcBoardArr, IcEdit } from "assets";
import { lounge, nav } from "mock";
import "./lounge.scss";
import { useCallback, useEffect, useState } from "react";
import useAuth from "hooks/useAuth";
import { usePopup } from "stores/usePopup";

const LoungePage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    if (currentPath && !isNaN(Number(currentPath))) {
      setActiveIndex(parseInt(currentPath, 10));
    } else if (id && !isNaN(Number(id))) {
      setActiveIndex(parseInt(id, 10));
    } else {
      navigate("/lounge/1");
    }
  }, [location, navigate, id]);
  const { loginPopup, openLoginPopup } = usePopup();
  const { login } = useAuth();

  const onBtn = useCallback(() => {
    if (!login) return openLoginPopup();
    navigate("/community/newpost");
  }, [login, navigate, openLoginPopup]);
  return (
    <div className="loungeMain">
      <LogoTop />
      {loginPopup && <LoginPop />}
      <button type="button" onClick={onBtn} className="fab">
        <IcEdit className="loungeMain__icons" />
      </button>
      <HotTopic />
      <section className="community__section">
        <Link to="/board/1" className="page__title">
          게시판 <IcBoardArr />
        </Link>
        <div className="lounge__product__categories">
          <Swiper slidesPerView={6} spaceBetween={8} direction="horizontal">
            {nav.map((navlist, i) => (
              <SwiperSlide key={i}>
                <Link
                  to={`/lounge/${i + 1}`}
                  className={`${activeIndex === i + 1 ? "lounge__product__category active" : "lounge__product__category"}`}
                  onClick={() => setActiveIndex(i + 1)}
                >
                  <span>{navlist.name}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <PostList data={lounge} />

      <Navber />
    </div>
  );
};
export default LoungePage;
