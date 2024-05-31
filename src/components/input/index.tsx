import { useState } from "react";
import { IcInputDelet, IcHide, IcShow } from "assets";
import styles from "./styles.module.scss";

interface IInput {
  type: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  onClear: () => void;
}

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onClear,
}: IInput) => {
  const [hide, setHide] = useState(false);
  const onShow = () => {
    setHide((prev) => !prev);
  };
  const onButton = () => onClear();
  return (
    <label className={styles.label}>
      <input
        type={hide ? "text" : type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
      <div className={styles.icon}>
        {value.length > 0 && (
          <button onClick={onButton} type="button">
            <img src={IcInputDelet} alt="삭제" />
          </button>
        )}
        {type === "password" && (
          <button onClick={onShow} type="button">
            <img src={hide ? IcShow : IcHide} alt="보기" />
          </button>
        )}
      </div>
    </label>
  );
};

export default Input;
