import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { BankList, Button, Fab, LogoTop, Navber } from "components";
import {
  IcBanner,
  IcHomeArr,
  IcHomeKeyword,
  IcLoginArr,
  IcMainSearch,
  IcSlide01,
  IcSlide02,
} from "assets";
import useAuth from "hooks/useAuth";
import { bankHome } from "utils/api";
import { IBanks } from "types";
import { boards, product, keywords, bankList, cards, pensions } from "mock";
import styles from "./styles.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { data: list } = useQuery({
    queryKey: ["bankHome", 3],
    queryFn: bankHome,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  // 슬라이더 방향키
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  SwiperCore.use([Navigation, Autoplay, Pagination]);
  const swiperProps = {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
      nextEl: navigationNextRef?.current,
      prevEl: navigationPrevRef?.current,
    },
  };
  useEffect(() => {
    swiperProps.navigation.nextEl = navigationNextRef.current;
    swiperProps.navigation.prevEl = navigationPrevRef.current;
  }, [navigationPrevRef.current, navigationNextRef.current]);
  return (
    <>
      <LogoTop />
      <section className={styles.section}>
        <article className={styles.section01}>
          {login?.result?.resultCode === 200 ? (
            <>
              <p>
                {login.body.name} 께 CHACK 맞는
                <span>금융상품을 추천받아보세요!</span>
              </p>
              <button className={styles.loginBtn}>
                <p>Chak 추천받기</p>
                <div>
                  <IcLoginArr />
                </div>
              </button>
            </>
          ) : (
            <>
              <p>
                로그인하고
                <span>맞춤형 상품 추천받아보세요!</span>
              </p>
              <button
                className={styles.loginBtn}
                onClick={() => navigate("/login")}
              >
                <p>로그인하기</p>
                <div>
                  <IcLoginArr />
                </div>
              </button>
            </>
          )}
          <button
            className={styles.goSearch}
            onClick={() => navigate("/search")}
          >
            <IcMainSearch />
            <p>원하시는 상품을 검색해보세요!</p>
          </button>
        </article>
        <article className={styles.section02}>
          <div className={styles.articleBoxTop}>
            <h2>
              알아서, <span>랭킹 ChaK</span>
            </h2>
            <Link to="/ranking/1">더보기 &gt;</Link>
          </div>
          {list?.body?.content.slice(0, 3).map((datas: IBanks, i: number) => (
            <div key={i}>
              <BankList
                korCoNm={datas.financeDetailDto.korCoNm}
                intrRateShow={datas.financeDetailDto.intrRateShow}
                intrRate2Show={datas.financeDetailDto.intrRate2Show}
                finPrdtNm={datas.financeDetailDto.finPrdtNm}
                joinWayList={datas.financeDetailDto.joinWayList}
                id={i + 1}
                bankImageUrl={datas.financeDetailDto.bankImageUrl}
                financeId={datas.financeDetailDto.financeId}
                financeType={datas.finProductType}
                isLiked={datas.financeDetailDto.isLiked}
              />
            </div>
          ))}
        </article>
        <article className={styles.section03}>
          <div className={styles.articleBoxTop}>
            <h2>
              잘봐 <span>지금 뜨거운 게시글</span>
            </h2>
            <Link to="/rank/1">더보기 &gt;</Link>
          </div>
          <div className="swiperWrap">
            <Swiper
              slidesPerView={swiperProps.slidesPerView}
              loop={swiperProps.loop}
              navigation={swiperProps.navigation}
              pagination={{ clickable: true }}
            >
              {boards.map((board, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.section03Box}>
                    <div className={styles.section03Top}>
                      <div>
                        <p>{board.title} </p>
                        <strong>투표중</strong>
                      </div>
                      <em>
                        <span>{board.view}명</span> 참여중
                      </em>
                    </div>
                    <ul className={styles.section03con}>
                      <li>
                        <div className={styles.rage01}>
                          <p>{board.bankTurnoute01}</p>
                          <span style={{ height: `${board.bankTurnoute01}` }} />
                        </div>
                        <span>
                          {board.bankIcon01} {board.bankName01}
                        </span>
                        <strong>{board.bankRate01}</strong>
                      </li>
                      <li>
                        <div className={styles.rage02}>
                          <p>{board.bankTurnoute02}</p>
                          <span style={{ height: `${board.bankTurnoute02}` }} />
                        </div>
                        <span>
                          {board.bankIcon02} {board.bankName02}
                        </span>
                        <strong>{board.bankRate02}</strong>
                      </li>
                    </ul>
                  </div>
                  <Button
                    type="button"
                    disabled={false}
                    onClick={() => navigate(`${i}`)}
                    color="w"
                  >
                    게시글 보러가기
                  </Button>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.navi}>
              <button ref={navigationPrevRef}>
                <IcSlide02 />
              </button>
              <button ref={navigationNextRef}>
                <IcSlide01 />
              </button>
            </div>
          </div>
        </article>
        <article className={styles.section04}>
          <IcBanner />
          <div>
            <p>하나은행에서 간편하게</p>
            <span>청룡의 해, 여의주 금리우대 이벤트</span>
          </div>
        </article>
        <article className={`${styles.section05} section05`}>
          <h2>
            {login?.result?.resultCode === 200 ? login.body.name : "고객"}님을
            위한 <span>딱! 맞춘 첫 거래 우대 상품</span>
          </h2>
          <Swiper slidesPerView={2.6} spaceBetween={8} loop={swiperProps.loop}>
            {product.map((products, i) => (
              <SwiperSlide key={i}>
                <div className={styles.section05Box}>
                  <div className={styles.section05ImgBox}>
                    {products.bankIcon}
                  </div>
                  <div className={styles.section05TextBox}>
                    <em>
                      <span>{products.Sortation}</span>
                      {products.bankName}
                    </em>
                    <p>최고 {products.bankRate}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
        <article className={styles.section06}>
          <h2>
            깔끔하게 <span>밀ChaK 상품추천</span>
          </h2>
          <details className={styles.details}>
            <summary className={styles.summary}>
              키워드별 보험
              <IcHomeArr />
              <span>병원, 암, 여행 등 키워드 별로 상품을 찾아보세요.</span>
            </summary>
            {keywords.map((keyword, i) => (
              <Link to="/" key={i} className={styles.keywordBox}>
                <div>
                  <div className={styles.keywordImgBox}>{keyword.src}</div>
                  <div className={styles.keywordTextBox}>
                    <strong>{keyword.title}</strong>
                    {keyword.tags.map((tag, j) => (
                      <span key={j}>{tag}</span>
                    ))}
                    <ul className={styles.keywordUl}>
                      <li>
                        <span>월 보험료</span>
                        {keyword.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </li>
                      <li>
                        <span>보장기간</span>
                        {keyword.year}년
                      </li>
                    </ul>
                  </div>
                </div>
                <IcHomeKeyword />
              </Link>
            ))}
            <Link to="/" className={styles.section06Link}>
              보험상품 전체보기
            </Link>
          </details>
          <details className={styles.details}>
            <summary className={styles.summary}>
              용도에 맞는 대출
              <IcHomeArr />
              <span>나에게 ChaK 맞는 신용대출을 찾아보세요.</span>
            </summary>
            {keywords.map((keyword, i) => (
              <Link to="/" key={i} className={styles.keywordBox}>
                <div>
                  <div className={styles.keywordImgBox}>{keyword.src}</div>
                  <div className={styles.keywordTextBox}>
                    <strong>{keyword.title}</strong>
                    {keyword.tags.map((tag, j) => (
                      <span key={j}>{tag}</span>
                    ))}
                    <ul className={styles.keywordUl}>
                      <li>
                        <span>평균금리</span>
                        {keyword.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </li>
                      <li>
                        <span>평균실행금액</span>
                        {keyword.year}년
                      </li>
                    </ul>
                  </div>
                </div>
                <IcHomeKeyword />
              </Link>
            ))}
            <Link to="/" className={styles.section06Link}>
              대출상품 전체보기
            </Link>
          </details>
          <details className={`${styles.details}`}>
            <summary className={styles.summary}>
              캐시백 받을 수 있는 카드
              <IcHomeArr />
              <span>5월 신용카드 이벤트, 참여하고 캐시백 받으세요.</span>
            </summary>
            {cards.map((keyword, i) => (
              <Link to="/" key={i} className={styles.keywordBox}>
                <div>
                  <div className={styles.keywordCardImgBox} />
                  <div className={styles.keywordTextBox}>
                    <strong>{keyword.title}</strong>
                    {keyword.tags.map((tag, j) => (
                      <span key={j}>{tag}</span>
                    ))}
                  </div>
                </div>
                <IcHomeKeyword />
              </Link>
            ))}
            <Link to="/" className={styles.section06Link}>
              카드상품 전체보기
            </Link>
          </details>
          <details className={`${styles.details}`}>
            <summary className={styles.summary}>
              노후를 위한 연금
              <IcHomeArr />
              <span>미래를 위해 쌓고 세금혜택도 놓치지 마세요.</span>
            </summary>
            {pensions.map((keyword, i) => (
              <Link to="/" key={i} className={styles.keywordBox}>
                <div>
                  <div className={styles.keywordImgBox}>{keyword.src}</div>
                  <div className={styles.keywordTextBox}>
                    <strong>{keyword.title}</strong>
                    <p>{keyword.sub}</p>
                  </div>
                </div>
                <IcHomeKeyword />
              </Link>
            ))}
            <Link to="/" className={styles.section06Link}>
              연금상품 전체보기
            </Link>
          </details>
          <details className={`${styles.details}`}>
            <summary className={styles.summary}>
              내 집 마련의 꿈 청약
              <IcHomeArr />
              <span>주택청약 종합저축을 통해 내 집 마련에 도전해보세요.</span>
            </summary>
            {list?.body?.content.slice(3).map((datas: IBanks, i: number) => (
              <div key={i}>
                <BankList
                  korCoNm={datas.financeDetailDto.korCoNm}
                  intrRateShow={datas.financeDetailDto.intrRateShow}
                  intrRate2Show={datas.financeDetailDto.intrRate2Show}
                  finPrdtNm={datas.financeDetailDto.finPrdtNm}
                  joinWayList={datas.financeDetailDto.joinWayList}
                  id={i + 1}
                  bankImageUrl={datas.financeDetailDto.bankImageUrl}
                  financeId={datas.financeDetailDto.financeId}
                  financeType={datas.finProductType}
                  isLiked={datas.financeDetailDto.isLiked}
                />
              </div>
            ))}
            <Link to="/" className={styles.section06Link}>
              연금상품 전체보기
            </Link>
          </details>
        </article>
        <article className={styles.section07}>
          <div className={styles.articleBoxTop}>
            <h2>
              센스있는 <span>은행 브랜드관 탐색</span>
            </h2>
            <Link to="/rank/1">더보기 &gt;</Link>
          </div>
          <div className="section07SwiperWrap">
            <Swiper
              slidesPerView={7}
              spaceBetween={8}
              loop={swiperProps.loop}
              centeredSlides
              className="section07Swiper"
            >
              {bankList.map((bankLists) => (
                <SwiperSlide key={bankLists.name}>
                  <div className={styles.section07SwiperIcon}>
                    {bankLists.src}
                  </div>
                  <p className={styles.section07SwiperName}>{bankLists.name}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </article>
      </section>
      <Fab />
      <Navber />
    </>
  );
};

export default Home;
