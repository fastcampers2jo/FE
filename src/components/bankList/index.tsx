import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { like } from "utils/api";
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
  const { mutate } = useMutation({
    mutationFn: like,
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const param = useParams();
  const onLove = (e: React.MouseEvent<HTMLButtonElement>, id1: string) => {
    e.stopPropagation();
    mutate({ id: id1, type: financeType });
  };
  const onLink = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("asd");
  }, []);
  return (
    <button className={styles.rankList} type="button" onClick={onLink}>
      <p className={styles.currentRank}>
        {id} <span />
      </p>
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
        {param.search ? (
          ""
        ) : (
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onLove(e, financeId)
            }
          >
            {isLiked ? <IcSmallLove /> : <IcSmallNotLove />}
          </button>
        )}
      </div>
    </button>
  );
};

export default BankList;
