/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Back, X } from "assets";
import OnOffToggle from "components/onoffToggle/onoffToggle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ComparisonProps {
  title?: string;
  bankName?: string;
  image?: string;
  interest?: number;
  nets?: number;
}

type TabType = "상품 비교하기" | "비교함 기록 확인하기";

const ComparisonPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("상품 비교하기");
  const navigate = useNavigate();

  const tabs: TabType[] = ["상품 비교하기", "비교함 기록 확인하기"];

  const hadleDelete = () => {};

  const renderContent = () => {
    switch (activeTab) {
      case "상품 비교하기":
        return (
          <>
            <div className="my__object__set">
              <span className="my__object">내 목표 설정하기</span>
              <div className="my__object__info">
                <div className="my__object__info__text">월 저축 금액</div>
                <div className="my__object__info__detail">
                  <div className="monthaccount">10,000,000</div>
                  <div className="unit">원</div>
                </div>
              </div>
              <div className="my__object__info">
                <div className="my__object__info__text">저축 예정 기간</div>
                <div className="my__object__info__detail">
                  <div className="monthaccount">12</div>
                  <div className="unit month">개월</div>
                </div>
              </div>
            </div>
            <div className="comparison__products">
              <div className="products__logos">
                <div className="products__logo" />
                <div className="products__logo" />
              </div>
              <div className="products__titles">
                <div className="products__titles__wrapped">
                  <div className="products__title">우리 첫거래우대</div>
                  <div className="products__title">정기예금</div>
                </div>
                <div className="products__titles__wrapped">
                  <div className="products__title">NH고향사랑</div>
                  <div className="products__title">기부예금</div>
                </div>
              </div>
              <div className="products__makes">
                <div className="products__make">가입하기</div>
                <div className="products__make">가입하기</div>
              </div>
              <div className="products__interests">
                <div className="products__interest">3%(7%)</div>
                <div className="products__interest__info">기본(최고)금리</div>
                <div className="products__interest">2.5%(4%)</div>
              </div>
              <div className="products__periods">
                <div className="products__period">1개월 이상 5년 이하</div>
                <div className="products__period__info">가입 기간</div>
                <div className="products__period">1개월 이상 5년 이하</div>
              </div>
              <div className="products__checks__wrapped">
                <div className="products__checks">
                  <div className="products__check">
                    <div className="products__check--toggle">
                      <OnOffToggle />
                    </div>
                    <span>거래조건 1이 충족되었는가</span>
                  </div>
                  <div className="products__check__text">우대금리</div>
                  <div className="products__check">
                    <OnOffToggle />
                    <span>거래조건 1이 충족되었는가</span>
                  </div>
                </div>
                <div className="my__interests">
                  <div className="my__interest">
                    7%
                    <p>
                      {" "}
                      3% +<span> 4%</span>
                    </p>
                  </div>
                  <div className="my__interest__info">
                    나의 금리
                    <span>우대금리를 확인하세요!</span>
                  </div>
                  <div className="my__interest">
                    2.5%
                    <p>
                      {" "}
                      2.5% +<span> 0%</span>
                    </p>
                  </div>
                </div>
                <div className="my__interest__rates">
                  <div className="my__interest__rate">100,000원</div>
                  <span>이자</span>
                  <div className="my__interest__rate">100,000원</div>
                </div>
                <div className="products__nets">
                  <div className="products__net">6,000,000원</div>
                  <span>실수령액</span>
                  <div className="products__net">6,000,000원</div>
                </div>
                <div className="products__makes more">
                  <div className="products__make more">자세히보기</div>
                  <div className="products__make more">자세히보기</div>
                </div>
              </div>
            </div>
          </>
        );
      case "비교함 기록 확인하기":
        return (
          <div className="mycomparisonlist">
            <div className="comparison__products__wrapped">
              <X className="delete--btn" onClick={hadleDelete} />
              <div className="comparison__products">
                <div className="comparison__product">
                  <div className="products__logo" />
                  <div className="products__titles__wrapped">
                    <div className="products__title">우리 첫거래우대</div>
                    <div className="products__title">정기예금</div>
                  </div>
                </div>
                <span> VS </span>
                <div className="comparison__product">
                  <div className="products__logo" />
                  <div className="products__titles__wrapped">
                    <div className="products__title">NH고향사랑</div>
                    <div className="products__title">기부예금</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comparison__products__wrapped">
              <X className="delete--btn" onClick={hadleDelete} />
              <div className="comparison__products">
                <div className="comparison__product">
                  <div className="products__logo" />
                  <div className="products__titles__wrapped">
                    <div className="products__title">우리 첫거래우대</div>
                    <div className="products__title">정기예금</div>
                  </div>
                </div>
                <span> VS </span>
                <div className="comparison__product">
                  <div className="products__logo" />
                  <div className="products__titles__wrapped">
                    <div className="products__title">NH고향사랑</div>
                    <div className="products__title">기부예금</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="comparison">
        <div className="statusbar">
          <Back className="back likelist" onClick={() => navigate(-1)} />
          status bar (비교하기 페이지)
        </div>
        <div className="comparison__tabs">
          {tabs.map((tab) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              key={tab}
              className={`comparison__tab ${tab === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="comparison__content">{renderContent()}</div>
      </div>
    </section>
  );
};
export default ComparisonPage;
