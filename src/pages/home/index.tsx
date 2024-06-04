import { useCallback, useState } from "react";
import { IcBell, IcLogo, IcMypage } from "assets";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const onlogin = useCallback(() => {
    setLogin((prev) => !prev);
  }, [login]);
  const goods = [
    {
      bank: "우리은행",
      describe: "우리 첫거래 우대 정기예금",
      rate: "4.5%",
    },
    {
      bank: "국민은행",
      describe: "청년을 위한 정기예금",
      rate: "4.5%",
    },
    {
      bank: "신한은행",
      describe: "파워적금",
      rate: "4.5%",
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/"><IcLogo /></Link>
        </h1>
        <nav>
          <Link to="/alarm">
            <IcBell />
          </Link>
          <Link to="/mypage"><IcMypage /></Link>
        </nav>
      </header>
      <section>
        <article className={styles.btnText}>
          {login ? (
            <button onClick={() => onlogin()}>
              하진님
              <span>께 CHACK 맞는</span>
              <br />
              금융상품을
              <span>추천받아보세요 &gt;</span>
            </button>
          ) : (
            <button onClick={() => navigate("/login")}>
              로그인
              <span>하고</span>
              <br />
              맞춤형 상품
              <span>추천받으세요 &gt;</span>
            </button>
          )}
        </article>
        <article className={styles.goodsContiner}>
          <button className={styles.search} onClick={() => navigate("/search")}>
            원하시는 금융상품을 검색해 보세요 !
          </button>
          <div className={styles.articleBox}>
            <div className={styles.articleBoxTop}>
              <h2>지금 가장 인기 있는 상품</h2>
              <button>더보기 &gt;</button>
            </div>
            <ul>
              {goods.map((good, i) => (
                <li className={styles.popularProduct} key={i}>
                  <Link to="/">
                    <span>{i}</span>
                    <div className={styles.imgbox} />
                    <div className={styles.textbox}>
                      <em>{good.bank}</em>
                      <p>{good.describe}</p>
                    </div>
                    <p>{good.rate}</p>
                  </Link>
                  <button type="button">asd</button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.articleBox}>
            <div className={styles.articleBoxTop}>
              <h2>
                실시간 라운지 핫
                <span>지금 비교함에 가장 많이 담긴 상품이에요!</span>
              </h2>
              <button>더보기 &gt;</button>
            </div>
            <div className={styles.comparisons}>
              <div className={styles.comparison}>
                <div />
                <em>신한은행</em>
                <p>최강 적금</p>
                <span>최고(기본) 금리</span>
                <strong>
                  7<span>(2.5)</span>%
                </strong>
              </div>
              <p>vs</p>
              <div className={styles.comparison}>
                <div />
                <em>신한은행</em>
                <p>최강 적금</p>
                <span>최고(기본) 금리</span>
                <strong>
                  7<span>(2.5)</span>%
                </strong>
              </div>
            </div>
          </div>
          <div className={styles.banner} />
        </article>
      </section>
    </>
  );
};

export default Home;
