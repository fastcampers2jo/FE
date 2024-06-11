import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { PostList, TitleTop, Navber, SearchRecent, BoardBox } from "components";
import { useSearch } from "stores/useSearch";
import { IcMainSearch, IcTaparr } from "assets";
import { lounge, nav } from "mock";
import styles from "./styles.module.scss";

const Board = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { boardHistory, setBoardHistory, searchFocus } = useSearch();
  return (
    <section>
      <div className={styles.boardTop}>
        <TitleTop>게시판</TitleTop>
        {param.search ? (
          <BoardBox />
        ) : (
          <button type="button" onClick={() => navigate("/searchboard")} className={styles.boardBtn}>
            <p>제목 + 내용으로 검색해보세요</p>
            <IcMainSearch />
          </button>
        )}
      </div>
      {searchFocus && param.search ? (
        <div className={styles.searchFocus}>
          <SearchRecent local="board" historys={boardHistory} setHistory={setBoardHistory} />
        </div>
      ) : (
        <>
          <div className={`${styles.tap} searchTap`}>
            <Swiper spaceBetween={8} slidesPerView={5.6}>
              {nav.map((cate, i) => (
                <SwiperSlide key={cate.name}>
                  <Link to={`/board/${i + 1}`} className={Number(param?.id) === i + 1 ? styles.navsButton : ""}>
                    {cate.name}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {param.search && (
            <div className={styles.other}>
              <p>
                <span>150</span>개의 검색결과
              </p>
              <button type="button" className={styles.more}>
                추천순 <IcTaparr />
              </button>
            </div>
          )}

          <PostList data={lounge} />
          <Navber />
        </>
      )}
    </section>
  );
};

export default Board;
