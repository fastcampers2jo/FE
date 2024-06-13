import { IcDetailarr, SNSShare, IcBigLove, IcBigNotLove, IcHomeArr, IcEdit, RightArrow } from "assets";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Fab, TitleTop } from "components";
import { IRate, IBanks } from "types";
import { useNumber } from "hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { bankHome, delLikeList, financesDetail, like } from "utils/api";
import styles from "./styles.module.scss";

interface RootObject {
  bankImageUrl: string;
  etcNote: string;
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
  isLiked: boolean;
  joinMax: number;
  joinMember: string;
  joinMin: number;
  joinWayList: string[];
  korCoNm: string;
  mtrtInt: string;
  tagList: string[];
}

const ProductDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ids = searchParams.get("id");
  const type = searchParams.get("type");
  SwiperCore.use([Autoplay]);
  // 데이터
  const [list, setList] = useState<RootObject>();
  const { mutate } = useMutation({
    mutationFn: financesDetail,
    onSuccess: (data) => {
      setList(data.body.financeDto);
    },
  });
  const { data: check } = useQuery({
    queryKey: ["bankHome", 3],
    queryFn: bankHome,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  useEffect(() => {
    mutate({ id: ids as string, type: type as string });
  }, []);
  const { mutate: likes } = useMutation({
    mutationFn: like,
    onSuccess: () => {
      mutate({ id: ids as string, type: type as string });
    },
  });
  // 삭제
  const { mutate: unlike } = useMutation({
    mutationFn: delLikeList,
    onSuccess: () => {
      mutate({ id: ids as string, type: type as string });
    },
  });
  // 찜하기
  const onlike = useCallback(() => {
    likes({ id: ids as string, type: type as string });
  }, [ids, type]);
  const onlikes = useCallback((id: string, types: string) => {
    likes({ id, type: types });
  }, []);
  const onUnLove = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    unlike({ ids: [ids as string], finProductType: type as string });
  };
  const [isActive, setIsActive] = useState(
    Array(list?.financePreferenceDtoList.length).fill(false)
  );
  const [pre, setPre] = useState<IRate[]>([]);
  const toggleRate = (id: string, name: string, rate: number, i: number) => {
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
  const rate = (lists: RootObject, pres: IRate[]) => {
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
  // 기간
  const [day, setDay] = useState(0);
  const [number, onNumber] = useNumber("");
  const num = number.replace(/\D/g, "");
  const money = Number(num) * 10000 * day;
  const year = Array.from({ length: 58 }).map((_1, i) => i + 3);
  return (
    <section>
      <div className={styles.header}>
        <TitleTop>{list?.finPrdtNm as string}</TitleTop>
      </div>
      <article className={styles.article01}>
        <h5>
          은행
          <IcDetailarr />
          {list?.korCoNm}
        </h5>
        <div className={styles.article01em}>
          {list?.korCoNm}
          <div className={styles.article01Img}>
            <img src={list?.bankImageUrl} alt={list?.bankImageUrl} />
          </div>
        </div>
        <div>
          <strong className={styles.article01strong}>{list?.finPrdtNm}</strong>
        </div>
        <div className={styles.article01tag}>
          {list?.tagList.map((tags: string, i: number) => (
            <p key={i}>{tags}</p>
          ))}
        </div>
        <p className={styles.article01Condition}>{list?.joinMember}</p>
        <div className={styles.article01Three}>
          <p className={styles.article01P}>
            {list?.intrRate2Show}
            <span>최고</span>
          </p>
          <p>
            {list?.intrRateShow}
            <span>기본</span>
          </p>
          <p />
        </div>
        <div className={styles.article01Three}>
          <em>
            {list?.joinMin}개월 이상
            <span>가입기간</span>
          </em>
          <em>
            100만원 이상
            <span>가입금액</span>
          </em>
          <em>
            {list?.joinWayList.map((way) => way)}
            <span>가입방법</span>
          </em>
        </div>
        <div className={styles.article01Btn}>
          <button type="button">
            <SNSShare />
            공유하기
          </button>
          {list?.isLiked ? (
            <button type="button" onClick={onUnLove}>
              <IcBigLove /> 찜하기
            </button>
          ) : (
            <button type="button" onClick={onlike}>
              <IcBigNotLove /> 찜하기
            </button>
          )}
        </div>
      </article>
      <article className={styles.article02}>
        <p>{list?.finPrdtNm}</p>
        <em>{list?.joinMember}</em>
        <strong>
          가용금액
          <br />
          100만원
        </strong>
        <span>누구나</span>
      </article>
      <article className={styles.article03}>
        {list?.financePreferenceDtoList &&
          list?.financePreferenceDtoList.length > 0 && (
            <div>
              <h5>chak한 금리계산</h5>
              {list?.financePreferenceDtoList.map((lists, i) => (
                <div key={i} className={styles.article03Box}>
                  <div>
                    <span>0{i + 1}</span>
                    <p>{lists.intrRateNm}</p>
                    <details className={styles.details}>
                      <summary className={styles.summary}>
                        자세히
                        <IcHomeArr />
                      </summary>
                      <strong>{lists.intrRateDetail}</strong>
                    </details>
                  </div>
                  <div className={styles.article03Btn}>
                    <em>{lists.intrRate3}%</em>
                    <button
                      className={`${isActive[i] && styles.activeToggle} ${styles.Toggle}`}
                      onClick={() =>
                        toggleRate(
                          lists.financeId,
                          lists.intrRateNm,
                          lists.intrRate3,
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
        )}
        <p>
          나의 금리는
          <span>
            {(list?.intrRateShow as number) + rate(list as RootObject, pre)}%
          </span>
        </p>
      </article>
      <article className={styles.article04}>
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
        <p>
          <em>단리</em>
          <span>
            {(list?.intrRateShow as number) + rate(list as RootObject, pre)}%
          </span>{" "}
          저축하고 싶어요!
        </p>
      </article>
      <article className={styles.article05}>
        <p>
          나의
          <span />
          실수령액은
        </p>
        <em>
          총{" "}
          {String(
            money +
              Math.round(
                money *
                  (((list?.intrRateShow as number) +
                    rate(list as RootObject, pre)) *
                    0.01) *
                  0.083 *
                  day -
                  money *
                    (((list?.intrRateShow as number) +
                      rate(list as RootObject, pre)) *
                      0.01) *
                    0.083 *
                    day *
                    0.154
              )
          ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <p>원</p>
          <span>세전</span>
        </em>
      </article>
      <article className={styles.article06}>
        <h5>
          함께보면 좋은
          <br /> 예적금 상품 추천Chak
        </h5>
        <Swiper slidesPerView={1.6} spaceBetween={10} loop>
          {check.body?.content.map((checks: IBanks, i: number) => (
            <SwiperSlide key={i}>
              <div className={styles.swiperWrap}>
                <div className={styles.swiper}>
                  <div className={styles.article06Img}>
                    <img
                      src={checks.financeDetailDto.bankImageUrl}
                      alt={checks.financeDetailDto.bankImageUrl}
                    />
                  </div>
                  <span>{checks.financeDetailDto.korCoNm}</span>
                  <p>{checks.financeDetailDto.finPrdtNm}</p>
                  <em>연 {checks.financeDetailDto.intrRateShow}%</em>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onlikes(
                      checks.financeDetailDto.financeId,
                      checks.finProductType
                    )
                  }
                >
                  {checks.financeDetailDto.isLiked ? (
                    <IcBigLove />
                  ) : (
                    <IcBigNotLove />
                  )}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
      <article className={styles.article07}>
        <h5>상품 정보</h5>
        <ul>
          <li>
            <span>가입금액</span>
            <p>
              최소 {list?.joinMin}만원 ~ 최대 {list?.joinMax}만원
            </p>
          </li>
          <li>
            <span>가입대상</span>
            <p>{list?.joinMember}</p>
          </li>
          <li>
            <span>가입방법</span>
            <p>{list?.joinWayList.map((v) => v)}</p>
          </li>
          <li>
            <span>만기 후 이자율</span>
            <p>{list?.mtrtInt}</p>
          </li>
          <li>
            <span>세제혜택</span>
            <p>비과세종합저축으로 가입가능</p>
          </li>
          <li>
            <span>예금자 보호</span>
            <p>예금보험공사 보호금융상품(1인당 최고 5천만원)</p>
          </li>
        </ul>
      </article>
      <article className={styles.article08}>
        <Link to="/lounge/1">
          라운지 <RightArrow />
        </Link>
        <Swiper loop spaceBetween={10} slidesPerView={1.4}>
          <SwiperSlide>
            <div className={styles.swiperlast}>
              <div className="productdetail__lounge__wrapped ">
                <div className="productdetail__lounge__post">
                  이 상품 어떻게 생각하시나요?? 첫...
                </div>
                <div className="productdetail__lounge__vote">
                  <button type="button" className="productdetail__lounge--btn">
                    투표중
                  </button>
                  <Link to="/community/:id">
                    투표하러가기 <RightArrow />
                  </Link>
                </div>
                <div className="productdetail__lounge__post__info">
                  <div className="productdetail__lounge__post__time">5분전</div>
                  ·
                  <div className="productdetail__lounge__post__view">
                    조회 12
                  </div>
                  ·
                  <div className="productdetail__lounge__post__comments">
                    댓글 1
                  </div>
                  ·
                  <div className="productdetail__lounge__post__thumbs">
                    추천13
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperlast}>
              <div className="productdetail__lounge__wrapped ">
                <div className="productdetail__lounge__post">
                  이 상품 어떻게 생각하시나요?? 첫...
                </div>
                <div className="productdetail__lounge__vote">
                  <button type="button" className="productdetail__lounge--btn">
                    투표중
                  </button>
                  <Link to="/community/:id">
                    투표하러가기 <RightArrow />
                  </Link>
                </div>
                <div className="productdetail__lounge__post__info">
                  <div className="productdetail__lounge__post__time">5분전</div>
                  ·
                  <div className="productdetail__lounge__post__view">
                    조회 12
                  </div>
                  ·
                  <div className="productdetail__lounge__post__comments">
                    댓글 1
                  </div>
                  ·
                  <div className="productdetail__lounge__post__thumbs">
                    추천13
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperlast}>
              <div className="productdetail__lounge__wrapped ">
                <div className="productdetail__lounge__post">
                  이 상품 어떻게 생각하시나요?? 첫...
                </div>
                <div className="productdetail__lounge__vote">
                  <button type="button" className="productdetail__lounge--btn">
                    투표중
                  </button>
                  <Link to="/community/:id">
                    투표하러가기 <RightArrow />
                  </Link>
                </div>
                <div className="productdetail__lounge__post__info">
                  <div className="productdetail__lounge__post__time">5분전</div>
                  ·
                  <div className="productdetail__lounge__post__view">
                    조회 12
                  </div>
                  ·
                  <div className="productdetail__lounge__post__comments">
                    댓글 1
                  </div>
                  ·
                  <div className="productdetail__lounge__post__thumbs">
                    추천13
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
      <div className={styles.buttton}>
        <Button
          type="button"
          font="20"
          disabled={false}
          color="111"
          height="56"
        >
          가입하기
        </Button>
      </div>
      <Fab />
    </section>
  );
};
export default ProductDetail;
