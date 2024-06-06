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

interface IBankBox extends IBank {
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

const BankBox = ({ data, age, setAge, time, setTime }: IBankBox) => {
  const {
    agePopup,
    closeAgePopup,
    openAgePopup,
    timePopup,
    openTimePopup,
    closeTimePopup,
  } = useRank();
  const currentTime = useTime();
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
          height="295"
          close={closeAgePopup}
        >
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
        <RankPop
          title="조회수 선택"
          close={closeTimePopup}
          height="406"
        >
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
