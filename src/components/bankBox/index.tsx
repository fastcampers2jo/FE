import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { delLikeList, like } from "utils/api";
import { RankPop, BankList, Button } from "components";
import { useTime } from "hooks";
import { useRank } from "stores/useRank";
import useAuth from "hooks/useAuth";
import { IBanks, IBank } from "types";
import {
  IcBigLove,
  IcBigNotLove,
  IcTaparr,
  IcViewCheck,
} from "assets";
import styles from "./styles.module.scss";

interface IBankBox {
  data: IBank;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  tap?: number;
  bank?: string[];
}

const BankBox = ({
  data,
  age,
  setAge,
  time,
  setTime,
  bank,
  tap,
}: IBankBox) => {
  const {
    agePopup,
    closeAgePopup,
    openAgePopup,
    timePopup,
    openTimePopup,
    closeTimePopup,
  } = useRank();
  const navigate = useNavigate();
  const currentTime = useTime();
  const queryClient = useQueryClient();
  const param = useParams();
  const { login } = useAuth();
  const { mutate } = useMutation({
    mutationFn: like,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "bankall",
          param.id === "1" ? "DEPOSIT" : "SAVING",
          param.id === "1" ? 10 : 20,
        ],
      });
    },
  });
  const { mutate: best } = useMutation({
    mutationFn: like,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "bankBest",
          param.id === "1" ? "DEPOSIT" : "SAVING",
          bank,
          param.id === "1" ? 10 : 20,
        ],
      });
    },
  });
  // 삭제
  const { mutate: unlike } = useMutation({
    mutationFn: delLikeList,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "bankBest",
          param.id === "1" ? "DEPOSIT" : "SAVING",
          bank,
          param.id === "1" ? 10 : 20,
        ],
      });
    },
  });
  const { mutate: unlike2 } = useMutation({
    mutationFn: delLikeList,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "bankall",
          param.id === "1" ? "DEPOSIT" : "SAVING",
          param.id === "1" ? 10 : 20,
        ],
      });
    },
  });
  const onLove = (
    e: React.MouseEvent<HTMLButtonElement>,
    id1: string,
    financeType: string
  ) => {
    e.stopPropagation();
    if (tap === 2 && (bank?.length as number) > 0) {
      best({ id: id1, type: financeType });
    }
    mutate({ id: id1, type: financeType });
  };
  const onUnLove = (
    e: React.MouseEvent<HTMLButtonElement>,
    id1: string,
    financeType: string
  ) => {
    e.stopPropagation();
    if (tap === 2 && (bank?.length as number) > 0) {
      unlike({ ids: [id1], finProductType: financeType });
    }
    unlike2({ ids: [id1], finProductType: financeType });
  };
  const onLink = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, ids: string, type: string) => {
      e.stopPropagation();
      navigate(`/productdetail?id=${ids}&type=${type}`);
    },
    []
  );
  const onLogin = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate("/login");
  }, []);
  // 나이 관련
  const ageRanges = [
    "전체",
    "19세 이하",
    "20-24세",
    "25-29세",
    "30-34세",
    "35세-39세",
    "40-44세",
    "45-49세",
    "50세 이상",
  ];
  const [afterAge, setAfterAge] = useState("전체");
  const onSeletAge = useCallback(() => {
    setAge(afterAge);
    closeAgePopup();
  }, [afterAge]);
  // 기간 관련
  const views = ["실시간", "오늘", "이번 주", "이번 달"];
  const [afterTime, setAfterTime] = useState("실시간");
  const onSeletView = useCallback(() => {
    setTime(afterTime);
    closeTimePopup();
  }, [afterTime]);
  return (
    <>
      <div className={styles.tapTop}>
        <p className={styles.time}>{currentTime}</p>
        <div className={styles.button}>
          <button type="button" onClick={openAgePopup}>
            {age} 연령 <IcTaparr />
          </button>
          <button type="button" onClick={openTimePopup}>
            {time} <IcTaparr />
          </button>
        </div>
      </div>
      <div className={styles.comparison}>
        {data?.content?.slice(0, 2).map((links: IBanks, i: number) => (
          <button
            key={i}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onLink(e, links.financeDetailDto.financeId, links.finProductType)
            }
            type="button"
          >
            <p className={styles.currentRank}>
              {i + 1} <span />
            </p>
            <div>
              <div className={styles.bankTop}>
                <div className={styles.bankImgBox}>
                  <img
                    src={`${links.financeDetailDto.bankImageUrl}`}
                    alt="은행명"
                  />
                </div>
                {login?.body.email ? (
                  links.financeDetailDto.isLiked ? (
                    <button
                      type="button"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        onUnLove(
                          e,
                          links.financeDetailDto.financeId,
                          links.finProductType
                        )
                      }
                    >
                      <IcBigLove />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        onLove(
                          e,
                          links.financeDetailDto.financeId,
                          links.finProductType
                        )
                      }
                    >
                      <IcBigNotLove />
                    </button>
                  )
                ) : (
                  <button type="button" onClick={onLogin}>
                    {links.financeDetailDto.isLiked ? (
                      <IcBigLove />
                    ) : (
                      <IcBigNotLove />
                    )}
                  </button>
                )}
              </div>
              <div className={styles.textbox}>
                <em>{links.financeDetailDto.korCoNm}</em>
                <p>{links.financeDetailDto.finPrdtNm}</p>
                <span>최고(기본) 금리</span>
                <strong>
                  {links.financeDetailDto.intrRate2Show}(
                  {links.financeDetailDto.intrRateShow})%
                </strong>
              </div>
            </div>
          </button>
        ))}
      </div>
      {data?.content?.slice(2).map((datas, i: number) => (
        <div key={i}>
          <BankList
            korCoNm={datas.financeDetailDto.korCoNm}
            intrRateShow={datas.financeDetailDto.intrRateShow}
            intrRate2Show={datas.financeDetailDto.intrRate2Show}
            finPrdtNm={datas.financeDetailDto.finPrdtNm}
            joinWayList={datas.financeDetailDto.joinWayList}
            id={i + 3}
            bankImageUrl={datas.financeDetailDto.bankImageUrl}
            financeId={datas.financeDetailDto.financeId}
            financeType={datas.finProductType}
            isLiked={datas.financeDetailDto.isLiked}
            tap={tap}
            bank={bank}
          />
        </div>
      ))}
      {agePopup && (
        <RankPop title="연령대 선택" height="295" close={closeAgePopup}>
          <div className={styles.ageContent}>
            <div className={styles.ageBtn}>
              {ageRanges.map((ageRange) => (
                <button
                  type="button"
                  key={ageRange}
                  className={`${afterAge === ageRange ? styles.on : ""}`}
                  onClick={() => setAfterAge(ageRange)}
                >
                  {ageRange}
                </button>
              ))}
            </div>
            <Button
              type="button"
              disabled={!(afterAge !== "" && afterAge !== age)}
              onClick={onSeletAge}
            >
              선택완료
            </Button>
          </div>
        </RankPop>
      )}
      {timePopup && (
        <RankPop title="조회수 선택" close={closeTimePopup} height="406">
          {views.map((view) => (
            <button
              key={view}
              type="button"
              onClick={() => setAfterTime(view)}
              className={`${styles.viewBtn} ${afterTime === view ? styles.on : ""}`}
            >
              {view}
              {afterTime === view && <IcViewCheck />}
            </button>
          ))}
          <div className={styles.viewBtnWrap}>
            <Button
              type="button"
              disabled={afterTime === "" || afterTime === time}
              onClick={() => onSeletView()}
            >
              선택완료
            </Button>
          </div>
        </RankPop>
      )}
    </>
  );
};

export default BankBox;
