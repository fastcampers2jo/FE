import { searchs } from "mock";
import { useSearch } from "stores/useSearch";
import styles from "./styles.module.scss";

const SearchTag = () => {
  const { search } = useSearch();
  return (
    <>
      {searchs.map((searchtag, i) => (
        <button key={i} className={styles.searchtag}>
          {searchtag.split(search).map((part, j) => (
            <p key={j}>
              <span>{part}</span>
              {j !== searchtag.split(search).length - 1 && (
                <span className={styles.highlightedsearchtag}>{search}</span>
              )}
            </p>
          ))}
        </button>
      ))}
    </>
  );
};

export default SearchTag;
