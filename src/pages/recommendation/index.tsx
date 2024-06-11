import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BankList, Fab, LogoTop, Navber } from "components";
import CategoryWhite from "components/category/white";
import { useRecommend } from "stores/useRecommend";
import { recommendation } from "utils/api";
import useAuth from "hooks/useAuth";
import { IRecommend } from "types";
import styles from "./recommendation.module.scss";

const RecommendationPage = () => {
  const { login } = useAuth();
  const { ageGroup, incomeGroup, savingGoal, savingEnd, savingType } = useRecommend();
  const [able, setAble] = useState(false);
  const { data } = useQuery({
    queryKey: [
      "recommendation",
      ageGroup,
      incomeGroup,
      savingGoal,
      savingEnd,
      savingType,
    ],
    queryFn: recommendation,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: able,
  });
  useEffect(() => {
    if (
      ageGroup === ""
      || incomeGroup === ""
      || savingGoal === 0
      || savingEnd === 0
      || savingType === ""
    ) {
      redirect("/recommend-onboarding/main");
    } else {
      setAble(true);
    }
  }, [ageGroup, incomeGroup, savingGoal, savingEnd, savingType]);
  return (
    <section className={styles.section3}>
      <LogoTop />
      <div className={styles.recommendationpage__title}>
        {login?.body ? login?.body.name : "고객"}님에게 <span>추천</span>하는
        <br />
        <span>Chak 상품</span>
      </div>
      <CategoryWhite pageUrlName="recommend" />
      <div className={styles.bankList}>
        {data?.body?.allList.map((datas: IRecommend, i: number) => (
          <BankList
            korCoNm={datas.korCoNm}
            intrRateShow={datas.intrRateShow}
            intrRate2Show={datas.intrRate2Show}
            finPrdtNm={datas.finPrdtNm}
            joinWayList={datas.tagList}
            bankImageUrl={datas.bankImageUrl}
            isLiked={datas.isLiked}
            financeId={datas.financeId}
            financeType={datas.financeType}
            id={i + 1}
            key={i}
          />
        ))}
      </div>
      <div className={styles.recommendation}>
        <Link to="/recommend-onboarding/main">새로운 상품 추천받기</Link>
      </div>
      <Fab />
      <Navber />
    </section>
  );
};

export default RecommendationPage;
