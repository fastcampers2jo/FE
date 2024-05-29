import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navber, LogoTop } from "components";
import { ranks } from "mock/ranks";
import { useTime } from "hooks";
import { IcBankIcon, IcLove, IcTaparr } from "assets";
import styles from "./styles.module.css";

const Ranking = () => {
  const location = useLocation();
  const navs = [
    { name: "예금" },
    { name: "적금" },
    { name: "파킹" },
    { name: "CMA" },
    { name: "ISA" },
    { name: "연금" },
    { name: "카드" },
  ];
  const currentTime = useTime();
  const [tap, setTap] = useState(1);
  const [love, setLove] = useState(false);
  return (
    <>
      <LogoTop />
      <section>
        <article className={styles.banner} />
        <nav className={styles.nav}>
          <Swiper spaceBetween={10} slidesPerView={6.5}>
            {navs.map((nav, i) => (
              <SwiperSlide key={i}>
                <Link
                  to={`/ranking/${i + 1}`}
                  className={`${location.pathname.split("/")[2] === String(i + 1) ? styles.tapActive : ""} ${styles.link}`}
                >
                  {nav.name}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </nav>
        <article className={styles.article}>
          <div className={styles.tap}>
            <button
              type="button"
              onClick={() => setTap(1)}
              className={`${tap === 1 && styles.tapActive}`}
            >
              전체 베스트
            </button>
            <button
              type="button"
              onClick={() => setTap(2)}
              className={`${tap === 2 && styles.tapActive}`}
            >
              은행별 베스트
            </button>
          </div>
          {tap === 1 && (
            <>
              <div className={styles.tapTop}>
                <p className={styles.time}>{currentTime}</p>
                <div className={styles.button}>
                  <button type="button">
                    전체 연령 <IcTaparr />
                  </button>
                  <button type="button">
                    실시간 <IcTaparr />
                  </button>
                </div>
              </div>
              <ul className={styles.comparison}>
                <li>
                  <p className={styles.currentRank}>
                    1 <span />
                  </p>
                  <div>
                    <div className={styles.bankTop}>
                      <div className={styles.bankImgBox}>
                        <img src={IcBankIcon} alt="은행명" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setLove((prev) => !prev)}
                        className={`${love && styles.activeLove} ${styles.love}`}
                      >
                        <IcLove />
                      </button>
                    </div>
                    <div className={styles.textbox}>
                      <em>우리은행</em>
                      <p>기업은행 정기예금</p>
                      <span>최고(기본) 금리</span>
                      <strong>7(2.5)%</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <p className={styles.currentRank}>
                    2 <span />
                  </p>
                  <div>
                    <div className={styles.bankTop}>
                      <div className={styles.bankImgBox}>
                        <img src={IcBankIcon} alt="은행명" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setLove((prev) => !prev)}
                        className={`${love && styles.activeLove} ${styles.love}`}
                      >
                        <IcLove />
                      </button>
                    </div>
                    <div className={styles.textbox}>
                      <em>우리은행</em>
                      <p>기업은행 정기예금</p>
                      <span>최고(기본) 금리</span>
                      <strong>7(2.5)%</strong>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
                {ranks.map((rank, i) => (
                  <li key={i} className={styles.rankList}>
                    <p className={styles.currentRank}>
                      {i + 3} <span />
                    </p>
                    <div className={styles.leftText}>
                      <div className={styles.bankImgBox}>
                        <img src={IcBankIcon} alt="은행명" />
                      </div>
                      <div className={styles.bankTextbox}>
                        <span>{rank.bank}</span>
                        <p>{rank.name}</p>
                        {rank.tag.map((tags, j) => (
                          <button type="button" key={j} className={styles.tags}>
                            {tags}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className={styles.rightText}>
                      <div>
                        <span>최고 {rank.top}</span>
                        <strong>기본 {rank.rate}</strong>
                      </div>
                      <button
                        type="button"
                        onClick={() => setLove((prev) => !prev)}
                        className={`${love && styles.activeLove} ${styles.love}`}
                      >
                        <IcLove />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </article>
      </section>
      <Navber />
    </>
  );
};

export default Ranking;
