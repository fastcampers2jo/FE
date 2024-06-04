import { IcEdit, EmptyHeart, RightArrow, SNSShare } from "assets";
import "./productDetail.scss";
import OnOffToggle from "components/onoffToggle/onoffToggle";
import { ChangeEvent, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

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

const productDetail = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectPeriodValue, setSelectPeriodValue] = useState("예정기간 선택");

  const handlePeriodDrop = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    // setSelectPeriodValue(value);
    setSelectPeriodValue(value);
  };
  return (
    <div className="productDetail">
      <section className="product__preview">
        <div className="bank__category">은행 &gt; 우리은행</div>
        <div className="productdetail__info">
          <div className="productdetail__bank">우리은행 🪙</div>
          <br />
          <div className="productdetail__title">첫거래우대 정기예금</div>
          <div className="productdetail__tag">
            <div className="tag__component">방문없이가입</div>
            <div className="tag__component">누구나가입</div>
            <div className="tag__component"> 첫거래우대</div>
          </div>
          <div className="prductdetail__sub">
            우리은행 첫거래 고객을 우대하는 비대면 전용예금
          </div>
          <div className="productdetail__preview__interests">
            <div className="productdetail__interest max">
              3.6%
              <p>최고</p>
            </div>
            <div className="productdetail__interest">
              3.6%<p>기본</p>
            </div>
          </div>
          <div className="productdetail__options">
            <div>
              6개월 이상 <p>가입기간</p>
            </div>
            <div>
              100만원 이상 <p>가입금액</p>
            </div>
            <div>
              모바일 <p>가입방법</p>
            </div>
          </div>
          <div className="productdetail__preview--button">
            <div className="btn">
              <SNSShare /> 공유하기
            </div>
            <div className="btn">
              <EmptyHeart className="icon__emptyheart" />
              찜하기
            </div>
          </div>
        </div>
      </section>

      <section className="detail__interest__set">
        <div className="detail__interest__set__title">chak한 금리계산</div>
        <div className="products__checks">
          <div className="products__check">
            <div className="product__checklist">
              <p>01</p> 급여실적 또는 개인사업자 계좌 실적 보유 시
              <div className="detail">자세히 &#8744;</div>
            </div>
            <div className="products__check--toggle">
              1%
              <div className="toggle__select">
                <OnOffToggle />
              </div>
            </div>
          </div>
          <div className="products__check">
            <div className="product__checklist">
              <p>02</p> 비대면 채널 <br /> 이체 실적 보유 시
              <div className="detail">자세히 &#8744;</div>
            </div>
            <div className="products__check--toggle">
              1%
              <div className="toggle__select">
                <OnOffToggle />
              </div>
            </div>
          </div>
          <div className="products__check">
            <div className="product__checklist">
              <p>03</p> 마케팅 동의시
              <div className="detail">자세히 &#8744;</div>
            </div>
            <div className="products__check--toggle">
              0.2%
              <div className="toggle__select">
                <OnOffToggle />
              </div>
            </div>
          </div>
        </div>
        <div className="productdetail__myinterest">
          나의 금리는
          <div className="total__interest">2.2%</div>
        </div>
      </section>
      <section className="productdetail__myoptions">
        <form className="my__object__set">
          <span>계산 chakchak</span>
          <div className="my__object">
            <div className="my__object__inputbox">
              <input
                type="number"
                placeholder="저축금액 작성"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              <IcEdit className="edit" />
              으로
            </div>
            <div className="my__object__inputbox__select">
              <select value={selectPeriodValue} onChange={handlePeriodDrop}>
                {OBJECT__PERIOD.map((el) => (
                  <option key={el.id} value={el.value}>
                    {el.value}
                  </option>
                ))}
              </select>
              동안
            </div>
            <span>
              <div className="subActive">단리</div>{" "}
              <div className="percentActive">2.2%</div> 저축하고 싶어요!
            </span>
          </div>
        </form>
        <form className="productdetail__mytotal">
          <form className="productdetail__mycomparison">
            <div className="productdetail__my__title">
              나의
              <div className="productdetail__greenbar" />
              실수령액은
            </div>
            <div className="productdetail__products">
              <div className="productdetail__product">
                총 900,000
                <span className="productdetail__smallfont">원</span>
                <span className="info">세전</span>
              </div>
            </div>
          </form>
        </form>
      </section>

      <section className="productdetail__recommend__more">
        <div className="productdetail__recommend__title">
          함께보면 좋은 <br />
          예금 상품 추천Chak
        </div>
        <div className="productdetail__other__slider">
          <Swiper
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              375: {
                spaceBetween: 110,
                slidesPerView: 2,
              },
              400: {
                spaceBetween: 90,
                slidesPerView: 2,
              },
              450: {
                spaceBetween: 50,
                slidesPerView: 2,
              },
              500: { spaceBetween: 230, slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="productdetail__other">
                <div className="productdetail__other__wrapped">
                  <div className="productdetail__other__logo" />
                  <div className="productdetail__other__bank">KDB 산업은행</div>
                  <div className="productdetail__other__title">
                    KDB 정기예금
                  </div>
                  <div className="productdetail__interest">연 2.2%</div>
                </div>
                <EmptyHeart className="icon__emptyheart" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="productdetail__other">
                <div className="productdetail__other__wrapped">
                  <div className="productdetail__other__logo" />
                  <div className="productdetail__other__bank">KDB 산업은행</div>
                  <div className="productdetail__other__title">
                    KDB 정기예금
                  </div>
                  <div className="productdetail__interest">연 2.2%</div>
                </div>
                <EmptyHeart className="icon__emptyheart" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="productdetail__other">
                <div className="productdetail__other__wrapped">
                  <div className="productdetail__other__logo" />
                  <div className="productdetail__other__bank">KDB 산업은행</div>
                  <div className="productdetail__other__title">
                    KDB 정기예금
                  </div>
                  <div className="productdetail__interest">연 2.2%</div>
                </div>
                <EmptyHeart className="icon__emptyheart" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="productdetail__detail__info">
        <div className="productdetail__detail__info__title">상품정보</div>
        <div className="productdetail__detail__wrapped">
          <div className="productdetail__detail__info">가입금액</div>
          <div className="prouctdetail__detail__suv">
            최소 1만원 ~ 최대 100만원
          </div>
        </div>
        <div className="productdetail__detail__wrapped">
          <div className="productdetail__detail__info">가입대상</div>
          <div className="prouctdetail__detail__suv">
            실명의 개인 · 개인사업자 제외 · 1인 1계좌
          </div>
        </div>
        <div className="productdetail__detail__wrapped">
          <div className="productdetail__detail__info">가입방법</div>
          <div className="prouctdetail__detail__suv">모바일</div>
        </div>
        <div className="productdetail__detail__wrapped">
          <div className="productdetail__detail__info">만기 후 이자율</div>
          <div className="prouctdetail__detail__suv">
            만기일 당시 정기적금 만기후금리 적용 <br /> · 1개월 이내: 만기일
            당시 약정금리x50% <br /> · 1개월 초과 6개월 이내: 만기일 당시
            약정금리x30%
            <br /> · 6개월 초과: 만기일 당시 약정금리x20%
          </div>
        </div>
        <div className="productdetail__detail__wrapped">
          <div className="productdetail__detail__info">세제혜택</div>
          <div className="prouctdetail__detail__suv">
            비과세종합저축으로가입가능
          </div>
        </div>
        <div className="productdetail__detail__wrapped">
          <div className="productdetail__detail__info">예금자 보호</div>
          <div className="prouctdetail__detail__suv">
            예금보험공사 보호금융상품(1인당 최고 5천만원)
          </div>
        </div>
      </section>

      <section className="productdetail__lounge">
        <Link to="/lounge" className="productdetail__lounge__title">
          라운지 <RightArrow />
        </Link>
        <div className="productdetail__other__slider">
          <Swiper
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              375: {
                spaceBetween: 130,
                slidesPerView: 2,
              },
              400: {
                spaceBetween: 90,
                slidesPerView: 2,
              },
              450: {
                spaceBetween: 50,
                slidesPerView: 2,
              },
              500: { spaceBetween: 230, slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="productdetail__other">
                <div className="productdetail__other__wrapped">
                  <div className="productdetail__lounge__post">
                    이 상품 어떻게 생각하시나요?? 첫...
                  </div>
                  <div className="productdetail__lounge__vote">
                    <button
                      type="button"
                      className="productdetail__lounge--btn"
                    >
                      투표중
                    </button>
                    <Link to="/community">
                      투표하러가기 <RightArrow />
                    </Link>
                  </div>
                  <div className="productdetail__lounge__post__info">
                    <div className="productdetail__lounge__post__time">
                      5분전
                    </div>
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
              <div className="productdetail__other">
                <div className="productdetail__other__wrapped">
                  <div className="productdetail__lounge__post">
                    이 상품 어떻게 생각하시나요?? 첫...
                  </div>
                  <div className="productdetail__lounge__vote">
                    <button
                      type="button"
                      className="productdetail__lounge--btn"
                    >
                      투표중
                    </button>
                    <Link to="/community">
                      투표하러가기 <RightArrow />
                    </Link>
                  </div>
                  <div className="productdetail__lounge__post__info">
                    <div className="productdetail__lounge__post__time">
                      5분전
                    </div>
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
              <div className="productdetail__other">
                <div className="productdetail__other__wrapped">
                  <div className="productdetail__lounge__post">
                    이 상품 어떻게 생각하시나요?? 첫...
                  </div>
                  <div className="productdetail__lounge__vote">
                    <button
                      type="button"
                      className="productdetail__lounge--btn"
                    >
                      투표중
                    </button>
                    <Link to="/community">
                      투표하러가기 <RightArrow />
                    </Link>
                  </div>
                  <div className="productdetail__lounge__post__info">
                    <div className="productdetail__lounge__post__time">
                      5분전
                    </div>
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
        </div>
      </section>

      <section className="bottom-btn productdetail">
        <Link to="/" className="onboarding--btn active productdetail ">
          가입하기
        </Link>
      </section>
    </div>
  );
};
export default productDetail;
