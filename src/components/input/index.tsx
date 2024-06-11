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
  onClick?: () => void;
  duplicateCode?: boolean;
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
  onClick,
  duplicateCode,
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
          <div className={styles.icon}>
            {value.length > 0 && (
              <button onClick={onButton} type="button">
                <IcInputDelet />
              </button>
            )}
            {type === "password" && value.length > 0 && (
              <button onClick={onShow} type="button">
                {hide ? <IcShow /> : <IcHide />}
              </button>
            )}
            {name === "confirmPassword" && !errorCode && value.length > 0 && (
              <IcInputFail />
            )}
          </div>
        </div>
        {name === "emails" && (
          <Button
            type="button"
            disabled={name === "emails" && duplicateCode === true}
            height="39"
            width="73"
            onClick={() => onClick?.()}
          >
            중복확인
          </Button>
        )}
      </label>
      <p className={errors}>{value.length > 0 && error}</p>
      {name === "emails" && duplicateCode !== undefined && (
        <p className={duplicateCode ? styles.fail : styles.success}>
          {duplicateCode && "이미 가입된 메일이에요"}
          {duplicateCode === false && "사용가능한 메일이에요"}
        </p>
      )}
    </>
  );
};

export default Input;
