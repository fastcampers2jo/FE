import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { nav } from "mock";
import styles from "./styles.module.scss";

interface CategoryProps {
  pageUrlName: string;
}

const Category = ({ pageUrlName }: CategoryProps) => {
  const param = useParams();
  return (
    <nav className={styles.nav}>
      <Swiper slidesPerView={7.5} spaceBetween={8}>
        {nav.map((navs, i) => (
          <SwiperSlide key={i}>
            <Link
              to={`/${pageUrlName}/${i + 1}`}
              className={`${param.id === String(i + 1) ? styles.active : ""}`}
            >
              <span>{navs.name}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  );
};

export default Category;
