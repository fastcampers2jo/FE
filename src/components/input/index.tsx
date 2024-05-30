import { useState } from "react";
import Button from "components/button";
import { IcInputDelet, IcHide, IcShow, IcInputFail } from "assets";
import styles from "./styles.module.scss";

interface IInput {
  type: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  onClear: () => void;
  error?: string;
  errorCode?: boolean;
}

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onClear,
  error,
  errorCode,
}: IInput) => {
  const [hide, setHide] = useState(false);
  const onShow = () => setHide((prev) => !prev);
  const onButton = () => onClear();
  const errors = [
    styles.error,
    errorCode && value.length > 0 && styles.success,
    !errorCode && styles.fail,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <>
      <label className={styles.label}>
        <div className={styles.inputWarp}>
          <input
            type={hide ? "text" : type}
            name={name}
            value={value}
            id={name}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.input}
          />
          {name === "emails" && (
            <Button type="button" disabled={false} height="39" width="73">
              중복확인
            </Button>
          )}
        </div>
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
          {name === "confirmPassword" && !errorCode && value.length > 0 && (
            <IcInputFail />
          )}
        </div>
      </label>
      <p className={errors}>{value.length > 0 && error}</p>
    </>
  );
};

export default Input;
