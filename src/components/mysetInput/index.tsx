import React, { useState } from "react";
import { IcEdit } from "assets";
import { useNumber } from "hooks";
import "./mysetInput.scss";

const MysetInputBox = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasInputValue, setHasInputValue] = useState(false);
  const { number, onChange: onNumberChange } = useNumber("");

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    setHasInputValue(number.trim() !== "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onNumberChange(e);
    setHasInputValue(e.target.value.trim() !== "");
  };

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
