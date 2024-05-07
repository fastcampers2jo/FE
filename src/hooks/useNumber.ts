import { useCallback, useState } from "react";

const useNumber = (initialValue: string) => {
  const [number, setNumber] = useState(initialValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // 문자 제거
      const value = e.target.value.replace(/\D/g, "");
      // 3자리마다 콤마 추가
      const unit = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setNumber(unit);
    },
    [number]
  );
  return {
    number,
    onChange,
  } as const;
};
export default useNumber;
