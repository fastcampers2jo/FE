import { useNavigate, useParams } from "react-router-dom";
import { X } from "assets";
import { ILike } from "types";
import styles from "./styles.module.scss";

interface ILikebox {
  texts: string;
  data: ILike[];
  onRemove: (productName: string) => void;
}

const Likebox = ({ data, texts, onRemove }: ILikebox) => {
  const navigate = useNavigate();
  const bank1 = data[0].likedFinanceDto.id;
  const bank2 = data[1] ? data[1].likedFinanceDto.id : "";
  const param = useParams();
  const finProductType = param.id === "3" ? "SAVING" : "DEPOSIT";
  return (
    <div className={styles.likebox}>
      <p className={`${styles.span} ${data.length === 1 && styles.spanOne}`}>
        {texts}
      </p>
      <div className={styles.text}>
        <p>
          {data[0].likedFinanceDto.finPrdtNm}
          <button onClick={() => onRemove(data[0].likedFinanceDto.finPrdtNm)}>
            <X />
          </button>
        </p>
        {data[1] ? (
          <p>
            {data[1].likedFinanceDto.finPrdtNm}
            <button onClick={() => onRemove(data[1].likedFinanceDto.finPrdtNm)}>
              <X />
            </button>
          </p>
        ) : (
          ""
        )}
      </div>
      <button
        onClick={() =>
          navigate(
            `/comparisondetail?bank1=${bank1}&bank2=${bank2}&finProductType=${finProductType}`
          )
        }
        disabled={data.length === 1}
        className={styles.button}
      >
        비교하기
      </button>
    </div>
  );
};

export default Likebox;
