import React, { useCallback, useState } from "react";
import { IcEdit } from "assets";
import { useNumber } from "hooks";
import "./mysetInput.scss";

const MysetInputBox = ({ onChange }: { onChange: (value: string | number) => void }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasInputValue, setHasInputValue] = useState(false);
  const [number, onNumberChange] = useNumber("");

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    setHasInputValue(number.trim() !== "");
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value.replace(/,/g, "")); // 콤마 제거 후 숫자로 변환
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(newValue)) {
      // 입력된 값이 숫자인 경우에만 변경
      onNumberChange(e); // 숫자로 변환된 값 전달
      setHasInputValue(true);
      onChange(newValue);
    } else {
      // 숫자가 아닌 경우에는 값을 무시하거나 처리
      setHasInputValue(false);
      onChange(0); // 무시하거나 다른 처리 가능
    }
  }, [onNumberChange, onChange]);

  return (
    <div className="myset__inputbox">
      <input
        type="text"
        placeholder="저축금액 작성"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleChange}
        value={number}
      />
      {!(isInputFocused || hasInputValue) && <IcEdit className="icon__edit__myset__inputbox" />}
    </div>
  );
};

export default MysetInputBox;
