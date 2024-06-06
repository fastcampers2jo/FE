import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { BankList, Navber, SearchBox, SearchTag } from "components";
import { useSearch } from "stores/useSearch";
import { IcTaparr } from "assets";
import { fakedata, nav, navs } from "mock";
import styles from "./styles.module.scss";

const SearchList = () => {
  const param = useParams();
  const { searchFocus } = useSearch();
  return (
    <section>
      <div className={styles.searchTop}>
        <SearchBox />
      </div>
      {searchFocus ? (
        <div className={styles.searchFocus}>
          <SearchTag />
        </div>
      ) : (
        <>
          <div className={`${styles.tap} searchTap`}>
            <Swiper spaceBetween={8} slidesPerView={5.6}>
              {nav.map((cate, i) => (
                <SwiperSlide key={cate.name}>
                  <Link
                    to={`/search/${param.search}/${i + 1}`}
                    className={
                      Number(param?.id) === i + 1 ? styles.navsButton : ""
                    }
                  >
                    {cate.name}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.searchWrap}>
            <div className={styles.other}>
              <p>
                <span>150</span>개의 검색결과
              </p>
              <button type="button" className={styles.more}>
                추천순 <IcTaparr />
              </button>
            </div>
            {param.id === "1" ? (
              navs.map((v, i) => (
                <article className={styles.article} key={i}>
                  <h4>
                    {v.name}
                    <span>총 12개 상품</span>
                  </h4>
                  <BankList data={fakedata.slice(0, 3)} />
                  <Link
                    to={`/search/${param.search}/${i + 2}`}
                    className={styles.link}
                  >
                    {v.name} 더보기 <IcTaparr />
                  </Link>
                </article>
              ))
            ) : (
              <article className={styles.article}>
                <BankList data={fakedata} />
              </article>
            )}
          </div>
          <Navber />
        </>
      )}
    </section>
  );
};

export default SearchList;
