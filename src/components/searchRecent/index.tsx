import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IcSearchDelet } from "assets";
import styles from "./styles.module.scss";

interface ISearchRecent {
  local: string;
  historys: string[];
  setHistory: (searchHistory: string[]) => void;
}

const SearchRecent = ({ local, historys, setHistory }: ISearchRecent) => {
  const navigate = useNavigate();
  // 최근검색어 삭제
  const onSearchDelet = useCallback(
    (e: React.MouseEvent<HTMLOrSVGElement>, i: string) => {
      e.stopPropagation();
      const history = historys.filter((name) => name !== i);
      setHistory(history);
      localStorage.setItem(local, JSON.stringify(history));
    },
    [historys]
  );
  const onHistorys = useCallback((name: string) => {
    navigate(`/search/${name}/1`);
  }, []);
  return (
    <>
      <em className={styles.historyTitle}>최근 검색어</em>
      <div className={styles.historyKeyword}>
        {historys.map((history, i) => (
          <button key={i} onClick={() => onHistorys(history)}>
            {history}
            <IcSearchDelet
              onClick={(e: React.MouseEvent<HTMLOrSVGElement>) =>
                onSearchDelet(e, history)
              }
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default SearchRecent;
