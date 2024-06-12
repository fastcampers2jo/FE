import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { like } from "utils/api";
import useAuth from "hooks/useAuth";
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
  financeType:string;
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
  financeType
}: IBank) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const param = useParams();
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
  const { login } = useAuth();
  const onLove = (e: React.MouseEvent<HTMLButtonElement>, id1: string) => {
    e.stopPropagation();
    mutate({ id: id1, type: financeType });
  };
  const onLink = useCallback((e: React.MouseEvent<HTMLButtonElement>, ids:string, type:string) => {
    e.stopPropagation();
    navigate(`/productdetail?${ids}&type=${type}`);
  }, []);
  const onLogin = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      navigate("/login");
    },
    []
  );
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
          <em>{korCoNm}</em>
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
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onLove(e, financeId)
            }
          >
            {isLiked === true ? <IcSmallLove /> : <IcSmallNotLove />}
          </button>
        ) : (
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onLogin(e)}
          >
            {isLiked === true ? <IcSmallLove /> : <IcSmallNotLove />}
          </button>
        )}
      </div>
    </button>
  );
};

export default BankList;
