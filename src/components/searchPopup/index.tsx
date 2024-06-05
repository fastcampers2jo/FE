import { useCallback, useEffect } from "react";
import { Search } from "components";
import { useTime } from "hooks";
import { useSearch } from "stores/useSearch";
import { IcSearchDelet } from "assets";
import { goodSearch, searchs } from "mock";
import styles from "./styles.module.scss";

const SearchPopup = () => {
  // 검색
  const { search, searchHistory, setSearchHistory } = useSearch();
  const currentTime = useTime();
  // 최근검색어 삭제
  const onSearchDelet = useCallback(
    (e: React.MouseEvent<HTMLOrSVGElement>, i: string) => {
      e.stopPropagation();
      const history = searchHistory.filter((name) => name !== i);
      setSearchHistory(history);
      localStorage.setItem("search", JSON.stringify(history));
    },
    [searchHistory]
  );
  useEffect(() => {
    const localSearch = localStorage.getItem("search");
    setSearchHistory(JSON.parse(localSearch as string));
  }, []);
  return (
    <div className={styles.searchPop}>
      <div className={styles.searchPopTop}>
        <Search />
        {search.length > 0
        && searchs.map((searchtag, i) => (
          <button key={i} className={styles.searchtag}>
            {searchtag.split(search).map((part, j) => (
              <p key={j}>
                <span>{part}</span>
                {j !== searchtag.split(search).length - 1 && (
                  <span className={styles.highlightedsearchtag}>
                    {search}
                  </span>
                )}
              </p>
            ))}
          </button>
        ))}
      </div>
      {search.length === 0 && (
        <>
          <div className={styles.searchPopMid}>
            <em className={styles.historyTitle}>최근 검색어</em>
            <div className={styles.historyKeyword}>
              {searchHistory.slice(0, 6).map((history, i) => (
                <button key={i}>
                  {history}
                  <IcSearchDelet
                    onClick={(e: React.MouseEvent<HTMLOrSVGElement>) =>
                      onSearchDelet(e, history)
                    }
                  />
                </button>
              ))}
            </div>
          </div>
          <div className={styles.searchPopBtm}>
            <p>
              인기검색어<span>{currentTime}</span>
            </p>
            {goodSearch.map((good) => (
              <button key={good.id} className={styles.bestSearch}>
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

export default SearchPopup;
