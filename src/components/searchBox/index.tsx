import { useCallback, useEffect, useState } from "react";
import { IcBack, IcMainSearch, IcSearchDelets } from "assets";
import { useNavigate, useParams } from "react-router-dom";
import { useSearch } from "stores/useSearch";
import styles from "./styles.module.scss";

const SearchBox = () => {
  const param = useParams();
  const navigate = useNavigate();
  // 검색후 다시 검색창 올때
  const [paramSearch, setParamSearch] = useState(param.search);
  const {
    search,
    searchHistorys,
    setSearchHistorys,
    setSearch,
    setSearchFocus,
    setSearchOutFocus,
  } = useSearch();
  // 검색
  const onSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const localSearch = JSON.parse(localStorage.getItem("search") || "[]");
      localSearch.push(search);
      if (search !== "") {
        localStorage.setItem("search", JSON.stringify(localSearch));
      }
      setSearchOutFocus();
      setSearch("");
      navigate(`/search/${search || param.search}/1`);
    },
    [search, searchHistorys]
  );
  // 검색어 삭제
  const onClearSearch = useCallback(() => {
    setSearch("");
    setParamSearch("");
  }, []);
  // 검색창 포커스 될때
  const handlerFocus = useCallback(() => {
    setSearchFocus();
  }, []);
  // 검색어를 쓸때
  const handlerSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchFocus();
      setSearch(e.target.value);
      setParamSearch(e.target.value);
    },
    [search, paramSearch]
  );
  // // 최근검색어 로컬저장
  useEffect(() => {
    const localSearch = JSON.parse(localStorage.getItem("search") || "[]");
    setSearchHistorys(localSearch);
  }, []);
  // 되돌리기 시 검색어 삭제
  const onBackSearch = () => {
    setSearch("");
    navigate("/");
  };
  return (
    <form className={styles.searchBox} onSubmit={onSearch}>
      <button type="button" onClick={onBackSearch}>
        <IcBack />
      </button>
      <div>
        <input
          className={
            search !== paramSearch ? param.search && styles.paramSearch : ""
          }
          type="text"
          value={param.search ? paramSearch : search}
          onChange={handlerSearch}
          onFocus={handlerFocus}
          placeholder="상품 키워드를 검색해보세요!"
        />
        {search.length > 0 && <IcSearchDelets onClick={onClearSearch} />}
      </div>
      <button type="submit">
        <IcMainSearch />
      </button>
    </form>
  );
};

export default SearchBox;
