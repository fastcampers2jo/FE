/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckBox, FillDarkGrayCheckBox, FillGrayCheckBox, FillGreenCheckBox } from "assets";
import { Category, Likebox } from "components";
import "./likes.scss";
import LikeHomeBar from "components/homebar/LikeHomebar";
import { productList } from "mock";

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

const LikeListPage = () => {
  const [icons, setIcons] = useState<ProductProps[]>(productList);
  const [checkedCount, setCheckedCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [showLikebox, setShowLikebox] = useState(true);

  const toggleIcon = (id: number) => {
    const clickedProduct = icons.find((product) => product.id === id);

    if (!clickedProduct) {
      return; // 해당 id를 가진 상품이 없으면 종료
    }

    // 편집 모드 //
    if (isEditing) {
      const updatedIcons = icons.map((product) =>
        product.id === id ? { ...product, isChecked: !product.isChecked } : product
      );
      const updatedCheckedCount = updatedIcons.filter((product) => product.isChecked).length;
      setIcons(updatedIcons);
      setCheckedCount(updatedCheckedCount);
    } else {
      // 기존 모드(최대 2개 선택) //
      const updatedIcons = icons.map((product) =>
        product.id === id ? { ...product, isChecked: !product.isChecked } : product
      );
      const clickedProductChecked = clickedProduct.isChecked;

      if (!clickedProductChecked && checkedCount >= 2) {
        return;
      }

      setIcons(updatedIcons);
      setCheckedCount((prevCount) => prevCount + (clickedProductChecked ? -1 : 1));
    }
  };

  const editToggle = () => {
    if (!isEditing) {
      setIcons((prevIcons) => prevIcons.map((product) => ({ ...product, isChecked: false })));
    } else {
      setIcons((prevIcons) => prevIcons.map((product) => ({ ...product, isChecked: false })));
      setCheckedCount(0);
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
    setShowLikebox(count > 0); // 선택된 상품이 있으면 Likebox를 표시
  }, [icons]);

  const selectedProducts = icons.filter((product) => product.isChecked);

  /// LikeBox에서 X 아이콘 누르면 선택 취소 ///
  const handleRemoveProduct = (productName: string) => {
    const updatedIcons = icons.map((product) =>
      product.name === productName ? { ...product, isChecked: false } : product
    );
    setIcons(updatedIcons);
  };

  return (
    <section className="likelistpage">
      {isEditing ? (
        <>
          <div className="likelistpage__editing__homebar">찜하기 상품 편집</div>
          <Category pageUrlName="likelist" />
        </>
      ) : (
        <>
          <LikeHomeBar pagename="찜한 상품비교" />
          <Category pageUrlName="likelist" />
        </>
      )}

      <div className="product__comparison">
        <div className="product__utilsbar">
          <div className="utils">
            {isEditing ? (
              <>
                <button type="button" className="selectCount" onClick={handleSelectAll}>
                  <CheckBox className="selectAll--btn" />
                  <span className="">전체 {icons.length}개</span>
                </button>
                <button type="button" className="cancel" onClick={editToggle}>
                  취소
                </button>
              </>
            ) : (
              <>
                <span>전체 {icons.length}개</span>
                <button type="button" className="edit" onClick={editToggle}>
                  편집
                </button>
              </>
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

          {checkedCount > 0 && (
            <button type="button" onClick={handleSelectDelete}>
              삭제하기
            </button>
          )}
        </div>
      ) : (
        showLikebox && (
          <>
            {checkedCount === 1 && (
              <div className="comparison__toggle">
                <Likebox
                  texts="아직 하나의 상품이 더 담겨져야 해요 !"
                  classname="add__more"
                  onRemove={handleRemoveProduct}
                >
                  {selectedProducts.map((product) => product.name)}
                </Likebox>
                <div className="product__comparison__btn">
                  <span>비교하기</span>
                </div>
              </div>
            )}
            {checkedCount > 1 && (
              <div className="comparison__toggle">
                <Likebox
                  texts="이제 상품을 비교하실 수 있습니다 !"
                  onRemove={handleRemoveProduct}
                  classname="ready__comparison"
                >
                  {selectedProducts.map((product) => product.name)}
                </Likebox>
                <Link
                  to={checkedCount === 2 ? "/comparisondetail" : "#"}
                  className={`product__comparison__btn ${checkedCount > 1 ? "active" : ""}`}
                >
                  <span>비교하기</span>
                </Link>
              </div>
            )}
          </>
        )
      )}
    </section>
  );
};

export default LikeListPage;
