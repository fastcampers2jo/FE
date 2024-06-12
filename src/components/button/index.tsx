import styles from "./styles.module.scss";

interface IButton {
  type: "button" | "submit";
  children: string | string[] | number;
  disabled: boolean;
  height?: string;
  width?: string;
  onClick?: () => void;
  color?: string;
  font?: string;
}

const Button = ({
  type,
  children,
  disabled,
  height,
  width,
  onClick,
  color,
  font,
}: IButton) => {
  const buttonclass = [
    styles.button,
    height && styles[`height${height as string}`],
    width && styles[`width${width as string}`],
    color && styles[`color${color as string}`],
    font && styles[`font${font as string}`],
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button
      type={type}
      className={buttonclass}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
