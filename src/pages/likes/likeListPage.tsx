/* eslint-disable jsx-a11y/anchor-is-valid */
import { Back, CheckBox, FillCheckBox, X } from "assets";
import "./likes.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface ProductProps {
  id: number;
  name: string;
  bankName: string;
  property: string;
  maxInterest: string;
  defInterest: string;
  isChecked?: boolean;
  logo?: string;
}

const products: ProductProps[] = [
  {
    id: 1,
    name: "우리 첫거래우대 정기예금",
    bankName: "우리은행",
    property: "특판",
    maxInterest: "4.5",
    defInterest: "4.5",
  },
  {
    id: 2,
    name: "사장님이 미쳤어요 복리세배이벤트",
    bankName: "야호은행",
    property: "특판",
    maxInterest: "20",
    defInterest: "5",
  },
  {
    id: 3,
    name: "우리 첫거래우대 정기예금",
    bankName: "우리은행",
    property: "특판",
    maxInterest: "4.5",
    defInterest: "4.5",
  },
  {
    id: 4,
    name: "우리 첫거래우대 정기예금",
    bankName: "우리은행",
    property: "특판",
    maxInterest: "4.5",
    defInterest: "4.5",
  },
];

const LikeListPage = () => {
  const navigate = useNavigate();
  const [icons, setIcons] = useState<ProductProps[]>(products);
  // const [checkedCount, setCheckedCount] = useState(0);

  const toggleIcon = (id: number) => {
    // eslint-disable-next-line max-len
    setIcons((prevIcons) => prevIcons.map((product) => (product.id === id ? { ...product, isChecked: !product.isChecked } : product))
    );
  };

  const handleDelete = (id: number) => {
    setIcons((prevIcons) => prevIcons.filter((product) => product.id !== id));
  };

  const handleAllDelete = () => {
    setIcons([]);
  };

  const checkedCount = icons.filter((product) => product.isChecked).length;

  return (
    <section className="likelistpage">
      <div className="statusbar"> status bar (찜한 금융상품 페이지)</div>
      <Back className="back likelist" onClick={() => navigate(-1)} />
      <form className="page__title likespage">찜한 금융상품</form>

      <div className="product__comparison">
        <div className="service__info">비교서비스는 같은 종목 상품 2개까지 사용할 수 있습니다.</div>
        <div className="product__categories">
          <div className="product__category active">예금</div>
          <div className="product__category">적금</div>
          <div className="product__category">파킹</div>
          <div className="product__category">CMA</div>
          <div className="product__category">ISA</div>
          <div className="product__category">연금</div>
          <div className="product__category">연금</div>
        </div>

        <div className="product__select">
          <div className="utils">
            <span>전체 {icons.length}개</span>
            <button type="button" className="delete" onClick={handleAllDelete}>
              전체삭제
            </button>
          </div>
        </div>

        {icons.length === 0 ? (
          <div className="add__products">금융상품을 담아주세요!</div>
        ) : (
          <div>
            {icons.map((product) => (
              <div key={product.id}>
                <div className="products__mapping">
                  <div className="product__infos">
                    <div className="product__info">
                      <div className="check--toggle">
                        <button onClick={() => toggleIcon(product.id)}>
                          {product.isChecked ? <FillCheckBox /> : <CheckBox />}
                        </button>
                      </div>
                    </div>
                    <div className="product__img" />
                    <div className="product__title">
                      <span className="product__name">{product.name}</span>
                      <span className="product__bankname">{product.bankName}</span>
                      <span className="product__property">{product.property}</span>
                    </div>
                  </div>

                  <div className="product__interest">
                    <div className="interest__info">
                      <span className="interest__max">최고 {product.maxInterest}%</span>
                      <span className="interest__def">기본 {product.defInterest}%</span>
                    </div>
                    <X className="xbox" onClick={() => handleDelete(product.id)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {checkedCount === 1 && (
        <div className="product__comparison--toggle">
          <div className="product__comparison--active">
            <div className="add__products">
              <div className="add__product">
                <X className="product__delete" />
                <div className="product__img" />
              </div>
              <div className="add__product">
                <span> 이 부분에 추가됩니다.</span>
              </div>
            </div>
            <div className="add__product__text">
              <div className="add__more">상품 하나를 더 추가해 주세요 !</div>
            </div>
          </div>
        </div>
      )}

      {checkedCount === 2 && (
        <div className="product__comparison--toggle">
          <div className="product__comparison--active">
            <div className="add__products">
              <div className="add__product">
                <X className="product__delete" />

                <div className="product__img" />
              </div>
              <div className="add__product">
                <X className="product__delete" />

                <div className="product__img" />
              </div>
            </div>
            <div className="add__product__text">
              <div className="add__complete">완료했습니다!</div>
            </div>
          </div>
        </div>
      )}

      {checkedCount > 2 && (
        <div className="product__comparison--toggle">
          <div className="product__comparison--active">
            <div className="add__products">
              <div className="add__product">
                <X className="product__delete" />
                <div className="product__img" />
              </div>
              <div className="add__product">
                <X className="product__delete" />
                <div className="product__img" />
              </div>
            </div>
            <div className="add__product__text">
              <div className="add__delete">다른 상품 하나를 삭제해주세요!</div>
            </div>
          </div>
        </div>
      )}
      <Link to={checkedCount === 2 ? "/comparison" : "#"} className={`product__comparison__btn ${checkedCount > 0 ? "active" : ""}`}>
        비교하기
      </Link>
    </section>
  );
};

export default LikeListPage;
