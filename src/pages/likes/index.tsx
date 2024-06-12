import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { delLikeList, getLikeList } from "utils/api";
import {
  CheckBox,
  FillDarkGrayCheckBox,
  FillGrayCheckBox,
  FillGreenCheckBox,
  IcBankIcon,
} from "assets";
import { Category, Likebox, TitleTop } from "components";
import { ILike } from "types";
import styles from "./styles.module.scss";

const LikeListPage = () => {
  const param = useParams();
  const queryClient = useQueryClient();
  const finProductType = param.id === "3" ? "SAVING" : "DEPOSIT";
  const { data } = useQuery({
    queryKey: ["likeList", finProductType],
    queryFn: getLikeList,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [check, setCheck] = useState<ILike[]>([]);
  // 선택
  const changeList = (id: string) => {
    setCheck((prevCheck) => {
      const isChecked = prevCheck.some(
        (item) => item.likedFinanceDto.id === id
      );
      if (isChecked) {
        // 이미 체크된 경우, 배열에서 제거
        return prevCheck.filter((item) => item.likedFinanceDto.id !== id);
      }
      // 2개 이상 체크 불가
      if (!isEditing && prevCheck.length === 2) {
        return prevCheck;
      }
      // 체크되지 않은 경우, 배열에 추가
      const newItem = data?.body?.find(
        (item: ILike) => item.likedFinanceDto.id === id
      );
      if (newItem) {
        return [...prevCheck, newItem];
      }
      return prevCheck;
    });
  };
  // 삭제
  const { mutate } = useMutation({
    mutationFn: delLikeList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likeList", finProductType] });
      setCheck([]);
    },
  });
  const handleSelectDelete = useCallback(() => {
    const del = check.map((checks) => checks.likedFinanceDto.id);
    mutate({ ids: del, finProductType: "DEPOSIT" });
  }, [check]);
  // 편집 취소시 배열 비우기
  const onEditing = useCallback(() => {
    setCheck([]);
    setIsEditing((prev) => !prev);
  }, []);
  // 전체선택
  const handleSelectAll = useCallback(() => {
    setCheck((prevCheck) => {
      if (prevCheck.length === data?.body?.length) {
        return [];
      }
      return data?.body;
    });
  }, []);
  /// LikeBox에서 X 아이콘 누르면 선택 취소 ///
  const handleRemoveProduct = (productName: string) => {
    const updatedIcons = check.filter(
      (item) => item.likedFinanceDto.finPrdtNm !== productName
    );
    setCheck(updatedIcons);
  };
  useEffect(() => {
    setCheck([]);
  }, [param.id]);
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
                <span className={styles.selectCount}>
                  전체 {check.length}개
                </span>
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
         && data?.body?.map((itam: ILike) => (
           <label
             className={styles.likelist}
             key={itam.likedFinanceDto.id}
             htmlFor={itam.likedFinanceDto.id}
           >
             <input
               type="checkbox"
               checked={check.some(
                 (item) => item.likedFinanceDto.id === itam.likedFinanceDto.id
               )}
               onChange={() => changeList(itam.likedFinanceDto.id)}
               id={itam.likedFinanceDto.id}
               name={itam.likedFinanceDto.id}
             />
             {check.some(
               (item) => item.likedFinanceDto.id === itam.likedFinanceDto.id
             ) ? (
               <FillGreenCheckBox />
               ) : (
                 <FillGrayCheckBox />
               )}
             <div className={styles.leftText}>
               <div className={styles.bankImgBox}>
                 <img src={itam.likedFinanceDto.bankImageUrl} alt="은행명" />
               </div>
               <div className={styles.bankTextbox}>
                 <em>{itam.likedFinanceDto.korCoNm}</em>
                 <p>{itam.likedFinanceDto.finPrdtNm}</p>
                 {itam.likedFinanceDto.joinWayList.map((tags, j: number) => (
                   <span key={j} className={styles.tags}>
                     {tags}
                   </span>
                 ))}
               </div>
             </div>
             <div className={styles.rightText}>
               <div>
                 <span>최고 {itam.likedFinanceDto.intrRate2Show}%</span>
                 <strong>기본 {itam.likedFinanceDto.intrRateShow}%</strong>
               </div>
             </div>
           </label>
         ))}
        {isEditing
         && data?.body?.map((datas: ILike) => (
           <label
             className={styles.likelist}
             key={datas.likedFinanceDto.id}
             htmlFor={datas.likedFinanceDto.id}
           >
             <input
               type="checkbox"
               checked={check.some(
                 (item) => item.likedFinanceDto.id === datas.likedFinanceDto.id
               )}
               onChange={() => changeList(datas.likedFinanceDto.id)}
               id={datas.likedFinanceDto.id}
               name={datas.likedFinanceDto.id}
             />
             {check.some(
               (item) => item.likedFinanceDto.id === datas.likedFinanceDto.id
             ) ? (
               <FillDarkGrayCheckBox />
               ) : (
                 <CheckBox />
               )}
             <div className={styles.leftText}>
               <div className={styles.bankImgBox}>
                 <img src={IcBankIcon} alt="은행명" />
               </div>
               <div className={styles.bankTextbox}>
                 <em>{datas.likedFinanceDto.korCoNm}</em>
                 <p>{datas.likedFinanceDto.finPrdtNm}</p>
                 {datas.likedFinanceDto.joinWayList.map((tags, j: number) => (
                   <span key={j} className={styles.tags}>
                     {tags}
                   </span>
                 ))}
               </div>
             </div>
             <div className={styles.rightText}>
               <div>
                 <span>최고 {datas.likedFinanceDto.intrRateShow}%</span>
                 <strong>기본 {datas.likedFinanceDto.intrRate2Show}%</strong>
               </div>
             </div>
           </label>
         ))}
      </article>

      {isEditing ? (
        <div className={styles.noCheck}>
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
            <Likebox
              texts="아직 하나의 상품이 더 담겨져야 해요 !"
              onRemove={handleRemoveProduct}
              data={check}
            />
          )}
          {check.length > 1 && (
            <Likebox
              texts="이제 상품을 비교하실 수 있습니다 !"
              onRemove={handleRemoveProduct}
              data={check}
            />
          )}
        </>
      )}
    </section>
  );
};

export default LikeListPage;
