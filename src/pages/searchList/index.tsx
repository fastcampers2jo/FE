import { useCallback, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BankList,
  Button,
  Navber,
  RankPop,
  SearchBox,
  SearchTag,
} from "components";
import { useSearch } from "stores/useSearch";
import { useRank } from "stores/useRank";
import { IcTaparr, IcViewCheck } from "assets";
import { fakedata, nav, navs } from "mock";
import styles from "./styles.module.scss";

const SearchList = () => {
  const param = useParams();
  const { searchFocus } = useSearch();
  const { timePopup, openTimePopup, closeTimePopup } = useRank();
  // 조회수
  const orders = ["찜하기순", "인기순", "조회순", "가나다순"];
  const [order, setOrder] = useState({
    order: "찜하기순",
    seletOrder: "찜하기순",
  });

  const onSeletOrder = useCallback(() => {
    setOrder({ ...order, seletOrder: order.order });
    closeTimePopup();
  }, [order.order, order.seletOrder]);
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
              <button
                type="button"
                className={styles.more}
                onClick={openTimePopup}
              >
                {order.seletOrder} <IcTaparr />
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
          {timePopup && (
            <RankPop title="조회수 선택" close={closeTimePopup} height="406">
              {orders.map((view) => (
                <button
                  key={view}
                  type="button"
                  onClick={() => setOrder({ ...order, order: view })}
                  className={`${styles.viewBtn} ${order.order === view ? styles.on : ""}`}
                >
                  {view}
                  {order.order === view && <IcViewCheck />}
                </button>
              ))}
              <div className={styles.viewBtnWrap}>
                <Button
                  type="button"
                  disabled={order.order === "" || order.order === order.seletOrder}
                  onClick={() => onSeletOrder()}
                >
                  선택완료
                </Button>
              </div>
            </RankPop>
          )}
          <Navber />
        </>
      )}
    </section>
  );
};

export default SearchList;
