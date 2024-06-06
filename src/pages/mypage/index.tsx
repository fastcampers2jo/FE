import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TitleTop, MypageList } from "components";
import { IcEdit, IcSticker } from "assets";
import { keepLogin } from "utils/api";
import { isLogin } from "types";
import styles from "./styles.module.scss";

const Mypage = () => {
  const navigate = useNavigate();
  const { data: login } = useQuery<isLogin>({
    queryKey: ["login"],
    queryFn: keepLogin,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  const settingsLinks = [
    { to: "/", text: "알림설정" },
    { to: "/", text: "공지사항" },
    { to: "/", text: "이용약관" },
    { to: "/", text: "개인정보 수집 및 이용" },
  ];
  const loungeLinks = [
    { to: "/", text: "글" },
    { to: "/", text: "댓글" },
  ];
  const shoppingLinks = [
    { to: "/", text: "찜" },
    { to: "/", text: "비교함" },
    { to: "/", text: "최근 본 상품" },
  ];

  return (
    <section className={styles.section}>
      <article className={styles.profileWrapper}>
        <TitleTop>마이페이지</TitleTop>
        <p>로그인 정보</p>
        <div className={styles.profile}>
          <div className={styles.imgbox}>
            <IcSticker />
          </div>
          <div className={styles.textbox}>
            {login?.result.resultCode === 200 ? (
              <>
                <em>
                  {login?.body.name}
                  <IcEdit />
                </em>
                <p>CHACK 맞는 금융생활 되세요</p>
              </>
            ) : (
              <>
                <p>
                  로그인하지 않은 상태입니다.
                  <br />
                  로그인/ 회원가입 후 이용해주세요
                </p>
                <button onClick={() => navigate("/login")}>
                  로그인/회원가입
                </button>
              </>
            )}
          </div>
        </div>
      </article>
      {login && (
        <>
          <MypageList title="나의 쇼핑 정보" links={shoppingLinks} />
          <MypageList title="라운지 활동" links={loungeLinks} />
        </>
      )}
      <MypageList title="설정" links={settingsLinks} />
      {login && <button className={styles.logout}>로그아웃</button>}
    </section>
  );
};

export default Mypage;
