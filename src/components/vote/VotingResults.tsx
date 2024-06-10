import { SelectToggle } from "assets";
import "./productsVote.scss";

interface IProduct {
  bank_name: string;
  def_rate: number;
  max_rate: number;
  title: string;
}

interface IVotingResultsProps {
  votes: number[][];
  selected: number[];
  data: IProduct[];
  onReset: () => void;
}

const VotingResults = ({ votes, selected, data, onReset }: IVotingResultsProps) => {
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <div className="productsvote">
      <section className="vote__utils">
        <div>{votes.flat().reduce((a, b) => a + b, 0)}명 참여중</div>
      </section>
      <section className="vote__list">
        {groupedData.map((group, groupIndex) => (
          <div key={groupIndex}>
            {group.map((product, productIndex) => {
              const voteCount = votes[groupIndex][productIndex];
              const totalVotes = votes[groupIndex].reduce((a, b) => a + b, 0);
              const votePercentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;

              return (
                <div className="vote__productlist" key={productIndex}>
                  <div className="product__infos results">
                    <div className="product__info results">
                      <div>
                        <SelectToggle
                          className={`vote--toggle ${selected[groupIndex] === productIndex ? "active" : ""}`}
                        />
                      </div>
                      <div className="product__img" />
                      <div className="product__title results">
                        <div className="voting__info">
                          <span className="product__name">{product.title}</span>
                          <div className="voting__count">{voteCount}명</div>
                        </div>
                        <div className="voting__percent">
                          <div className="voting__track__def">
                            <div
                              className={`voting__track__active ${selected[groupIndex] === productIndex ? "" : "nonselect"}`}
                              style={{ width: `${votePercentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </section>
      <section className="vote--toggle">
        <button type="button" className="vote__select results" onClick={onReset}>
          다시 투표하기
        </button>
      </section>
    </div>
  );
};

export default VotingResults;
