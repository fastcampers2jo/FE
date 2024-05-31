import { useCallback, useState } from "react";
import { RankPop, BankList, Button } from "components";
import { useTime } from "hooks";
import { useRank } from "stores/useRank";
import { IBank } from "types";
import {
  IcBankIcon,
  IcBigLove,
  IcBigNotLove,
  IcTaparr,
  IcViewCheck,
} from "assets";
import styles from "./styles.module.scss";

const BankBox = ({ data }: IBank) => {
  const {
    agePopup,
    closeAgePopup,
    openAgePopup,
    closeCurrentAgePopup,
    beforeAge,
    afterAge,
    setAfterAge,
    setBeforeAge,

    timePopup,
    openTimePopup,
    closeTimePopup,
    afterTime,
    setAfterTime,
    beforeTime,
    setBeforeTime,
    closeCurrentTimePopup,
  } = useRank();
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
  const views = ["실시간", "오늘", "이번 주", "이번 달"];
  const currentTime = useTime();
  const onAge = useCallback(
    (i: string) => {
      setAfterAge(i);
      setBeforeAge(afterAge);
    },
    [afterAge]
  );
  const onView = useCallback(
    (i: string) => {
      setAfterTime(i);
      setBeforeTime(afterTime);
    },
    [afterTime]
  );
  const [love, setLove] = useState<boolean[]>([]);
  const onLove = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
    e.stopPropagation();
    setLove({ ...love, [i]: !love[i] });
  };
  const onLink = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
      e.stopPropagation();
      console.log(i);
    },
    []
  );
  return (
    <>
      <div className={styles.tapTop}>
        <p className={styles.time}>{currentTime}</p>
        <div className={styles.button}>
          <button type="button" onClick={openAgePopup}>
            {afterAge} 연령 <IcTaparr />
          </button>
          <button type="button" onClick={openTimePopup}>
            {afterTime} <IcTaparr />
          </button>
        </div>
      </div>
      <div className={styles.comparison}>
        {data.slice(0, 2).map((links, i) => (
          <button
            key={i}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onLink(e, links.id)
            }
            type="button"
          >
            <p className={styles.currentRank}>
              {i + 1} <span />
            </p>
            <div>
              <div className={styles.bankTop}>
                <div className={styles.bankImgBox}>
                  <img src={IcBankIcon} alt="은행명" />
                </div>
                <button
                  type="button"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    onLove(e, i)
                  }
                >
                  {love[i] ? <IcBigLove /> : <IcBigNotLove />}
                </button>
              </div>
              <div className={styles.textbox}>
                <em>{links.name}</em>
                <p>{links.text}</p>
                <span>최고(기본) 금리</span>
                <strong>
                  {links.toprage}({links.rage})%
                </strong>
              </div>
            </div>
          </button>
        ))}
      </div>
      <BankList data={data} />
      {agePopup && (
        <RankPop
          title="연령대 선택"
          close={() => closeAgePopup(beforeAge)}
          height="295"
        >
          <div className={styles.ageContent}>
            <div className={styles.ageBtn}>
              {ageRanges.map((ageRange) => (
                <button
                  type="button"
                  key={ageRange}
                  onClick={() => onAge(ageRange)}
                  className={ageRange === afterAge ? styles.on : ""}
                >
                  {ageRange}
                </button>
              ))}
            </div>
            {beforeAge && beforeAge !== afterAge && (
              <Button
                type="button"
                disabled={false}
                onClick={() => closeCurrentAgePopup(afterAge)}
              >
                선택완료
              </Button>
            )}
          </div>
        </RankPop>
      )}
      {timePopup && (
        <RankPop
          title="조회수 선택"
          close={() => closeTimePopup(beforeTime)}
          height="406"
        >
          {views.map((view) => (
            <button
              key={view}
              type="button"
              onClick={() => onView(view)}
              className={`${styles.viewBtn} ${afterTime === view ? styles.on : ""}`}
            >
              {view}
              {afterTime === view && <IcViewCheck />}
            </button>
          ))}
          <div className={styles.viewBtnWrap}>
            <Button
              type="button"
              disabled={afterTime === beforeTime}
              onClick={() => closeCurrentTimePopup(afterTime)}
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
