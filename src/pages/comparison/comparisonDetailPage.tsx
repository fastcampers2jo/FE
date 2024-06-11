import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { TitleTop } from "components";
// import { IcHomeArr, RightArrow } from "assets";
import { IcEdit } from "assets";
import { financesCompare } from "utils/api";
import { useNumber } from "hooks";
import styles from "./styles.module.scss";

const ComparisonDetailPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id1 = searchParams.get("bank1");
  const id2 = searchParams.get("bank2");
  const type = searchParams.get("finProductType");
  const [list, setList] = useState();
  const { mutate } = useMutation({
    mutationFn: financesCompare,
    onSuccess: (data) => {
      setList(data.body.financeDtoList);
    },
  });
  console.log(list);
  useEffect(() => {
    mutate({ id1: id1 as string, id2: id2 as string, type: type as string });
  }, []);
  const [number, onNumber] = useNumber("");
  // 예정기간
  const year = Array.from({ length: 58 }).map((_1, i) => i + 3);
  return (
    <section>
      <div className={styles.header}>
        <TitleTop>비교하기</TitleTop>
      </div>
      <article className={styles.article01}>
        <h5>내 목표 설정하기</h5>
        <div className={styles.article10}>
          <label>
            <input
              type="text"
              onChange={onNumber}
              value={number}
              placeholder="저축 금액작성"
            />
            {number.length !== 0 ? "" : <IcEdit />}
          </label>
          <p>만원으로</p>
        </div>
        <div className={styles.article11}>
          <select>
            <option value="예정기간 선택">예정기간 선택</option>
            {year.map((years) => (
              <option value={years} key={years}>
                {years} 개월
              </option>
            ))}
          </select>
          <p>동안</p>
        </div>
        <p>저축하고 싶어요!</p>
      </article>
    </section>
  );
};
export default ComparisonDetailPage;
