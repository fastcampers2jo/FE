import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePopup } from "stores/usePopup";
import { useSearch } from "stores/useSearch";
import { IcBack, IcMainSearch, IcSearchDelets } from "assets";
import styles from "./styles.module.scss";

const Search = () => {
  // 검색
  const param = useParams();
  const { search, searchHistory, setSearchHistory, setSearch } = useSearch();
  const [paramSearch, setParamSearch] = useState(param.search);
  const navigate = useNavigate();
  const { closeSearchPopup, searchPopup } = usePopup();
  const onSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (search.trim() === "") return alert("검색어를 입력해주세요!");
      const history = [...searchHistory, search];
      setSearchHistory(history);
      localStorage.setItem("search", JSON.stringify(history));
      setSearch("");
      closeSearchPopup();
      navigate(`/search/${search}/1`);
    },
    [search, searchHistory]
  );
  // 검색어 삭제
  const onClearSearch = useCallback(() => {
    setSearch("");
    setParamSearch("");
  }, []);
  const handlerSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setParamSearch(e.target.value);
    },
    [search, paramSearch]
  );
  const onBack = () => {
    closeSearchPopup();
    navigate("/");
  };

  // 서치 열릴시 스크롤 닫음
  useEffect(() => {
    if (searchPopup) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [searchPopup]);
  return (
    <form className={styles.searchBox} onSubmit={onSearch}>
      <button type="button" onClick={onBack}>
        <IcBack />
      </button>
      <div>
        <input
          className={param.search && styles.paramSearch}
          type="text"
          value={param.search ? paramSearch : search}
          onChange={handlerSearch}
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

export default Search;
