/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { SetStateAction, useEffect, useState } from "react";
import { CheckBox, FillDarkGrayCheckBox, FillGrayCheckBox, FillGreenCheckBox, IcBack } from "assets";
// import { Category } from "components";
import { nav, productList } from "mock";
import "../../pages/likes/likes.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ProductProps {
  id: string;
  name: string;
  bankName: string;
  property: string;
  maxInterest: string;
  defInterest: string;
  isChecked?: boolean;
  logo?: string;
}

interface AddVoteProductProps {
  onClose: () => void;
  onSelect: (selectedProducts: ProductProps[]) => void;
}

const tabs = [{ name: "찜한 상품 추가" }, { name: "최근 본 상품 추가" }];

const AddVoteProduct = ({ onClose, onSelect }: AddVoteProductProps) => {
  const [icons, setIcons] = useState<ProductProps[]>(productList);
  const [checkedCount, setCheckedCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [activeCategory, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const toggleIcon = (id: string) => {
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

  const handleSelectAll = () => {
    const allSelected = icons.every((product) => product.isChecked);
    setIcons((prevIcons) =>
      prevIcons.map((product) => ({
        ...product,
        isChecked: !allSelected,
      }))
    );
  };

  const handleSelectDelete = () => {
    setIcons((prevIcons) => prevIcons.filter((product) => !product.isChecked));
  };

  const handleConfirm = () => {
    const selectedProducts = icons.filter((product) => product.isChecked);
    onSelect(selectedProducts);
    onClose();
  };

  useEffect(() => {
    const count = icons.filter((product) => product.isChecked).length;
    setCheckedCount(count);
  }, [icons]);

  /// 카테고리 active ///
  const handleCategoryClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  /// 탭 active ///
  const handleTabClick = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <section className="likelistpage">
          {isEditing ? (
            <>
              <div className="likelistpage__editing__homebar">찜하기 상품 편집</div>
              <div className="product__categories">
                <Swiper slidesPerView={7} spaceBetween={2} direction="horizontal">
                  {nav.map((navlist, i) => (
                    <SwiperSlide key={i}>
                      <button
                        className={`product__category ${activeCategory === i ? "active" : "product__category"}`}
                        onClick={() => handleCategoryClick(i)}
                      >
                        <span>{navlist.name}</span>
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          ) : (
            <>
              <div className="addvoteproduct__homebar">
                <IcBack className="homebar__icons__back__addvoteproduct" onClick={onClose} />
                {tabs.map((tab, i) => (
                  <div className="addvoteproduct__homebar__tabs" key={i}>
                    <button
                      className={`addvoteproduct__homebar__tab ${activeTab === i ? "active" : ""}`}
                      onClick={() => handleTabClick(i)}
                    >
                      {tab.name}
                    </button>
                  </div>
                ))}
                <div />
              </div>
              <div className="product__categories">
                <Swiper slidesPerView={7} spaceBetween={2} direction="horizontal">
                  {nav.map((navlist, i) => (
                    <SwiperSlide key={i}>
                      <button
                        className={`product__category ${activeCategory === i ? "active" : "product__category"}`}
                        onClick={() => handleCategoryClick(i)}
                      >
                        <span>{navlist.name}</span>
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
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

            {/* {isEditing && icons.length === 0 ? (
          ""
        ) : (
          <div className="products__likelist__wrapped">
            <div className="add__products">금융상품을 담아주세요!</div>
            ) : ( */}
            {icons.length === 0 ? (
              <div className="add__products">금융상품을 담아주세요!</div>
            ) : (
              <div className="products__likelist__wrapped">
                {icons.map((product) => (
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
                ))}
              </div>
            )}
          </div>

          {isEditing ? (
            <div className="editmode__toggle">
              <span>{checkedCount}개의 상품이 선택되었습니다.</span>

              {checkedCount > 0 && (
                <button
                  type="button"
                  className={`product__comparison__btn ${checkedCount > 1 ? "active" : ""}`}
                  onClick={handleSelectDelete}
                >
                  삭제하기
                </button>
              )}
            </div>
          ) : (
            <div>
              <div className="comparison__toggle">
                <div className="addvoteproduct__bottom">최대 2개까지 선택할 수 있어요!</div>
                <button
                  className={`product__comparison__btn ${checkedCount > 0 ? "active" : ""}`}
                  onClick={handleConfirm}
                >
                  <span>추가하기</span>
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AddVoteProduct;
