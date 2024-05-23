/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Back, CheckBox, FillDarkGrayCheckBox, FillGrayCheckBox, FillGreenCheckBox } from "assets";
import { Likebox } from "components";
import "./likes.scss";

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

const productCategory = [
  { name: "예금" },
  { name: "적금" },
  { name: "파킹" },
  { name: "CMA" },
  { name: "ISA" },
  { name: "연금" },
  { name: "카드" },
];

const LikeListPage = () => {
  const navigate = useNavigate();
  const [icons, setIcons] = useState<ProductProps[]>(products);
  const [checkedCount, setCheckedCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const toggleIcon = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const product = icons.find((product) => product.id === id);

    if (!product) {
      return; // 해당 id를 가진 상품이 없으면 종료
    }

    // eslint-disable-next-line @typescript-eslint/no-shadow, no-confusing-arrow
    const updatedIcons = icons.map((product) =>
      product.id === id ? { ...product, isChecked: !product.isChecked } : product
    );

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const updatedCheckedCount = updatedIcons.filter((product) => product.isChecked).length;
    // eslint-disable-next-line @typescript-eslint/no-shadow

    if (!isEditing && checkedCount >= 2 && !product?.isChecked) {
      return;
    }

    setCheckedCount(updatedCheckedCount); // checkedCount 상태 업데이트
    setIcons(updatedIcons);
  };

  const editToggle = () => {
    if (!isEditing) {
      // 편집 모드로 전환할 때 모든 선택을 해제
      setIcons((prevIcons) => prevIcons.map((product) => ({ ...product, isChecked: false })));
    }
    setIsEditing(!isEditing);
  };

  /// 편집모드에서 전체선택하기 ///

  const handleSelectAll = () => {
    const allSelected = icons.every((product) => product.isChecked);
    setIcons((prevIcons) =>
      prevIcons.map((product) => ({
        ...product,
        isChecked: !allSelected,
      }))
    );
  };

  /// 편집모드에서 선택한 상품 삭제하기//

  const handleSelectDelete = () => {
    setIcons((prevIcons) => prevIcons.filter((product) => !product.isChecked));
  };

  useEffect(() => {
    const count = icons.filter((product) => product.isChecked).length;
    setCheckedCount(count);
  }, [icons]);

  return (
    <section className="likelistpage">
      <div className="statusbar">
        <Back className="back likelist" onClick={() => navigate(-1)} />
        status bar (찜한 상품 페이지)
      </div>

      <div className="product__categories">
        {productCategory.map((category, i) => (
          <div className="product__category" key={i}>
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <div className="product__comparison">
        <div className="product__utilsbar">
          <div className="utils">
            <span>전체 {icons.length}개</span>
            <button type="button" className="delete" onClick={editToggle}>
              {isEditing ? "" : "편집"}
            </button>
            {isEditing && (
              <button type="button" className="delete" onClick={handleSelectAll}>
                {icons.every((product) => product.isChecked) ? "전체 해제" : "전체 선택"}
              </button>
            )}
          </div>
        </div>

        {isEditing && icons.length === 0 ? (
          ""
        ) : (
          <div className="products__likelist__wrapped">
            {icons.length === 0 ? (
              <div className="add__products">금융상품을 담아주세요!</div>
            ) : (
              icons.map((product) => (
                <div key={product.id}>
                  <div className="product__likelist">
                    <div className="product__infos">
                      <div className="product__info">
                        <div className="check--toggle">
                          <button key={product.id} onClick={() => toggleIcon(product.id)}>
                            {isEditing ? (
                              product.isChecked ? (
                                <FillDarkGrayCheckBox />
                              ) : (
                                <CheckBox />
                              )
                            ) : product.isChecked ? (
                              <FillGreenCheckBox />
                            ) : (
                              <FillGrayCheckBox />
                            )}
                          </button>
                        </div>
                        <div className="product__img" />
                        <div className="product__title">
                          <span className="product__bankname">{product.bankName}</span>
                          <span className="product__name">{product.name}</span>
                          <span className="product__property">{product.property}</span>
                          <span className="product__property">{product.property}</span>
                        </div>
                      </div>
                    </div>

                    <div className="product__interest">
                      <div className="interest__info">
                        <span className="interest__max">최고 {product.maxInterest}%</span>
                        <span className="interest__def">기본 {product.defInterest}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="editmode__toggle">
          <span>{checkedCount}개의 상품이 선택되었습니다.</span>
          {checkedCount === 0 && (
            <button type="button" onClick={() => setIsEditing(false)}>
              완료하기
            </button>
          )}
          {checkedCount > 0 && (
            <button type="button" onClick={handleSelectDelete}>
              삭제하기
            </button>
          )}
        </div>
      ) : (
        <>
          {checkedCount === 1 && (
            <div className="comparison__toggle">
              <Likebox texts="아직 하나의 상품이 더 담겨져야 해요 !" classname="add__more">
                KDB 정기예금
              </Likebox>
              <div className="product__comparison__btn">
                <span>비교하기</span>
              </div>
            </div>
          )}
          {checkedCount > 1 && (
            <div className="comparison__toggle">
              <Likebox texts="이제 상품을 비교하실 수 있습니다 !" classname="ready__comparison">
                KDB 정기예금
              </Likebox>
              <Link
                to={checkedCount === 2 ? "/comparison" : "#"}
                className={`product__comparison__btn ${checkedCount > 1 ? "active" : ""}`}
              >
                <span>비교하기</span>
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default LikeListPage;
