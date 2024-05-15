import { useCallback, useState } from "react";
import { Bell, Logo, Mypage, Search } from "assets";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const onlogin = useCallback(() => {
    setLogin((prev) => !prev);
  }, [login]);
  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
        <nav>
          <button>
            <Bell />
          </button>
          <button>
            <Mypage />
          </button>
        </nav>
      </header>
      <section>
        <article className={styles.btnText}>
          {login ? (
            <button onClick={() => onlogin()}>
              로그인
              <span>하고</span>
              <br />
              맞춤형 상품
              <span>추천받으세요 &gt;</span>
            </button>
          ) : (
            <button onClick={() => navigate("/login")}>
              하진님
              <span>께 CHACK 맞는</span>
              <br />
              금융상품을
              <span>추천받아보세요 &gt;</span>
            </button>
          )}
        </article>
        <article className={styles.goodsContiner}>
          <button className={styles.search} onClick={() => navigate("/search")}>
            원하시는 금융상품을 검색해 보세요 !
            <Search />
          </button>
          <div className={styles.articleBox}>
            <div className={styles.articleBoxTop}>
              <h2>지금 가장 인기 있는 상품</h2>
              <button>더보기 &gt;</button>
            </div>
          </div>
          <div className={styles.articleBox}>
            <div className={styles.articleBoxTop}>
              <h2>
                실시간 라운지 핫
                <span>지금 비교함에 가장 많이 담긴 상품이에요!</span>
              </h2>
              <button>더보기 &gt;</button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
