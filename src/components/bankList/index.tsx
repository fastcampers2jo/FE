import { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delLikeList, like } from "utils/api";
import useAuth from "hooks/useAuth";
import { useRecommend } from "stores/useRecommend";
import { IcSmallLove, IcSmallNotLove } from "assets";
import styles from "./styles.module.scss";

interface IBank {
  finPrdtNm: string;
  intrRate2Show: number;
  intrRateShow: number;
  isLiked?: boolean;
  korCoNm: string;
  id: number;
  joinWayList: string[];
  bankImageUrl: string;
  financeId: string;
  financeType: string;
  tap?: number;
  bank?: string[];
}

const BankList = ({
  finPrdtNm,
  intrRate2Show,
  intrRateShow,
  isLiked,
  korCoNm,
  id,
  joinWayList,
  bankImageUrl,
  financeId,
  financeType,
  bank,
  tap,
}: IBank) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const loaction = useLocation();
  console.log(loaction.pathname.split("/")[1]);
  const param = useParams();
  const { ageGroup, incomeGroup, savingGoal, savingEnd, savingType } =
      useRecommend();

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
  const { mutate: unlike3 } = useMutation({
    mutationFn: delLikeList,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "recommendation",
          ageGroup,
          incomeGroup,
          savingGoal,
          savingEnd,
          savingType,
        ],
      });
    },
  });
  const { mutate: like2 } = useMutation({
    mutationFn: like,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "recommendation",
          ageGroup,
          incomeGroup,
          savingGoal,
          savingEnd,
          savingType,
        ],
      });
    },
  });
  const onUnLove = (
    e: React.MouseEvent<HTMLButtonElement>,
    id1: string,
    financeTypes: string
  ) => {
    e.stopPropagation();
    if (loaction.pathname.split("/")[1]) {
      return unlike3({ ids: [id1], finProductType: financeType });
    }
    if (tap === 2 && (bank?.length as number) > 0) {
      return unlike({ ids: [id1], finProductType: financeTypes });
    }
    unlike2({ ids: [id1], finProductType: financeTypes });
  };
  const { login } = useAuth();
  const onLove = (e: React.MouseEvent<HTMLButtonElement>, id1: string) => {
    e.stopPropagation();
    if (loaction.pathname.split("/")[1]) {
      like2({ id: id1, type: financeType });
    }
    if (tap === 2 && (bank?.length as number) > 0) {
      best({ id: id1, type: financeType });
    }
    mutate({ id: id1, type: financeType });
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
  return (
    <button
      className={styles.rankList}
      type="button"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        onLink(e, financeId, financeType)
      }
    >
      {param.search ? (
        ""
      ) : (
        <p className={styles.currentRank}>
          {id} <span />
        </p>
      )}

      <div className={styles.leftText}>
        <div className={styles.bankImgBox}>
          <img src={bankImageUrl} alt="은행명" />
        </div>
        <div className={styles.bankTextbox}>
          <em>{korCoNm}a</em>
          <p>{finPrdtNm}</p>
          {joinWayList.map((tags, j: number) => (
            <span key={j} className={styles.tags}>
              {tags}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.rightText}>
        <div>
          <span>최고 {intrRate2Show}%</span>
          <strong>기본 {intrRateShow}%</strong>
        </div>
        {param.search ? null : login?.body.email ? (
          isLiked ? (
            <button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                onUnLove(e, financeId, financeType)
              }
            >
              <IcSmallLove />
            </button>
          ) : (
            <button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                onLove(e, financeId)
              }
            >
              <IcSmallNotLove />
            </button>
          )
        ) : (
          <button type="button" onClick={onLogin}>
            {isLiked ? <IcSmallLove /> : <IcSmallNotLove />}
          </button>
        )}
      </div>
    </button>
  );
};

export default BankList;
