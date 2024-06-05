/* eslint-disable jsx-a11y/no-static-element-interactions */
import { BGLogo, BGSticker, IcEdit } from "assets";
import ComparisonProducts from "components/likes/ComparisonProducts";
import OnOffToggle from "components/onoffToggle/onoffToggle";
import { ChangeEvent, useState } from "react";
import "./comparision.scss";
import MainHomeBar from "components/homebar";

export interface ComparisonProps {
  title?: string;
  bankName?: string;
  image?: string;
  interest?: number;
  nets?: number;
}

const OBJECT__PERIOD = [
  { id: null, value: "예정기간 선택" },
  { id: "0001", value: "6개월" },
  { id: "0002", value: "7개월" },
  { id: "0003", value: "8개월" },
  { id: "0004", value: "9개월" },
  { id: "0005", value: "10개월" },
  { id: "0006", value: "11개월" },
  { id: "0007", value: "12개월" },
  { id: "0008", value: "13개월" },
];

const ComparisonDetailPage = () => {
  const [setSelectPeriodValue, setSetselectPeriodValue] = useState("예정기간 선택");

  const handlePeriodDrop = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    // setSelectPeriodValue(value);
    setSetselectPeriodValue(value);
  };

  return (
    <section>
      <form className="comparisonDetail">
        <MainHomeBar pagename="비교하기" />

        <form className="my__object__set">
          <span>내 목표 설정하기</span>
          <div className="my__object">
            <div className="my__object__inputbox">
              <input type="number" placeholder="저축금액 작성" inputMode="numeric" pattern="[0-9]*" />
              <IcEdit className="edit" />
              으로
            </div>
            <div className="my__object__inputbox__select">
              <select value={setSelectPeriodValue} onChange={handlePeriodDrop}>
                {OBJECT__PERIOD.map((el) => (
                  <option key={el.id} value={el.value}>
                    {el.value}
                  </option>
                ))}
              </select>
              동안
            </div>
            <span>저축하고 싶어요!</span>
          </div>
        </form>
        <form>
          <div className="comparison__makes">
            <div className="comparison__makes__bg">
              <BGLogo className="comparison__makes__bg__icon1" />
              <BGSticker className="comparison__makes__bg__icon2" />
            </div>
            <div className="comparison__make__title">비교 chak</div>
            <div className="comparison__make__wrapped">
              <div className="comparison__make">
                <div className="product__info">
                  <div className="bank__name">KDB 산업은행</div>
                  <div className="product__title">KDB 기업 정기예금</div>
                </div>
                <div className="product__detail">가입하기</div>
              </div>
              <div className="comparison__make">
                <div className="product__info">
                  <div className="bank__name">KDB 산업은행</div>
                  <div className="product__title">KDB 기업 정기예금</div>
                </div>
                <div className="product__detail">가입하기</div>
              </div>
            </div>
          </div>
        </form>
        <form className="comparison__products">
          <div className="category">은행사</div>
          <div className="bank__infos">
            <div className="bank__info">
              <div className="bank__logo" />
              <div className="bank__name">KDB 산업은행</div>
            </div>
            <div className="bank__info">
              <div className="bank__logo" />
              <div className="bank__name">KDB 산업은행</div>
            </div>
          </div>
          <div className="category">기본(최고) 금리</div>
          <div className="products__interests">
            <div className="product__interest">
              <span className="def">기본</span>
              <div className="product__interest__wrapped">
                3%<div className="period">(12개월)</div>
              </div>
              <span className="def max">최고</span>
              <div className="product__interest__wrapped max">
                3%<div className="period max">(12개월)</div>
              </div>
            </div>
            <div className="product__interest">
              <span className="def">기본</span>
              <div className="product__interest__wrapped">
                3%<div className="period">(12개월)</div>
              </div>
              <span className="def max">최고</span>
              <div className="product__interest__wrapped max">
                3%<div className="period max">(12개월)</div>
              </div>
            </div>
          </div>

          <div className="category">가입기간</div>
          <div className="products__periods">
            <div className="products__period">1개월 이상 5년 이하</div>
            <div className="products__period">1개월 이상 5년 이하</div>
          </div>

          <div className="category">가입금액</div>
          <div className="products__periods">
            <div className="products__period">100만원 이상</div>
            <div className="products__period">100만원 이상</div>
          </div>

          <div className="category">우대금리</div>
          <div className="comparisondetail__products__checks__wrapped">
            <div className="comparisondetail__products__checks">
              <div className="comparisondetail__products__check">
                01
                <div className="comparisondetail__product__checklist">
                  급여실적 또는 개인사업자 계좌 실적 보유 시<div className="detail">자세히 &#8744;</div>
                </div>
                <div className="comparisondetail__products__check--toggle">
                  1%
                  <div className="comparisondetail__toggle__select">
                    <OnOffToggle />
                  </div>
                </div>
              </div>
              <div className="comparisondetail__products__check">
                01
                <div className="comparisondetail__product__checklist">
                  마케팅 동의 시<div className="detail">자세히 &#8744;</div>
                </div>
                <div className="comparisondetail__products__check--toggle">
                  1%
                  <div className="comparisondetail__toggle__select">
                    <OnOffToggle />
                  </div>
                </div>
              </div>
            </div>
            <div className="comparisondetail__products__checks">
              <div className="comparisondetail__products__check">
                02
                <div className="comparisondetail__product__checklist">
                  비대면 채널 <br /> 이체실적 보유 시 <div className="detail">자세히 &#8744;</div>
                </div>
                <div className="comparisondetail__products__check--toggle">
                  1%
                  <div className="comparisondetail__toggle__select">
                    <OnOffToggle />
                  </div>
                </div>
              </div>
              <div className="comparisondetail__products__check">
                02
                <div className="comparisondetail__product__checklist">
                  에너지 절약 시<div className="detail">자세히 &#8744;</div>
                </div>
                <div className="comparisondetail__products__check--toggle">
                  1%
                  <div className="comparisondetail__toggle__select">
                    <OnOffToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </form>
      <ComparisonProducts />
    </section>
  );
};
export default ComparisonDetailPage;
