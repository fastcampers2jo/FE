import { BoardBox, SearchRecent, TitleTop } from "components";
import { useSearch } from "stores/useSearch";
import styles from "./styles.module.scss";

const Searchboard = () => {
  const { boardHistory, setBoardHistory } = useSearch();
  return (
    <div>
      <div className={styles.boardTop}>
        <TitleTop>게시판</TitleTop>
        <BoardBox />
      </div>

      <div className={styles.searchFocus}>
        <SearchRecent
          local="board"
          historys={boardHistory}
          setHistory={setBoardHistory}
        />
      </div>
    </div>
  );
};

export default Searchboard;
