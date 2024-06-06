import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { IBank } from "types";
import { IcBankIcon, IcSmallLove, IcSmallNotLove } from "assets";
import styles from "./styles.module.scss";

const BankList = ({ data }: IBank) => {
  const param = useParams();
  const [love, setLove] = useState<boolean[]>([]);
  const onLove = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
    e.stopPropagation();
    setLove({ ...love, [i]: !love[i] });
  };
  const onLink = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  }, []);
  return (
    <div>
      {data.map((rank, i: number) => (
        <button
          key={i}
          className={styles.rankList}
          type="button"
          onClick={onLink}
        >
          <p className={styles.currentRank}>
            {rank.id} <span />
          </p>
          <div className={styles.leftText}>
            <div className={styles.bankImgBox}>
              <img src={IcBankIcon} alt="은행명" />
            </div>
            <div className={styles.bankTextbox}>
              <em>{rank.name}</em>
              <p>{rank.name}</p>
              {rank.tag.map((tags, j: number) => (
                <span key={j} className={styles.tags}>
                  {tags}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.rightText}>
            <div>
              <span>최고 {rank.toprage}%</span>
              <strong>기본 {rank.rage}%</strong>
            </div>
            {param.search ? (
              ""
            ) : (
              <button
                type="button"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  onLove(e, i)
                }
              >
                {love[i] ? <IcSmallLove /> : <IcSmallNotLove />}
              </button>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default BankList;
