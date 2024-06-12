/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-plusplus */
import {
  EmptyHeart,
  RightArrow,
  SNSShare,
  IcBank06,
  BGSticker,
  ProductBG1,
  ProductBG2,
  IcHomeArr,
  IcSmallLove,
} from "assets";
import "./productDetail.scss";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import OnOffToggle from "components/onoffToggle/onoffToggle";
import MysetInputBox from "components/mysetInput";
import MyperiodSelect from "components/mysetInput/myperiodSelect";
import { TitleTop } from "components";
import styles from "./styles.module.scss";

interface Description {
  id_description: number;
  description: string;
  rate: number;
  active: boolean;
}

interface Product {
  id: number;
  def_rate: number;
  def_period: number;
  max_rate: number;
  max_period: number;
  bank_name: string;
  title: string;
  descriptions: Description[];
}

const Product1: Product[] = [
  {
    id: 1,
    def_rate: 3,
    def_period: 6,
    max_rate: 6,
    max_period: 12,
    bank_name: "KDB 산업은행",
    title: "KDB 기업 정기예금",
    descriptions: [
      { id_description: 1, description: "급여실적 또는 개인사업자 계좌 실적 보유 시", rate: 2, active: false },
      { id_description: 2, description: "비대면 채널 이체 실적 보유 시", rate: 1, active: false },
    ],
  },
];

const ProductDetail = () => {
  const [amount, setAmount] = useState<number>(0);
  const [period, setPeriod] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>(Product1);
  const [activeMoreViews, setActiveMoreViews] = useState(Array(Product1[0].descriptions.length).fill(false));
  const [likeProducts, setLikeProducts] = useState<Product[]>([]);

  /// 찜하기 버튼 ///
  const toggleFavorite = (product: Product) => {
    const index = likeProducts.findIndex((item) => item.id === product.id);
    if (index === -1) {
      // 새로운 상품을 찜한 목록에 추가
      setLikeProducts([...likeProducts, product]);
    } else {
      // 이미 찜한 상품을 찜한 목록에서 제거
      const newLikeProducts = [...likeProducts];
      newLikeProducts.splice(index, 1);
      setLikeProducts(newLikeProducts);
    }
  };

  /// 자세히보기 ///
  const toggleMoreview = (productIndex: number, descIndex: number) => {
    if (productIndex === 0) {
      setActiveMoreViews((prevActiveMoreViews) =>
        prevActiveMoreViews.map((value, index) => (index === descIndex ? !value : value))
      );
    }
  };

  ///  onoff토글 ///
  const handleToggle = (productIndex: number, descIndex: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, idx) =>
        idx === productIndex
          ? {
              ...product,
              descriptions: product.descriptions.map((desc, dIdx) =>
                dIdx === descIndex ? { ...desc, active: !desc.active } : desc
              ),
            }
          : product
      )
    );
  };

  const rateToggle = (isActive: boolean, baseMode: string, activeMode: string): string =>
    isActive ? `${baseMode} ${activeMode}` : baseMode;

  /// active한 토글의 금리 총합 ///

  const calculateTotalInterest = () =>
    products.reduce(
      (total, product) =>
        total
        + product.descriptions.reduce((subTotal, desc) => (desc.active ? subTotal + desc.rate : subTotal), 0)
        + product.def_rate,
      0
    );

  const totalInterest = calculateTotalInterest();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const calculateTotalAmount = (amount: number, period: number, totalInterest: number): number => {
    // eslint-disable-next-line no-mixed-operators
    const total = amount + (amount * totalInterest * (period / 12)) / 100;
    return Math.floor(total);
  };

  const totalAmount = calculateTotalAmount(amount, period, Number(totalInterest));

  return (
    <>
      <div className="productDetail">
        <div className={styles.header}>
          <TitleTop>비교하기</TitleTop>
        </div>
        <section className="product__preview">
          <div className="bank__category">은행 &gt; 우리은행</div>
          <div className="productdetail__info">
            <div className="productdetail__bank">
              우리은행 <IcBank06 className="productdetail__bank__icons" />
            </div>
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
                6%
                <p>최고</p>
              </div>
              <div className="productdetail__interest">
                3%<p>기본</p>
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

        <section className="popular__section">
          <div className="popular__title">
            월 가용금액 50만원의 20대 중반 취준생에게 인기있는 상품
          </div>
          <div className="popular__bg__section">
            <div className="popular__bg1">
              <div className="popular__round">20대 중반</div>
              <BGSticker className="sticker__bg1" />
            </div>
            <div className="popular__bg2">
              <BGSticker className="sticker__bg2" />
              <ProductBG1 className="popular__text__bg2" />
              <div className="popular__text bg2">
                가용금액
                <br /> 50만원
              </div>
            </div>
            <div className="popular__bg3">
              <BGSticker className="sticker__bg3" />
              <ProductBG2 className="popular__text__bg3" />
              <div className="popular__text bg3">취준생</div>
            </div>
          </div>
        </section>

        <div className="pagebreak" />

        <section className="detail__interest__set">
          <div className="detail__interest__set__title">chak한 금리계산</div>
          <div className="products__checks">
            {products[0].descriptions.map((desc, descIndex) => (
              <div className="products__check" key={desc.id_description}>
                <div className="product__checklist">
                  <p>{String(descIndex + 1).padStart(2, "0")}</p>{" "}
                  <div className="comparisondetail__product__description">
                    {desc.description}
                  </div>
                  <button
                    className="comparisondetail__product__moreview"
                    onClick={() => toggleMoreview(0, descIndex)}
                  >
                    <div className="moreview__wrapped">
                      자세히
                      <span className="productdetail__icon__arr">
                        {activeMoreViews[descIndex] ? (
                          <IcHomeArr className="productdetail__icon__arr__rotate" />
                        ) : (
                          <IcHomeArr />
                        )}
                      </span>
                    </div>
                    {activeMoreViews[descIndex] && (
                      <div>
                        <div className="moreview__text">
                          추가 우대금리에 대한 내용이 들어갑니다. 추가
                          우대금리에 대한 내용이 들어갑니다. 추가 우대금리에
                          대한 내용이 들어갑니다.
                        </div>
                      </div>
                    )}
                  </button>
                </div>
                <div
                  className={rateToggle(
                    desc.active,
                    "products__check--toggle",
                    "active"
                  )}
                >
                  {desc.rate}%
                  <div className="toggle__select">
                    <OnOffToggle
                      isActive={desc.active}
                      onToggle={() => handleToggle(0, descIndex)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="productdetail__myinterest">
            나의 금리는
            <div className="total__interest">{totalInterest}%</div>
          </div>
        </section>
        <section className="productdetail__myoptions">
          <div className="my__object__set">
            <span>계산 chakchak</span>
            <div className="my__object">
              <div className="my__object__inputbox">
                <MysetInputBox onChange={(value) => setAmount(Number(value))} />
                원으로
              </div>
              <form className="my__object__selectbox">
                <MyperiodSelect onChange={(value) => setPeriod(value)} />
                동안
              </form>

              <span>
                <div className="subActive">단리</div>{" "}
                <div className="percentActive">{totalInterest}%</div> 저축하고
                싶어요!
              </span>
            </div>
          </div>
          <div className="productdetail__mytotal">
            <div className="productdetail__mycomparison">
              <div className="productdetail__my__title">
                나의
                <div className="productdetail__greenbar" />
                실수령액은
              </div>
              <div className="productdetail__products">
                <div className="productdetail__product">
                  총 {totalAmount.toLocaleString()}
                  <span className="productdetail__smallfont">원</span>
                  <span className="info">세전</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="productdetail__recommend__more">
          <div className="productdetail__recommend__title">
            함께 보면 좋은 <br />
            예금 상품 추천Chak
          </div>
          <div className="productdetail__other__slider">
            <Swiper loop spaceBetween={10} slidesPerView={1.7}>
              {products.map((product) => (
                <>
                  <SwiperSlide key={product.id}>
                    <div className="productdetail__other">
                      <div className="productdetail__other__wrapped">
                        <div className="productdetail__other__logo" />
                        <div className="productdetail__other__bank">
                          {product.bank_name}
                        </div>
                        <div className="productdetail__other__title">
                          {product.title}
                        </div>
                        <div className="productdetail__interest">
                          연 {product.def_rate}%
                        </div>
                      </div>
                      <button
                        className="heart__button"
                        onClick={() => toggleFavorite(product)}
                      >
                        {likeProducts.some(
                          (item: { id: number }) => item.id === product.id
                        ) ? (
                          <IcSmallLove className="icon__emptyheart__full" />
                        ) : (
                          <EmptyHeart className="icon__emptyheart" />
                        )}
                      </button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="productdetail__other">
                      <div className="productdetail__other__wrapped">
                        <div className="productdetail__other__logo" />
                        <div className="productdetail__other__bank">
                          국민은행
                        </div>
                        <div className="productdetail__other__title">
                          첫거래우대 정기예금
                        </div>
                        <div className="productdetail__interest">연 3.3%</div>
                      </div>
                      <button
                        className="heart__button"
                        onClick={() => toggleFavorite(product)}
                      >
                        {likeProducts.some(
                          (item: { id: number }) => item.id === product.id
                        ) ? (
                          <IcSmallLove className="icon__emptyheart__full" />
                        ) : (
                          <EmptyHeart className="icon__emptyheart" />
                        )}
                      </button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={product.id}>
                    <div className="productdetail__other">
                      <div className="productdetail__other__wrapped">
                        <div className="productdetail__other__logo" />
                        <div className="productdetail__other__bank">
                          {product.bank_name}
                        </div>
                        <div className="productdetail__other__title">
                          {product.title}
                        </div>
                        <div className="productdetail__interest">
                          연 {product.def_rate}%
                        </div>
                      </div>
                      <button
                        className="heart__button"
                        onClick={() => toggleFavorite(product)}
                      >
                        {likeProducts.some(
                          (item: { id: number }) => item.id === product.id
                        ) ? (
                          <IcSmallLove className="icon__emptyheart__full" />
                        ) : (
                          <EmptyHeart className="icon__emptyheart" />
                        )}
                      </button>
                    </div>
                  </SwiperSlide>
                </>
              ))}
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

        <section className="productdetail__lounge__section">
          <Link to="/lounge" className="productdetail__lounge__title">
            라운지 <RightArrow />
          </Link>
          <div className="productdetail__lounge__swiper ">
            <Swiper loop spaceBetween={10} slidesPerView={1.7}>
              <SwiperSlide>
                <div className="productdetail__lounge__slide">
                  <div className="productdetail__lounge__wrapped ">
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
                      <Link to="/community/:id">
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
                <div className="productdetail__lounge__slide">
                  <div className="productdetail__lounge__wrapped ">
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
                      <Link to="/community/:id">
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
                <div className="productdetail__lounge__slide">
                  <div className="productdetail__lounge__wrapped ">
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
                      <Link to="/community/:id">
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
      </div>

      <section className="productdetail__bottom">
        <div className="bottom-btn__productdetail">
          <Link to="/" className="onboarding--btn active productdetail ">
            가입하기
          </Link>
        </div>
      </section>
    </>
  );
};
export default ProductDetail;
