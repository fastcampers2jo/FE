import { IcCheck, PlusGreen, SelectToggle, X } from "assets";
import "./productsVote.scss";
import { useState } from "react";
import AddVoteProduct from "./AddVoteProduct";

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

interface PostVoteAddProps {
  onClose: () => void;
  onSelectProducts: (products: ProductProps[]) => void; // 새로운 prop 추가
}

const PostVoteForm = ({ onClose, onSelectProducts }: PostVoteAddProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductProps[]>([]);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 동작을 막습니다.
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectProducts = (products: ProductProps[]) => {
    console.log("Selected products:", products);
    setSelectedProducts(products);
    onSelectProducts(products); // 선택된 상품 전달
    setIsModalOpen(false); // 모달을 닫습니다
  };

  return (
    <>
      {selectedProducts.length === 0 ? (
        <div className="postvote">
          <section className="postvote__utils">
            <div>
              <IcCheck className="postvote__icons__check" />
              복수선택
            </div>
            <span>투표 항목 추가</span>
            <X className="postvote__icons__x" onClick={onClose} />
          </section>
          <section className="vote__products__add">
            <button type="button" onClick={handleOpenModal}>
              <PlusGreen className="postvote__icons__plus" />
            </button>
            <div className="vote__products__add__info">
              찜한 상품 목록에서 항목을 추가해보세요.
              <br />
              (최대 2개까지 추가 가능)
            </div>
          </section>
        </div>
      ) : (
        <div className="postvote select">
          <section className="postvote__utils select">
            <div>
              <IcCheck className="postvote__icons__check" />
              복수선택
            </div>
            <X className="postvote__icons__x" onClick={onClose} />
          </section>
          <section className="vote__list newpostvote">
            {selectedProducts.map((product) => (
              <div key={product.id} className="vote__productlist newpostvote">
                <div className="product__infos newpostvote">
                  <div className="product__info newpostvote">
                    <div>
                      <SelectToggle className="vote--toggle" />
                    </div>
                    <div className="product__img newpostvote" />
                    <div className="product__title newpostvote">
                      <span className="product__bankname">{product.bankName}</span>
                      <span className="product__name">{product.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddVoteProduct onClose={handleCloseModal} onSelect={handleSelectProducts} />
          </div>
        </div>
      )}
    </>
  );
};
export default PostVoteForm;
