/* eslint-disable no-restricted-globals */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./category.scss";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface CategoryProps {
  pageUrlName: string;
}

const Category = ({ pageUrlName }: CategoryProps) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const navs = [
    { name: "전체" },
    { name: "예금" },
    { name: "적금" },
    { name: "파킹" },
    { name: "CMA" },
    { name: "ISA" },
    { name: "연금" },
    { name: "카드" },
  ];

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    if (currentPath && !isNaN(Number(currentPath))) {
      setActiveIndex(parseInt(currentPath, 10));
    } else if (id && !isNaN(Number(id))) {
      setActiveIndex(parseInt(id, 10));
    } else {
      navigate(`/${pageUrlName}/1`);
    }
  }, [location, pageUrlName, navigate, id]);

  return (
    <header>
      <div className="product__categories white">
        <Swiper slidesPerView={7} spaceBetween={2} direction="horizontal">
          {navs.map((nav, i) => (
            <SwiperSlide key={i}>
              <Link
                to={`/${pageUrlName}/${i + 1}`}
                className={`${activeIndex === i + 1 ? "product__category white active" : "product__category white"}`}
                onClick={() => setActiveIndex(i + 1)}
              >
                <span>{nav.name}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
};

export default Category;
