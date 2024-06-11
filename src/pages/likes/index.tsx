import { useCallback, useState } from "react";
// import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getLikeList } from "utils/api";
import { CheckBox, FillDarkGrayCheckBox, FillGrayCheckBox, FillGreenCheckBox, IcBankIcon } from "assets";
import { Category, TitleTop } from "components";
import { fakedata } from "mock";
import styles from "./styles.module.scss";

interface IBank {
  name: string;
  toprage: number;
  rage: number;
  love: boolean;
  text: string;
  id: number;
  tag: string[];
}

const LikeListPage = () => {
  const { data } = useQuery({
    queryKey: ["likeList"],
    queryFn: getLikeList,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  console.log(data);

  const [isEditing, setIsEditing] = useState(false);
  const [check, setCheck] = useState<IBank[]>([]);
  // 선택
  const changeList = (id: number) => {
    setCheck((prevCheck) => {
      const isChecked = prevCheck.some((item) => item.id === id);
      if (isChecked) {
        // 이미 체크된 경우, 배열에서 제거
        return prevCheck.filter((item) => item.id !== id);
      }
      // 2개 이상 체크 불가
      if (!isEditing && prevCheck.length === 2) {
        return prevCheck;
      }
      // 체크되지 않은 경우, 배열에 추가
      const newItem = fakedata.find((item) => item.id === id);
      if (newItem) {
        return [...prevCheck, newItem];
      }
      return prevCheck;
    });
  };
  // const handleSelectDelete = () => {
  //   setCheck((prev) => prev.filter((item) => !item.id));
  // };
  // 편집 취소시 배열 비우기
  const onEditing = useCallback(() => {
    setCheck([]);
    setIsEditing((prev) => !prev);
  }, []);
  // 전체선택
  const handleSelectAll = useCallback(() => {
    setCheck((prevCheck) => {
      if (prevCheck.length === fakedata.length) {
        return [];
      }
      return fakedata;
    });
  }, []);
  // const selectedProducts = check.filter((product) => product.id);
  return (
    <section className={styles.likelistpage}>
      <div className={styles.likeTitle}>
        <div>
          {isEditing ? (
            <h4>찜하기 상품 편집</h4>
          ) : (
            <TitleTop>찜한 상품비교</TitleTop>
          )}
        </div>
        <Category pageUrlName="likelist" />
      </div>
      <article className={styles.article}>
        <div className={styles.utils}>
          {isEditing ? (
            <>
              <button
                type="button"
                className={styles.selectCounts}
                onClick={handleSelectAll}
              >
                <CheckBox />
                <span className={styles.selectCount}>전체 {check.length}개</span>
              </button>
              <button
                type="button"
                className={styles.cancel}
                onClick={() => onEditing()}
              >
                취소
              </button>
            </>
          ) : (
            <>
              <span className={styles.selectCount}>전체 {check.length}개</span>
              <button
                type="button"
                className={styles.edit}
                onClick={() => onEditing()}
              >
                편집
              </button>
            </>
          )}
        </div>
        {!isEditing
        && fakedata.map((icon, i) => (
          <label
            className={styles.likelist}
            key={i}
            htmlFor={String(icon.id)}
          >
            <input
              type="checkbox"
              checked={check.some((item) => item.id === icon.id)}
              onChange={() => changeList(icon.id)}
              id={String(icon.id)}
              name={String(icon.id)}
            />
            {check.some((item) => item.id === icon.id) ? (
              <FillGreenCheckBox />
            ) : (
              <FillGrayCheckBox />
            )}
            <div className={styles.leftText}>
              <div className={styles.bankImgBox}>
                <img src={IcBankIcon} alt="은행명" />
              </div>
              <div className={styles.bankTextbox}>
                <em>{icon.name}</em>
                <p>{icon.text}</p>
                {icon.tag.map((tags, j: number) => (
                  <span key={j} className={styles.tags}>
                    {tags}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.rightText}>
              <div>
                <span>최고 {icon.toprage}%</span>
                <strong>기본 {icon.rage}%</strong>
              </div>
            </div>
          </label>
        ))}
        {isEditing
        && fakedata.map((icon, i) => (
          <label
            className={styles.likelist}
            key={i}
            htmlFor={String(icon.id)}
          >
            <input
              type="checkbox"
              checked={check.some((item) => item.id === icon.id)}
              onChange={() => changeList(icon.id)}
              id={String(icon.id)}
              name={String(icon.id)}
            />
            {check.some((item) => item.id === icon.id) ? (
              <FillDarkGrayCheckBox />
            ) : (
              <CheckBox />
            )}
            <div className={styles.leftText}>
              <div className={styles.bankImgBox}>
                <img src={IcBankIcon} alt="은행명" />
              </div>
              <div className={styles.bankTextbox}>
                <em>{icon.name}</em>
                <p>{icon.text}</p>
                {icon.tag.map((tags, j: number) => (
                  <span key={j} className={styles.tags}>
                    {tags}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.rightText}>
              <div>
                <span>최고 {icon.toprage}%</span>
                <strong>기본 {icon.rage}%</strong>
              </div>
            </div>
          </label>
        ))}
      </article>

      {/* {isEditing ? (
        <div className="editmode__toggle">
          <span>{check.length}개의 상품이 선택되었습니다.</span>

          {check.length > 0 && (
            <button type="button" onClick={handleSelectDelete}>
              삭제하기
            </button>
          )}
        </div>
      ) : (
        <>
          {check.length === 1 && (
            <div className="comparison__toggle">
              <Likebox
                texts="아직 하나의 상품이 더 담겨져야 해요 !"
                classname="add__more"
                onRemove=
              >
                {selectedProducts.map((product) => product.name)}
              </Likebox>
              <div className="product__comparison__btn">
                <span>비교하기</span>
              </div>
            </div>
          )}
          {check.length > 1 && (
            <div className="comparison__toggle">
              <Likebox
                texts="이제 상품을 비교하실 수 있습니다 !"
                classname="ready__comparison"
              >
                {selectedProducts.map((product) => product.name)}
              </Likebox>
              <Link
                to="/comparisondetail"
                className={`product__comparison__btn ${check.length > 1 ? "active" : ""}`}
              >
                <span>비교하기</span>
              </Link>
            </div>
          )}
        </>
      )} */}
    </section>
  );
};

export default LikeListPage;
