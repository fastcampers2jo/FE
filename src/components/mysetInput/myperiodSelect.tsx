import { useState } from "react";
import "./mysetInput.scss";

const periodOptions = () => {
  const periods = [{ id: "", value: "예정기간 선택" }];
  // eslint-disable-next-line no-plusplus
  for (let i = 3; i <= 60; i++) {
    periods.push({ id: String(i), value: `${i}개월` });
  }
  return periods;
};

const OBJECT__PERIOD = periodOptions();

const MyperiodSelect = () => {
  const [selectPeriodValue, setSelectPeriodValue] = useState(OBJECT__PERIOD[0].value);

  const handlePeriodDrop = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectPeriodValue(selectedValue);
  };
  return (
    <div className="myperiodselect">
      <select value={selectPeriodValue} onChange={handlePeriodDrop}>
        {OBJECT__PERIOD.map((product__info) => (
          <option key={product__info.id} value={product__info.value}>
            {product__info.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MyperiodSelect;
