import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BankList } from "components";
import { keepLogin } from "utils/api";
import { isLogin } from "types";
import { IcBell, IcLogo, IcMypage } from "assets";
import { fakedata } from "mock/handlers";
import styles from "./styles.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const { data: login } = useQuery<isLogin>({
    queryKey: ["login"],
    queryFn: keepLogin,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  console.log(fakedata);
  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/">
            <IcLogo />
          </Link>
        </h1>
        <nav>
          <Link to="/alarm">
            <IcBell />
          </Link>
          <Link to="/mypage">
            <IcMypage />
          </Link>
        </nav>
      </header>
      <section>
        <article className={styles.btnText}>
          {login?.result?.resultCode === 200 ? (
            <button onClick={() => navigate("/login")}>
              {login.body.name}
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
          <div className={styles.articleBox}>
            <div className={styles.articleBoxTop}>
              <h2>
                알아서, <span>랭킹 ChaK</span>
              </h2>
              <button>더보기 &gt;</button>
            </div>
            <BankList data={fakedata.slice(0, 3)} />
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
