import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearch } from "stores/useSearch";
import { IcMainSearch } from "assets";
import styles from "./styles.module.scss";

const BoardBox = () => {
  const param = useParams();
  const navigate = useNavigate();
  const {
    search,
    setSearch,
    setSearchFocus,
    boardHistory,
    setBoardHistory,
    setSearchOutFocus,
  } = useSearch();
  // 검색후 다시 검색창 올때
  const [paramSearch, setParamSearch] = useState(param.search);
  // 검색
  const onSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const localSearch = JSON.parse(localStorage.getItem("board") || "[]");
      localSearch.push(search);
      if (search !== "") {
        localStorage.setItem("board", JSON.stringify(localSearch));
      }
      setSearchOutFocus();
      setSearch("");
      navigate(`/board/${search || param.search}/1`);
    },
    [search, boardHistory]
  );
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
  // 최근검색어 로컬저장
  useEffect(() => {
    const localSearch = JSON.parse(localStorage.getItem("board") || "[]");
    setBoardHistory(localSearch);
  }, []);
  return (
    <form className={styles.boardBtn} onSubmit={onSearch}>
      <input
        className={
          search !== paramSearch ? param.search && styles.paramSearch : ""
        }
        placeholder="제목 + 내용으로 검색해보세요"
        value={param.search ? paramSearch : search}
        onChange={handlerSearch}
        onFocus={handlerFocus}
      />
      <IcMainSearch />
    </form>
  );
};

export default BoardBox;
