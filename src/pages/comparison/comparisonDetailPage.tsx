import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { TitleTop } from "components";
import { IcChak, IcComArr, IcEdit, IcHomeArr } from "assets";
import { financesCompare } from "utils/api";
import { useNumber } from "hooks";
import styles from "./styles.module.scss";

interface ICom {
  bankImageUrl: string;
  finPrdtNm: string;
  financeId: string;
  financePreferenceDtoList: {
    financeId: string;
    intrRateNm: string;
    intrRate3: number;
    intrRateDetail: string;
  }[];
  financeType: string;
  intrRate2Show: number;
  intrRateShow: number;
  joinMax: number;
  joinMin: number;
  korCoNm: string;
}

interface IRate {
  financeId: string;
  rate: {
    intrRateNm: string;
    selectedRate: number;
  }[];
}

const ComparisonDetailPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id1 = searchParams.get("bank1");
  const id2 = searchParams.get("bank2");
  const type = searchParams.get("finProductType");
  const [list, setList] = useState<ICom[]>([]);
  const { mutate } = useMutation({
    mutationFn: financesCompare,
    onSuccess: (data) => {
      setList(data.body.financeDtoList);
    },
  });

  useEffect(() => {
    mutate({ id1: id1 as string, id2: id2 as string, type: type as string });
  }, []);
  // 기간
  const [day, setDay] = useState(0);
  const [number, onNumber] = useNumber("");
  const num = number.replace(/\D/g, "");
  const [isActive, setIsActive] = useState(Array(list.length).fill(false));
  // 예정기간
  const year = Array.from({ length: 58 }).map((_1, i) => i + 3);
  const [pre, setPre] = useState<IRate[]>([]);
  const toggleRate = (id: string, name: string, rate: number, i:number) => {
    const newIsActive = [...isActive];
    newIsActive[i] = !newIsActive[i];
    setIsActive(newIsActive);
    setPre((prev) => {
      const existingIndex = prev.findIndex((p) => p.financeId === id);
      if (existingIndex !== -1) {
        // 기존 객체 업데이트
        const existingRateIndex = prev[existingIndex].rate.findIndex(
          (r) => r.intrRateNm === name && r.selectedRate === rate
        );
        if (existingRateIndex !== -1) {
          // 동일한 요율 정보 제거
          return [
            ...prev.slice(0, existingIndex),
            {
              ...prev[existingIndex],
              rate: [
                ...prev[existingIndex].rate.slice(0, existingRateIndex),
                ...prev[existingIndex].rate.slice(existingRateIndex + 1),
              ],
            },
            ...prev.slice(existingIndex + 1),
          ];
        }
        // 새로운 요율 정보 추가
        return [
          ...prev.slice(0, existingIndex),
          {
            ...prev[existingIndex],
            rate: [
              ...prev[existingIndex].rate,
              {
                intrRateNm: name,
                selectedRate: rate,
              },
            ],
          },
          ...prev.slice(existingIndex + 1),
        ];
      }
      // 새로운 객체 추가
      return [
        ...prev,
        {
          financeId: id,
          rate: [
            {
              intrRateNm: name,
              selectedRate: rate,
            },
          ],
        },
      ];
    });
  };
  const calculateSelectedRateSum = (lists: ICom, pres: IRate[]) => {
    const matchedFinance = pres.find((q) => q.financeId === lists.financeId);
    if (matchedFinance) {
      const rateSum = matchedFinance.rate.reduce(
        (acc, bcc) => acc + bcc.selectedRate,
        0
      );
      return Number(rateSum.toFixed(2));
    }
    return 0;
  };

  return (
    <section>
      <div className={styles.header}>
        <TitleTop>비교하기</TitleTop>
      </div>
      <article className={styles.article01}>
        <h5>내 목표 설정하기</h5>
        <div className={styles.article10}>
          <label>
            <input
              type="text"
              onChange={onNumber}
              value={number}
              placeholder="저축 금액작성"
            />
            {number.length !== 0 ? "" : <IcEdit />}
          </label>
          <p>만원으로</p>
        </div>
        <div className={styles.article11}>
          <select value={day} onChange={(e) => setDay(Number(e.target.value))}>
            <option value="예정기간 선택">예정기간 선택</option>
            {year.map((years) => (
              <option value={years} key={years}>
                {years}개월
              </option>
            ))}
          </select>
          <p>동안</p>
        </div>
        <p>저축하고 싶어요!</p>
      </article>
      <div className={styles.nobox} />
      <article className={styles.article02}>
        <h5>
          비교 <IcChak />
        </h5>
        <div className={styles.article02box}>
          {list?.map((lists: ICom, i) => (
            <div key={i}>
              <div className={styles.articleTextbox}>
                <span>{lists.korCoNm}</span>
                <p>
                  {lists.finPrdtNm} <IcComArr />
                </p>
              </div>
              <Link to="/">가입하기</Link>
            </div>
          ))}
        </div>
      </article>
      <article className={styles.article03}>
        <h5>은행사</h5>
        <div className={styles.article03Box}>
          {list?.map((lists: ICom, i) => (
            <div key={i}>
              <div>
                <img src={lists.bankImageUrl} alt={lists.bankImageUrl} />
              </div>
              <p>{lists.korCoNm}</p>
            </div>
          ))}
        </div>
      </article>
      <article className={styles.article04}>
        <h5>기본(최고) 금리</h5>
        <div className={styles.article04Box}>
          {list?.map((lists: ICom, i) => (
            <div key={i}>
              <div>
                <p>기본</p>
                <em>
                  {lists.intrRateShow}%<span>(12개월)</span>
                </em>
              </div>
              <div>
                <p className={styles.article04color}>최고</p>
                <em className={styles.article04color}>
                  {lists.intrRate2Show}%<span>(12개월)</span>
                </em>
              </div>
            </div>
          ))}
        </div>
      </article>
      <article className={styles.article05}>
        <h5>가입기간</h5>
        <div>
          {list?.map((lists: ICom, i) => (
            <p key={i}>
              {lists.joinMin}개월 이상
              <br />
              {lists.joinMax}개월 이하
            </p>
          ))}
        </div>
      </article>
      <article className={styles.article05}>
        <h5>가입금액</h5>
        <div>
          <p>
            100만원
            <br />
            이상
          </p>
          <p>
            100만원
            <br />
            이상
          </p>
        </div>
      </article>
      {list.some(
        (item) =>
          item.financePreferenceDtoList &&
          item.financePreferenceDtoList.length > 0
      ) && (
        <article className={styles.article06}>
          <h5>우대금리</h5>
          <div>
            {list[0].financePreferenceDtoList.length === 0 && (
              <div className={styles.article06Box} />
            )}
            {list.map((lists: ICom, j) => {
              if (
                lists.financePreferenceDtoList &&
                lists.financePreferenceDtoList.length > 0
              ) {
                return (
                  <div key={j} className={styles.article06Box}>
                    {lists.financePreferenceDtoList.map((v, i) => (
                      <div key={i}>
                        <span>{i + 1}</span>
                        <p>{v.intrRateNm}</p>
                        <details className={styles.details}>
                          <summary className={styles.summary}>
                            자세히
                            <IcHomeArr />
                          </summary>
                          <strong>{v.intrRateDetail}</strong>
                        </details>
                        <div className={styles.article06Btn}>
                          <em>{v.intrRate3}%</em>
                          <button
                            className={`${isActive[i] && styles.activeToggle} ${styles.Toggle}`}
                            onClick={() =>
                              toggleRate(
                                v.financeId,
                                v.intrRateNm,
                                v.intrRate3,
                                i
                              )
                            }
                          >
                            <span />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
            {list[1].financePreferenceDtoList.length === 0 && (
              <div className={styles.article06Box} />
            )}
          </div>
        </article>
      )}
      <article className={styles.article07}>
        <h5>ChaK 비교해본</h5>
        <p>
          나의
          <span />
          실수령 액은
        </p>
        <div>
          {list.map((lists: ICom, i) => (
            <p key={i}>
              {String(
                Number(num) * 10000 * day +
                  Math.ceil(
                    Number(num) *
                      10000 *
                      (day +
                        (lists.intrRateShow +
                          calculateSelectedRateSum(lists, pre) *
                            day *
                            (day + 1))) *
                      0.846
                  )
              ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <span>원</span>
            </p>
          ))}
        </div>
      </article>
      <article className={styles.article08}>
        <h5>나의금리를 확인하세요!</h5>
        <div>
          {list.map((lists: ICom, i) => (
            <div key={i} className={styles.article08box}>
              <em>
                {lists.intrRateShow + calculateSelectedRateSum(lists, pre)}%
              </em>
              <p>
                기본 <span>{lists.intrRateShow}%</span>
              </p>
              {pre.map((p) =>
                p.financeId === lists.financeId ? (
                  <div key={p.financeId}>
                    {p.rate.map((v, index) => (
                      <p key={index}>
                        {v.intrRateNm} <span>{v.selectedRate}%</span>
                      </p>
                    ))}
                  </div>
                ) : null
              )}
            </div>
          ))}
        </div>
      </article>
      <article className={styles.article09}>
        <h5>이자</h5>
        <div>
          {list.map((lists: ICom, i) => (
            <div className={styles.article09box} key={i}>
              <p>
                {String(
                  Math.ceil(
                    Number(num) *
                      10000 *
                      (day +
                        (lists.intrRateShow +
                          calculateSelectedRateSum(lists, pre) *
                            day *
                            (day + 1))) *
                      0.846
                  )
                ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <span>원</span>
              </p>
              <div>
                <Link
                  to={`/productdetail?${lists.financeId}&type=${lists.financeType}`}
                >
                  자세히보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
export default ComparisonDetailPage;
