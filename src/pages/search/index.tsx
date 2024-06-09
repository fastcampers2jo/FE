import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBox, SearchRecent, SearchTag } from "components";
import { useTime } from "hooks";
import { useSearch } from "stores/useSearch";
import { goodSearch } from "mock";
import styles from "./styles.module.scss";

const Search = () => {
  const navigate = useNavigate();
  // 현재시간
  const currentTime = useTime();
  // 검색
  const { search, searchHistorys, setSearchHistorys } = useSearch();
  const onBest = useCallback((name: string) => {
    navigate(`/search/${name}/1`);
  }, []);
  return (
    <div className={styles.searchPop}>
      <div className={styles.searchPopTop}>
        <SearchBox />
        {search.length > 0 && <SearchTag />}
      </div>
      {search.length === 0 && (
        <>
          <div className={styles.searchPopMid}>
            <SearchRecent
              historys={searchHistorys.slice(0, 6)}
              setHistory={setSearchHistorys}
              local="search"
            />
          </div>
          <div className={styles.searchPopBtm}>
            <p>
              인기검색어<span>{currentTime}</span>
            </p>
            {goodSearch.map((good) => (
              <button
                key={good.id}
                className={styles.bestSearch}
                onClick={() => onBest(good.name)}
              >
                <span
                  className={`${(good.id === 1 || good.id === 2 || good.id === 3) && styles.goodPoint}`}
                >
                  {good.id}
                </span>
                <p>{good.name}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
