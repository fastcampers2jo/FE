/* eslint-disable no-param-reassign */
import { useState } from "react";
import { SelectToggle } from "assets";
import "./productsVote.scss";
import VotingResults from "./VotingResults";

interface IProduct {
  bank_name: string;
  def_rate: number;
  max_rate: number;
  title: string;
  voteCount: number; // voteCount 추가
}

interface IProductListProps {
  data: IProduct[];
}

const ProductsVote = ({ data }: IProductListProps) => {
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  const initialVotes = groupedData.map((group) => group.map((product) => product.voteCount));
  const [votes, setVotes] = useState<number[][]>(initialVotes);
  const [selected, setSelected] = useState<number[]>(new Array(groupedData.length).fill(-1));
  const [showResults, setShowResults] = useState<boolean>(false);
  const [previewResults, setPreviewResults] = useState<boolean>(false);

  const handleToggle = (groupIndex: number, productIndex: number) => {
    if (selected[groupIndex] !== productIndex) {
      const newVotes = [...votes];
      const newSelected = [...selected];

      if (selected[groupIndex] !== -1) {
        newVotes[groupIndex][selected[groupIndex]] -= 1;
      }

      newVotes[groupIndex][productIndex] += 1;
      newSelected[groupIndex] = productIndex;

      setVotes(newVotes);
      setSelected(newSelected);
    }
  };

  const handleVote = () => {
    setShowResults(true);
    setPreviewResults(false);
  };

  const handlePreview = () => {
    setPreviewResults(true);
    setShowResults(false);
  };

  const handleReset = () => {
    setVotes(initialVotes);
    setSelected(new Array(groupedData.length).fill(-1));
    setShowResults(false);
    setPreviewResults(false);
  };

  const isToggleActive = selected.some((index) => index !== -1);

  return (
    <>
      {!showResults && !previewResults && (
        <>
          {groupedData.map((group, groupIndex) => (
            <div key={groupIndex}>
              <div className="productsvote">
                <section className="vote__utils">
                  <div>{votes[groupIndex].reduce((a, b) => a + b, 0)}명 참여중</div>
                  <div>단일선택</div>
                </section>
                <section className="vote__list">
                  {group.map((product, productIndex) => (
                    <div className="vote__productlist" key={productIndex}>
                      <div className="product__infos">
                        <div className="product__info">
                          <div>
                            <SelectToggle
                              className={`vote--toggle ${selected[groupIndex] === productIndex ? "active" : ""}`}
                              onClick={() => handleToggle(groupIndex, productIndex)}
                            />
                          </div>
                          <div className="product__img" />
                          <div className="product__title">
                            <span className="product__bankname">{product.bank_name}</span>
                            <span className="product__name">{product.title}</span>
                          </div>
                        </div>
                      </div>
                      <div className="product__interest">
                        <div className="interest__info">
                          <span className="interest__max">최고 {product.max_rate}%</span>
                          <span className="interest__def">기본 {product.def_rate}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
                <section className="vote--toggle">
                  <button
                    type="button"
                    className={`vote__select ${isToggleActive ? "active" : ""}`}
                    onClick={handleVote}
                  >
                    투표하기
                  </button>
                  <button type="button" className="vote__select preview" onClick={handlePreview}>
                    결과 미리보기
                  </button>
                </section>
              </div>
            </div>
          ))}
        </>
      )}
      {(showResults || previewResults) && (
        <VotingResults votes={votes} selected={selected} data={data} onReset={handleReset} />

      )}
    </>
  );
};

export default ProductsVote;
