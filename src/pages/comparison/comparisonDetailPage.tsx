/* eslint-disable @typescript-eslint/indent */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { BGLogo, BGSticker, IcHomeArr, RightArrow } from "assets";
import OnOffToggle from "components/onoffToggle/onoffToggle";
import "./comparision.scss";
import MainHomeBar from "components/homebar";
import MysetInputBox from "components/mysetInput";
import MyperiodSelect from "components/mysetInput/myperiodSelect";
import chakLogo from "assets/chak.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import ComparisonProducts from "components/likes/ComparisonProducts";

const Product1 = [
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

const Product2 = [
  {
    id: 2,
    def_rate: 4,
    max_rate: 4.5,
    def_period: 6,
    max_period: 24,
    bank_name: "기업은행",
    title: "기업 직장인 정기예금",

    descriptions: [
      { id_description: 1, description: "마케팅 동의 시", rate: 0.2, active: false },
      { id_description: 2, description: "에너지 절감 시", rate: 0.3, active: false },
    ],
  },
];

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
interface Description {
  id_description: number;
  description: string;
  rate: number;
  active: boolean;
}

/// 202405_0010001_WR0001F /// 202405_0010001_WR0001L /// SAVING ///
const ComparisonDetailPage = () => {
  const [amount, setAmount] = useState<number>(0);
  const [period, setPeriod] = useState<number>(0);
  const [products1, setProducts1] = useState(Product1);
  const [products2, setProducts2] = useState(Product2);
  const [activeMoreViews1, setActiveMoreViews1] = useState<boolean[]>(
    Array(Product1[0].descriptions.length).fill(false)
  );
  const [activeMoreViews2, setActiveMoreViews2] = useState<boolean[]>(
    Array(Product2[0].descriptions.length).fill(false)
  );

  // const [productInfo, setProductInfo] = useState(null);
  // const [compare, setCompare] = useState({
  //   id1: "",
  //   id2: "",
  //   type: "",
  // });
  // const { setMessage } = useMessage((state) => state);
  // const { mutate } = useMutation({
  //   mutationFn: financesCompare,
  //   onSuccess: (data) => {
  //     setProductInfo(data);
  //     console.log(productInfo, "dsdsadsd");
  //   },
  //   onError: (err) => {
  //     setMessage(err.message);
  //   },
  // });

  // useEffect(() => {
  //   mutate({ id1: compare.id1, id2: compare.id2, type: compare.type });
  // }, [compare.id1, compare.id2, compare.type, mutate]);

  // 자세히보기 버튼 클릭 시 상세내용 보이기 ///
  const toggleMoreview = (productIndex: number, descIndex: number) => {
    if (productIndex === 0) {
      setActiveMoreViews1((prev) => {
        const newActiveMoreViews = [...prev];
        newActiveMoreViews[descIndex] = !newActiveMoreViews[descIndex];
        return newActiveMoreViews;
      });
    } else if (productIndex === 1) {
      setActiveMoreViews2((prev) => {
        const newActiveMoreViews = [...prev];
        newActiveMoreViews[descIndex] = !newActiveMoreViews[descIndex];
        return newActiveMoreViews;
      });
    }
  };

  //  토글 //
  const handleToggle1 = (descIndex: number) => {
    setProducts1((prev) =>
      prev.map((product, productIndex) =>
        productIndex === 0
          ? {
              ...product,
              descriptions: product.descriptions.map((desc, index) =>
                index === descIndex ? { ...desc, active: !desc.active } : desc
              ),
            }
          : product
      )
    );
  };

  const handleToggle2 = (descIndex: number) => {
    setProducts2((prev) =>
      prev.map((product, productIndex) =>
        productIndex === 0
          ? {
              ...product,
              descriptions: product.descriptions.map((desc, index) =>
                index === descIndex ? { ...desc, active: !desc.active } : desc
              ),
            }
          : product
      )
    );
  };

  const rateToggle = (isActive: boolean, baseMode: string, activeMode: string): string =>
    isActive ? `${baseMode} ${activeMode}` : baseMode;

  // 총 금리 계산 //
  const calculateTotalInterest1 = () =>
    products1.reduce(
      (total, product) =>
        total
        + product.descriptions.reduce((subTotal, desc) => (desc.active ? subTotal + desc.rate : subTotal), 0)
        + product.def_rate,
      0
    );

  const calculateTotalInterest2 = () =>
    products2.reduce(
      (total, product) =>
        total
        + product.descriptions.reduce((subTotal, desc) => (desc.active ? subTotal + desc.rate : subTotal), 0)
        + product.def_rate,
      0
    );

  const totalInterest1 = calculateTotalInterest1();
  const totalInterest2 = calculateTotalInterest2();

  const calculateTotalAmount = (set: number, month: number, int: number): number => {
    const total = set + (set * month * (int / 12)) / 100;
    return Math.floor(total);
  };

  // 총 이자 //
  const calculateTotalInt = (myset: number, mymonth: number, myint: number): number => {
    const total = (myset * mymonth * (myint / 12)) / 100;
    return Math.floor(total);
  };
  const onlyTotalInt1 = calculateTotalInt(amount, period, Number(totalInterest1));
  const onlyTotalInt2 = calculateTotalInt(amount, period, Number(totalInterest2));

  /// 총 금액 ///
  const totalAmount1 = calculateTotalAmount(amount, period, Number(totalInterest1));
  const totalAmount2 = calculateTotalAmount(amount, period, Number(totalInterest2));

  /// 3자리 마다 콤마 넣기 ///
  const formatNumberWithCommas = (total: number) => total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const commaWithTotalAmount1 = formatNumberWithCommas(totalAmount1);
  const commaWithTotalAmount2 = formatNumberWithCommas(totalAmount2);
  const commaWithTotalInt1 = formatNumberWithCommas(onlyTotalInt1);
  const commaWithTotalInt2 = formatNumberWithCommas(onlyTotalInt2);

  /// toggle 활성화한 description 보여주기 ///
  const getActiveDescriptions = (products: Product[]): Description[] => {
    const activeDescriptions: Description[] = [];
    products.forEach((product) => {
      product.descriptions.forEach((desc) => {
        if (desc.active) {
          activeDescriptions.push(desc);
        }
      });
    });
    return activeDescriptions;
  };
  const activeDescriptions1: Description[] = getActiveDescriptions(products1);
  const activeDescriptions2: Description[] = getActiveDescriptions(products2);

  return (
    <section className="comparisonDetail">
      <MainHomeBar pagename="비교하기" />
      {/* {productInfo && <div>{JSON.stringify(productInfo, null, 2)}</div>} */}
      <form className="my__object__set">
        <span>내 목표 설정하기</span>
        <div className="my__object">
          <div className="my__object__inputbox">
            <MysetInputBox onChange={(value) => setAmount(Number(value))} />
            원으로
          </div>
          <div className="my__object__selectbox__comparisondetail">
            <MyperiodSelect onChange={(value) => setPeriod(value)} />
            동안
          </div>
          <span>저축하고 싶어요!</span>
        </div>
      </form>
      <div className="comparison__makes">
        <div className="comparison__makes__bg">
          <BGLogo className="comparison__makes__bg__icon1" />
          <BGSticker className="comparison__makes__bg__icon2" />
        </div>
      </div>

      <section className="comparison__main__section">
        <div className="sticker">
          <div className="comparison__make__title">
            비교 <img src={chakLogo} alt="비교chak로고" className="chaklogo" />
          </div>
          <div className="comparison__make__wrapped">
            <div className="comparison__make--btn">
              {products1.map((product) => (
                <div className="comparison__make" key={product.id}>
                  <div className="product__info">
                    <div className="bank__name">{product.bank_name}</div>
                    <Link to="/productdetail" className="product__title">
                      {product.title}
                      <RightArrow className="product__title__icon" />
                    </Link>
                  </div>
                  <Link to="/productdetail" className="product__detail">
                    가입하기
                  </Link>
                </div>
              ))}
            </div>
            <div className="comparison__make--btn">
              {products2.map((product) => (
                <div className="comparison__make" key={product.id}>
                  <div className="product__info">
                    <div className="bank__name">{product.bank_name}</div>
                    <Link to="/productdetail" className="product__title">
                      {product.title}
                      <RightArrow className="product__title__icon" />
                    </Link>
                  </div>
                  <Link to="/productdetail" className="product__detail">
                    가입하기
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="comparison__products">
          <div className="category">은행사</div>
          <div className="bank__infos">
            {products1.map((product) => (
              <div className="bank__info" key={product.id}>
                <div className="bank__logo" />
                <div className="bank__name">{product.bank_name}</div>
              </div>
            ))}
            {products2.map((product) => (
              <div className="bank__info" key={product.id}>
                <div className="bank__logo" />
                <div className="bank__name">{product.bank_name}</div>
              </div>
            ))}
          </div>
          <div className="category">기본(최고) 금리</div>
          <div className="products__interests">
            {products1.map((product) => (
              <div className="product__interest" key={product.id}>
                <span className="def">기본</span>
                <div className="product__interest__wrapped">
                  {product.def_rate}%<div className="period">({product.def_period}개월)</div>
                </div>
                <span className="def max">최고</span>
                <div className="product__interest__wrapped max">
                  {product.max_rate}%<div className="period max">({product.max_period}개월)</div>
                </div>
              </div>
            ))}
            {products2.map((product) => (
              <div className="product__interest" key={product.id}>
                <span className="def">기본</span>
                <div className="product__interest__wrapped">
                  {product.def_rate}%<div className="period">({product.def_period}개월)</div>
                </div>
                <span className="def max">최고</span>
                <div className="product__interest__wrapped max">
                  {product.max_rate}%<div className="period max">({product.max_period}개월)</div>
                </div>
              </div>
            ))}
          </div>
          <div className="category">가입기간</div>
          <div className="products__periods">
            <div className="products__period">
              1개월 이상
              <br /> 5년 이하
            </div>
            <div className="products__period">
              1개월 이상
              <br /> 5년 이하
            </div>
          </div>
          <div className="category">가입금액</div>
          <div className="products__periods">
            <div className="products__period">100만원 이상</div>
            <div className="products__period">100만원 이상</div>
          </div>
          <div className="category">우대금리</div>
          <div className="comparisondetail__products__checks__wrapped">
            <div className="comparisondetail__products__checks">
              {products1[0].descriptions.map((desc, descIndex) => (
                <div key={desc.id_description} className="comparisondetail__products__check">
                  {String(descIndex + 1).padStart(2, "0")}
                  <div className="comparisondetail__product__checklist">
                    <div className="comparisondetail__product__description">{desc.description}</div>
                    <button
                      className="comparisondetail__product__moreview"
                      onClick={() => toggleMoreview(0, descIndex)}
                    >
                      <div className="moreview__wrapped">
                        자세히
                        <span className="comparisondetail__icon__arr">
                          {activeMoreViews1[descIndex] ? (
                            <IcHomeArr className="comparisondetail__icon__arr__rotate" />
                          ) : (
                            <IcHomeArr />
                          )}
                        </span>
                      </div>
                      {activeMoreViews1[descIndex] && (
                        <div>
                          <div className="moreview__text">
                            추가 우대금리에 대한 내용이 들어갑니다. 추가 우대금리에 대한 내용이 들어갑니다. 추가
                            우대금리에 대한 내용이 들어갑니다.
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className={rateToggle(desc.active, "comparisondetail__products__check--toggle", "active")}>
                    {desc.rate}%
                    <div className="comparisondetail__toggle__select">
                      <OnOffToggle isActive={desc.active} onToggle={() => handleToggle1(descIndex)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="comparisondetail__products__checks">
              {products2[0].descriptions.map((desc, descIndex) => (
                <div key={desc.id_description} className="comparisondetail__products__check">
                  {String(descIndex + 1).padStart(2, "0")}
                  <div className="comparisondetail__product__checklist">
                    <div className="comparisondetail__product__description">{desc.description}</div>
                    <button
                      className="comparisondetail__product__moreview"
                      onClick={() => toggleMoreview(1, descIndex)}
                    >
                      <div className="moreview__wrapped">
                        자세히
                        <span className="comparisondetail__icon__arr">
                          {activeMoreViews2[descIndex] ? (
                            <IcHomeArr className="comparisondetail__icon__arr__rotate" />
                          ) : (
                            <IcHomeArr />
                          )}
                        </span>
                      </div>
                      {activeMoreViews2[descIndex] && (
                        <div>
                          <div className="moreview__text">
                            추가 우대금리에 대한 내용이 들어갑니다. 추가 우대금리에 대한 내용이 들어갑니다. 추가
                            우대금리에 대한 내용이 들어갑니다.
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className={rateToggle(desc.active, "comparisondetail__products__check--toggle", "active")}>
                    {desc.rate}%
                    <div className="comparisondetail__toggle__select">
                      <OnOffToggle isActive={desc.active} onToggle={() => handleToggle2(descIndex)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ComparisonProducts
          defRate1={Product1[0].def_rate}
          defRate2={products2[0].def_rate}
          totalInterest1={totalInterest1}
          totalInterest2={totalInterest2}
          activeDescriptions1={activeDescriptions1}
          activeDescriptions2={activeDescriptions2}
          commaWithTotalAmount1={commaWithTotalAmount1}
          commaWithTotalAmount2={commaWithTotalAmount2}
          commaWithTotalInt1={commaWithTotalInt1}
          commaWithTotalInt2={commaWithTotalInt2}
        />
      </section>
    </section>
  );
};
export default ComparisonDetailPage;
